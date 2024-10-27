import React from 'react';

function Header({ name }) {
  return (
    <div className="bg-white p-4 flex flex-col md:flex-row justify-between items-center">
      {/* Greeting */}
      <div className="mb-2 md:mb-0">
        <h1 className="text-lg font-semibold">
          Bonjour <span className="text-indigo-600">{name}</span>
        </h1>
      </div>
      
      {/* Search bar */}
      <div className="w-full md:w-1/3">
        <input
          type="text"
          className="form-control p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default Header;
