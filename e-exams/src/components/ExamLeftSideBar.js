import React from "react";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import Logo from "../assets/icons/logo.png";

const ExamLeftSideBar = ({
  onQuestionClick,
  onPrev,
  onNext,
  validatedQuestions,
}) => {
  const questionColors = {
    1: "bg-[#e9634c]", // Rouge
    2: "bg-[#88d347]", // Vert clair
    3: "bg-[#88d347]", // Vert clair
    4: "bg-[#e9d64b]", // Jaune
    5: "bg-[#88d347]", // Vert clair
    6: "bg-[#e9d64b]", // Jaune
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full sm:w-64 bg-white shadow-lg m-[6px] rounded-lg">
      <div className="flex flex-col h-full justify-between py-6">
        {/* Logo Section */}
        <div className="h-20 flex items-center px-8 mb-10 ml-4">
          <a href="javascript:void(0)" className="flex-none">
            <img src={Logo} width={160} className="mx-auto" alt="Logo" />
          </a>
        </div>

        {/* Questions Section */}
        <div className="flex flex-col space-y-4 px-4 gap-3">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <button
              key={id}
              className={`${questionColors[id]} text-white font-semibold py-2 px-4 rounded-lg flex justify-between items-center`}
              onClick={() => onQuestionClick(id)}
            >
              {`Question ${id}`}
              {validatedQuestions.includes(id) && (
                <AiOutlineCheckCircle className="text-white text-xl" />
              )}
            </button>
          ))}
        </div>

        {/* Arrows Section */}
        <div className="flex justify-center space-x-4 mt-6">
          <button
            className="bg-black text-white p-2 rounded-full"
            onClick={onPrev}
          >
            <AiOutlineLeft size={20} />
          </button>
          <button
            className="bg-black text-white p-2 rounded-full"
            onClick={onNext}
          >
            <AiOutlineRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamLeftSideBar;
