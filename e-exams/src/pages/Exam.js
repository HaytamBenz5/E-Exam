import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExamLeftSideBar from "../components/ExamLeftSideBar";
import RightSideBar from "../components/RightSideBar";
import { useExamAccess } from "../contexts/ExamAccessContext";

export function Exam() {
  const navigate = useNavigate();
  const { hasAccess } = useExamAccess();

  useEffect(() => {
    if (!hasAccess) {
      navigate("/pre-exam");
    }
  }, [hasAccess, navigate]);

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [validatedQuestions, setValidatedQuestions] = useState([]);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // Temps restant (30 minutes en secondes)

  const currentQuestion = questions[currentIndex];
  const allQuestionsValidated = validatedQuestions.length === questions.length;

  // Gestion du temps
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
    return () => clearInterval(timer);
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedChoice(null); // Réinitialise le choix pour chaque question
    }
  };

  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedChoice(null); // Réinitialise le choix pour chaque question
    }
  };

  const handleValidate = () => {
    if (selectedChoice === null) {
      alert("Veuillez sélectionner une réponse avant de valider !");
      return;
    }
    if (!validatedQuestions.includes(currentQuestion.id)) {
      setValidatedQuestions([...validatedQuestions, currentQuestion.id]);
    }
  };

  const handleFinish = () => {
    alert("Vous avez terminé toutes les questions !");
    navigate("/home");
  };

  return (
    <div className="mainHolder bg-[#f5f5f5] h-screen flex relative">
      <div className="w-[250px]">
        <ExamLeftSideBar
          onQuestionClick={(index) => {
            setCurrentIndex(index);
            setSelectedChoice(null);
          }}
          onPrev={handlePrevQuestion}
          onNext={handleNextQuestion}
          validatedQuestions={validatedQuestions}
        />
      </div>

      <div className="flex-1 flex flex-col gap-6 p-1.5 pl-6 pr-6 h-screen overflow-auto">
        {/* Header contenant le titre et le chronomètre aligné à droite */}
        <div className="flex justify-between items-center bg-[#ffffff] h-20 rounded-lg shadow-lg p-4">
          <div className="text-[18px] font-semibold text-black">
            C1 - Interface puissance système
          </div>
        </div>

        <div className="CenterBottom bg-[#ffffff] h-full flex flex-col gap-6 p-6 rounded-lg shadow-lg relative">
          {/* Barre de progression centrée */}
          <div
            className="flex
        justify-center mb-4"
          >
            <div className="flex bg-[#fcfcfc] py-2 px-8 rounded-lg items-center">
              {[...Array(questions.length)].map((_, index) => (
                <span
                  key={index}
                  className={`w-4 h-4 mx-1 rounded-full ${
                    currentIndex === index ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            {/* Difficulté et Type de question ensemble */}
            <div className="flex items-center gap-4">
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
              <div className="border border-gray-400 px-4 py-1 rounded-full text-sm font-semibold text-gray-800 shadow-md">
                {currentQuestion.type}
              </div>
            </div>

            {/* Minuteur à droite */}
            <div className="bg-gray-200 text-black px-4 py-2 rounded-md text-[18px] font-mono">
              {formatTime(timeLeft)}
            </div>
          </div>

          <div className="QuestionText text-[18px] font-medium text-black">
            {currentQuestion.text}
          </div>

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

          <div className="Validation flex justify-between items-center gap-4 mt-4">
            <button
              className="bg-[#a3d7e6] text-white px-20 py-2 rounded-lg hover:bg-[#95d7e9]"
              onClick={handleValidate}
            >
              Valider
            </button>
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

      <div className="w-[250px]">
        <RightSideBar />
      </div>
    </div>
  );
}
