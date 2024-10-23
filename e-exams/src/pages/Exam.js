import React, { useState, useEffect } from "react";
import ExamLeftSideBar from "../components/ExamLeftSideBar";
import RightSideBar from "../components/RightSideBar";

export function Exam() {
  // Liste des questions et leurs choix
  const questions = [
    {
      id: 1,
      text: "Quelle est l'unité de mesure de la résistance électrique ?",
      difficulty: "Difficile",
      type: "Choix Unique",
      choices: ["Volt", "Ampère", "Ohm", "Watt"],
    },
    {
      id: 2,
      text: "Quel est le principal avantage des systèmes solaires photovoltaïques ?",
      difficulty: "Facile",
      type: "Choix Unique",
      choices: [
        "Ils sont très coûteux à l'installation.",
        "Ils génèrent de l'énergie sans émissions de gaz à effet de serre.",
        "Ils consomment beaucoup d'espace.",
        "Ils nécessitent un entretien quotidien.",
      ],
    },
    {
      id: 3,
      text: "Quel composant électronique est utilisé pour stocker de l'énergie électrique ?",
      difficulty: "Facile",
      type: "Choix Unique",
      choices: ["Diode", "Résistance", "Condensateur", "Transistor"],
    },
    {
      id: 4,
      text: "Quel est l'avantage de l'usage d'un microcontrôleur dans les systèmes embarqués ?",
      difficulty: "Moyenne",
      type: "Choix Multiple",
      choices: [
        "Réduction de la taille du système.",
        "Facilité de programmation.",
        "Consommation d'énergie élevée.",
        "Réduction des coûts de production.",
      ],
    },
    {
      id: 5,
      text: "Quelle est la formule de la loi d'Ohm ?",
      difficulty: "Facile",
      type: "Choix Unique",
      choices: ["I = U / R", "P = U / I", "U = I * R", "R = P / I"],
    },
    {
      id: 6,
      text: "Quelle technologie de réseau permet des communications sans fil sur de courtes distances ?",
      difficulty: "Moyenne",
      type: "Choix Unique",
      choices: ["Ethernet", "Bluetooth", "Fibre optique", "Wi-Fi"],
    },
  ];

  // State pour suivre la question active
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  // State pour suivre les questions validées
  const [validatedQuestions, setValidatedQuestions] = useState([]); // Initialisation de validatedQuestions

  // State pour suivre le choix sélectionné
  const [selectedChoice, setSelectedChoice] = useState(null);

  // State pour suivre le temps restant (en secondes)
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes en secondes

  // Fonction pour décrémenter la minuterie chaque seconde
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Nettoyage du timer lors de la déconnexion du composant
  }, []);

  // Fonction pour formater le temps en minutes:secondes
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Fonction pour valider la question courante
  const handleValidate = () => {
    if (selectedChoice === null) {
      alert("Veuillez sélectionner une réponse avant de valider !");
      return;
    }

    if (!validatedQuestions.includes(currentQuestion.id)) {
      setValidatedQuestions([...validatedQuestions, currentQuestion.id]);
    }
  };

  // Fonction pour gérer le clic sur "Terminer"
  const handleFinish = () => {
    alert("Vous avez terminé toutes les questions !");
  };

  // Vérifier si toutes les questions ont été validées
  const allQuestionsValidated = validatedQuestions.length === questions.length;

  return (
    <div className="mainHolder bg-[#f5f5f5] h-screen flex relative">
      {/* Left Sidebar */}
      <div className="w-[250px]">
        <ExamLeftSideBar
          onQuestionClick={(id) => {
            const selectedQuestion = questions.find((q) => q.id === id);
            setCurrentQuestion(selectedQuestion);
            setSelectedChoice(null);
          }}
          validatedQuestions={validatedQuestions} // Passer la prop validatedQuestions ici
        />
      </div>

      {/* Center Content avec scrolling pour toute la section */}
      <div className="flex-1 flex flex-col gap-6 p-1.5 pl-6 pr-6 h-screen overflow-auto">
        {/* Header */}
        <div className="CenterHeader bg-[#ffffff] h-20 flex items-center justify-start rounded-lg shadow-lg pl-10 text-[18px] text-black py-5">
          C1 - Interface puissance système
        </div>

        {/* Center Bottom - Contenu principal */}
        <div className="CenterBottom bg-[#ffffff] h-full flex flex-col gap-6 p-6 rounded-lg shadow-lg relative">
          {/* Indicateurs de progression */}
          <div className="flex justify-center">
            <div className="flex justify-center bg-[#fcfcfc] py-2 px-8 rounded-lg w-fit items-center">
              {[...Array(questions.length)].map((_, index) => (
                <span
                  key={index}
                  className={`w-4 h-4 mx-1 rounded-full ${
                    currentQuestion.id === index + 1
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  }`}
                ></span>
              ))}
            </div>
          </div>

          {/* Minuterie */}
          <div className="flex justify-end">
            <div className="bg-[#ded8d8] text-black px-4 py-2 rounded-md text-[18px] font-mono">
              {formatTime(timeLeft)}
            </div>
          </div>

          {/* Informations sur la question */}
          <div className="flex justify-start items-center gap-4">
            <div className="flex items-center gap-2">
              <div
                className={`w-4 h-4 rounded-full ${
                  currentQuestion.difficulty === "Difficile"
                    ? "bg-[#e9634c]"
                    : currentQuestion.difficulty === "Moyenne"
                    ? "bg-[#e9d64b]"
                    : "bg-[#88d347]"
                }`}
              ></div>
              <span className="text-black font-normal">
                {currentQuestion.difficulty}
              </span>
            </div>

            {/* Type de question */}
            <div className="border border-[#5b5b5b] px-10 rounded-full text-sm font-normal text-gray-800 shadow-md">
              {currentQuestion.type}
            </div>
          </div>

          {/* Texte de la question */}
          <div className="QuestionText text-[18px] font-medium text-black">
            {currentQuestion.text}
          </div>

          {/* Options de réponse */}
          <div className="ChoicesSection flex flex-col gap-4">
            {currentQuestion.choices.map((choice, index) => (
              <div
                key={index}
                className="ChoiceHolder flex items-center gap-4 p-4 bg-[#eeeeee] rounded-lg"
              >
                <input
                  type="radio"
                  name="question"
                  className="h-5 w-5"
                  onChange={() => setSelectedChoice(choice)}
                  checked={selectedChoice === choice}
                />
                <span className="ChoiceText text-black">{choice}</span>
              </div>
            ))}
          </div>

          {/* Boutons "Valider" et "Terminer" sur la même ligne */}
          <div className="Validation flex justify-between items-center gap-4 mt-4">
            <button
              className="bg-[#a3d7e6] text-white px-20 py-2 rounded-lg hover:bg-[#95d7e9]"
              onClick={handleValidate}
            >
              Valider
            </button>

            {/* Bouton "Terminer" */}
            {allQuestionsValidated && (
              <button
                className="bg-[#e53935] text-white px-16 py-2 rounded-lg hover:bg-[#d32f2f]"
                onClick={handleFinish}
              >
                Terminer
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-[250px]">
        <RightSideBar />
      </div>
    </div>
  );
}
