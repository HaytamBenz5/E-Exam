import React from 'react';

function Header({ name }) {
  return (
    <div className="bg-white p-4 flex justify-between items-center">
      {/* Greeting */}
      <div>
      <h1 className="text-lg font-semibold">
                Bonjour <span className="text-indigo-600">{name}</span>
      </h1>

      </div>
      {/* Search bar */}
      <div>
        <input
          type="text"
          className="form-control p-2 border border-gray-300 rounded-lg"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default Header;
