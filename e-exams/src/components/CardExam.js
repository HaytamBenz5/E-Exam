import React from 'react';

function CardExam({ name, room, date, image }) {
  return (
    <div className="flex-grow max-w-[300px] h-[280px] sm:max-w-[250px] sm:h-[250px] lg:max-w-[350px] lg:h-[300px] rounded-lg overflow-hidden shadow-lg bg-white m-4 transition-transform duration-200 hover:scale-105">
      {/* Image section */}
      <div className="h-30 bg-cover bg-center">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      {/* Text content */}
      <div className="px-4 py-3 sm:px-2 sm:py-2">
        <h3 className="font-bold text-lg sm:text-base lg:text-xl text-orange-500">{name}</h3>
        <p className="text-gray-700 text-sm sm:text-xs lg:text-base">Salle {room}</p>
        <p className="text-gray-500 text-sm sm:text-xs lg:text-base">{date}</p>
      </div>
    </div>
  );
}

export default CardExam;
