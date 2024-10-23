import React from "react";
import Logo from "../assets/icons/logo.png";
import { useAuth } from '../contexts/AuthContext';
import Profile from "../assets/images/profile.jpg";

function LeftSidebar({ children, activeChild, name }) {
  const { userName} = useAuth();

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      const isActive = child.props.name === activeChild;

      return (
        <li key={child.props.name}>
          <a
            href={child.props.href}
            className={`flex items-center gap-x-2 text-grey-500 p-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 duration-150 ${
              isActive ? "bg-[#a3d7e6] text-white " : ""
            }`}
          >
            <div className="text-gray-500">{child.props.icon}</div>
            {child.props.name}
          </a>
        </li>
      );
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-full border-r bg-white space-y-8 sm:w-80">
      <div className="flex flex-col h-full">
        <div className="h-20 flex items-center px-8">
          <a href="/home" className="flex-none">
            <img
              src={Logo}
              width={160}
              className="mx-auto"
              alt="Logo"
            />
          </a>
        </div>
        <div className="flex-1 flex flex-col h-full overflow-auto">
          <ul className="px-4 text-sm font-medium flex-1">
            {renderChildren()}
          </ul>
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
                <a
                  href="/profile"
                  className="block mt-px text-gray-600 hover:text-indigo-600 text-xs"
                >
                  View profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default LeftSidebar;
