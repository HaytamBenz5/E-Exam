import React from "react";
import { useNavigate } from "react-router-dom"; // Importer le hook useNavigate
import LeftSideBar from "../components/LeftSidebar";
import RightSideBar from "../components/RightSideBar";
import preExamImage from "../assets/images/pre-exam.png";

export function PreExam() {
  const navigate = useNavigate(); // Initialiser le hook useNavigate

  const handleStartClick = () => {
    navigate("/exam"); // Redirige vers la page /exam
  };

  return (
    <div className="mainHolder bg-[#f5f5f5] h-screen flex relative">
      {/* Left Sidebar */}
      <div className="w-[307px]">
        <LeftSideBar />
      </div>

      {/* Center Content avec scrolling pour toute la section */}
      <div className="flex-1 flex flex-col gap-6 p-1.5 pl-6 pr-6 h-screen overflow-auto">
        {/* Header */}
        <div className="CenterHeader bg-[#ffffff] h-20 flex items-center justify-start rounded-lg shadow-lg pl-10 text-[18px] text-black py-5">
          C1 - Interface puissance système
        </div>

        {/* Center Bottom - Contenu principal avec scrolling */}
        <div className="CenterBottom bg-[#ffffff] h-full flex flex-col gap-6 p-6 rounded-lg shadow-lg relative items-center justify-center">
          {/* Image illustrative */}
          <img
            src={preExamImage}
            alt="Pre Exam Image"
            className="w-48 h-48 object-contain"
          />

          {/* Titre principal */}
          <h1 className="text-2xl font-bold text-gray-800">
            Prêt pour le quiz
          </h1>

          {/* Description */}
          <p className="text-center text-gray-600 max-w-md">
            Testez vos compétences sur les sujets de ce cours et gagnez des
            points de maîtrise pour ce que vous connaissez déjà !
          </p>

          {/* Informations supplémentaires */}
          <p className="text-center text-gray-600">
            10 questions - 30 à 45 minutes.
          </p>

          {/* Boutons */}
          <div className="flex gap-4 mt-8">
            {/* Bouton "Commençons" avec la redirection */}
            <button
              className="bg-[#5680d8] text-white px-6 py-2 rounded-lg hover:bg-[#365899] w-48"
              onClick={handleStartClick} // Redirection lors du clic
            >
              Commençons
            </button>

            {/* Bouton "Instructions du professeur" */}
            <button className="bg-[#ff5733] text-white px-6 py-2 rounded-lg hover:bg-[#d32f2f] w-48">
              Instructions du professeur
            </button>
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
