import React from "react";
import {
  AiOutlineMessage,
  AiOutlineBell,
  AiOutlineSetting,
} from "react-icons/ai";
import { useAuth } from '../contexts/AuthContext'; // Import the useAuth hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const RightSideBar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    
    await logout(); // Call the logout function
    navigate('/'); 
    // Optionally, redirect or show a message after logout
  };
  return (
    <div className="fixed top-0 right-0 w-full h-full sm:w-64 bg-white border-l shadow-lg m-[6px] rounded-lg">
      {/* Container for the sidebar content, with flex-row for horizontal alignment */}
      <div className="flex flex-col h-full py-4 px-6 space-y-8">
        {/* Row of icons aligned at the top */}
        <div className="flex flex-row space-x-4 items-center justify-center">
          {/* Message Icon */}
          <button className="bg-gray-100 p-2 rounded-full">
            <AiOutlineMessage size={20} />
          </button>

          {/* Notification Icon */}
          <button className="bg-gray-100 p-2 rounded-full">
            <AiOutlineBell size={20} />
          </button>

          {/* Settings Icon */}
          <button className="bg-gray-100 p-2 rounded-full">
            <AiOutlineSetting size={20} />
          </button>
        
        </div>
        <button  onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Déconnexion
            </button>
      </div>
    </div>
  );
};

export default RightSideBar;
