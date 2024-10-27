import React, { useState, useEffect } from 'react';
import CardExam from './CardExam';

const UpcomingExam = ({ title, link, exams }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleExams, setVisibleExams] = useState(3); // Default to 3 exams for larger screens

  useEffect(() => {
    // Function to handle screen resizing and set the number of visible exams
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleExams(1); // Show 1 exam on small screens
      } else if (window.innerWidth < 1024) {
        setVisibleExams(3); // Show 2 exams on medium screens
      } else {
        setVisibleExams(4); // Show 3 exams on larger screens
      }
    };

    handleResize(); // Run on component mount
    window.addEventListener('resize', handleResize); // Listen for resize events
    return () => window.removeEventListener('resize', handleResize); // Cleanup listener on unmount
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
        <a href={link} className="text-sm text-orange-500 hover:underline">voir plus &gt;</a>
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
              style={{ flex: `0 0 ${100 / visibleExams}%` }} // Make each card responsive
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
          className="bg-gray-300 p-2 rounded-full mx-2 disabled:opacity-50 hover:bg-gray-400 transition duration-150"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= exams.length - visibleExams}
          className="bg-gray-300 p-2 rounded-full mx-2 disabled:opacity-50 hover:bg-gray-400 transition duration-150"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default UpcomingExam;
