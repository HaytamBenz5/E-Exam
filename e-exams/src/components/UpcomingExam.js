import React, { useState, useEffect } from 'react';
import CardExam from './CardExam';

const UpcomingExam = ({ title, link, exams }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleExams, setVisibleExams] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleExams(1); 
      } else if (window.innerWidth < 1024) {
        setVisibleExams(3); 
      } else {
        setVisibleExams(4);
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    if (currentIndex < exams.length - visibleExams) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full relative">
      {/* Title and link */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <a href={link} className="text-sm text-orange-500">voir plus &gt;</a>
      </div>

      {/* Cards Container */}
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleExams)}%)`,
            width: `${(exams.length / visibleExams) * 100}%`
          }}
        >
          {exams.map((exam, index) => (
            <div
              className="p-2"
              key={index}
              style={{ flex: `0 0 ${100 / visibleExams}%` }} 
            >
              <CardExam
                name={exam.name}
                room={exam.room}
                date={exam.date}
                image={exam.image}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="bg-gray-300 p-2 rounded-full mx-2 disabled:opacity-50"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= exams.length - visibleExams}
          className="bg-gray-300 p-2 rounded-full mx-2 disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default UpcomingExam;
