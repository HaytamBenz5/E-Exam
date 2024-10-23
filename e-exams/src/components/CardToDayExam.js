import React from 'react';
import { Link } from 'react-router-dom';

const CardToDayExam = ({ exam }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image Section */}
      <div className="h-40 bg-gray-300">
        <img src={exam.image} alt={`${exam.name} logo`} className="object-cover h-full w-full" />
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Exam Name */}
        <h3 className="text-yellow-600 text-lg font-bold">{exam.name}</h3>
        
        {/* Exam Room */}
        <p className="text-gray-600">{`Salle ${exam.room}`}</p>

        {/* Access Button */}
        <div className="mt-4 flex-1 flex justify-center">
          <Link to={`/exam/${exam.id}`}>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Accès Examen
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardToDayExam;
