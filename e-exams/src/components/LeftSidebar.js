import React, { useState } from "react";
import Logo from "../assets/icons/logo.png";
import { useAuth } from '../contexts/AuthContext';
import Profile from "../assets/images/profile.jpg";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Menu icons

function LeftSidebar({ children, activeChild }) {
  const { userName } = useAuth();
  const [isOpen, setIsOpen] = useState(false); // Sidebar visibility state

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      const isActive = child.props.name === activeChild;
      
      return (
        <li key={child.props.name}>
          <Link
            to={child.props.href}
            className={`flex items-center gap-x-2 text-grey-500 p-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 duration-150 ${
              isActive ? "bg-[#a3d7e6] text-white" : ""
            }`}
          >
            <div className="text-gray-500">{child.props.icon}</div>
            {child.props.name}
          </Link>
        </li>
      );
    });
  };

  return (
    <>
      {/* Menu button for small screens */}
      <button 
        className="p-2 rounded-md bg-gray-200 m-2 md:hidden" // Only show on small screens
        onClick={() => setIsOpen(true)} // Open sidebar
      >
        <AiOutlineMenu size={24} />
      </button>
      
      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full bg-white border-r transition-transform transform md:translate-x-0 z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '240px' }}
      >
        <div className="flex flex-col h-full justify-between">
          {/* Logo and Close button */}
          <div className="h-20 flex items-center justify-between px-4">
            <Link to="/home" className="flex-none">
              <img src={Logo} width={160} className="mx-auto" alt="Logo" />
            </Link>
            <button 
              className="md:hidden p-2" 
              onClick={() => setIsOpen(false)} // Close sidebar
            >
              <AiOutlineClose size={24} />
            </button>
          </div>

          {/* Sidebar content */}
          <div className="flex-1 flex flex-col overflow-auto">
            <ul className="px-4 text-sm font-medium">
              {renderChildren()}
            </ul>
          </div>
          
          {/* Profile Section at the bottom */}
          <div className="py-4 px-4 border-t">
            <div className="flex items-center gap-x-4">
              <img
                src={Profile}
                className="w-12 h-12 rounded-full"
                alt="Profile"
              />
              <div>
                <span className="block text-gray-700 text-sm font-semibold">
                  {userName}
                </span>
                <Link
                  to="/Profile"
                  className="block mt-px text-gray-600 hover:text-indigo-600 text-xs"
                >
                  View profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default LeftSidebar;
