// src/pages/Auth.js
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faIdCard } from "@fortawesome/free-regular-svg-icons";
import AuthImage from "../assets/images/AuthImage.jpg";
import Faceid from "../assets/images/Face.gif";
import { Navigate, Link } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext'; // Import the useAuth hook

export function Auth() {

  const { register, handleSubmit } = useForm();
  const [isChecked, setIsChecked] = useState(false);
  const [isSwapped, setIsSwapped] = useState(false);
  const { isAuthenticated, login } = useAuth(); // Get auth state and login function

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    login(Object.values(data)[0]);
  });

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleFaceIdClick = () => {
    setIsSwapped(!isSwapped); // Optional: keeps the Face ID swapped state behavior
  };


  // Handle redirection after authentication
  if (isAuthenticated) {

   return <Navigate to="/Home" />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white font-montserrat">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-6 md:px-20 text-center">
        <div className="flex flex-col lg:flex-row w-full lg:w-2/3 max-w-5xl bg-white rounded-[10px] border border-gray-300">
          {isSwapped ? (
            <>
              {/* Image on the left when swapped */}
              <div
                className="w-full lg:w-1/2 bg-cover bg-center text-white rounded-t-[10px] lg:rounded-l-[10px] lg:rounded-tr-none p-12 flex items-center justify-center"
                style={{ backgroundImage: `url(${AuthImage})` }}
              />
              <div className="w-full lg:w-1/2 p-6">
                <form onSubmit={onSubmit} className="mb-[10px]">
                  <div className="py-6 md:py-10 mr-0 md:mr-[180px]">
                    <h2 className="text-4xl md:text-5xl font-extrabold">
                      <span className="text-black">E-</span>
                      <span className="text-indigo-600">EXAM</span>
                    </h2>
                    <p className="text-black text-[14px] ml-[20px] text-left font-semibold">
                      Bienvenue!
                    </p>
                  </div>

                  {/* Identifiant */}
                  <div className="mb-4">
                    <label className="block text-left mb-2 font-medium">
                      Reconnaissance Faciale
                    </label>
                    <div className="relative flex justify-center items-center">
                      <div className="relative p-4 rounded-[10px]" style={{ boxShadow: "0 0 0 0.6px gray" }}>
                        <div className="bg-white p-2 py-[20px] px-[45px] ">
                          <img src={Faceid} alt="Custom" className="w-[100px] md:w-[150px] h-[150px] md:h-[200px]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Checkbox + Besoin d'aide */}
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <div className="flex items-center">
                      <input
                        {...register("check")}
                        type="checkbox"
                        id="myCheckbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      <label htmlFor="myCheckbox" className="text-gray-600">
                        Conserver ma session
                      </label>
                    </div>
                    <Link to="/signup" className="text-indigo-600">
                      Créer un Compte 
                    </Link>
                  </div>

                  {/* Buttons */}
                  <div>
                    <button onClick={onSubmit}  className="w-full py-3 mb-4 bg-indigo-600 hover:bg-indigo-800 text-white text-sm font-bold uppercase tracking-widest rounded-lg">
                      S'identifier
                    </button>
                    <button
                      type="button"
                      className="w-full py-3 flex justify-center items-center bg-white hover:bg-gray-100 border border-gray-300 text-black text-sm font-bold uppercase rounded-lg"
                      onClick={handleFaceIdClick}
                    >
                      <FontAwesomeIcon icon={faIdCard} className="mr-2 text-indigo-600" />
                      Identifiant
                    </button>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <>
              <div className="w-full lg:w-1/2 p-6">
                <form onSubmit={onSubmit} className="mt-[30px]">
                  <div className="py-6 md:py-10 mr-0 md:mr-[180px] mb-[20px]">
                    <h2 className="text-4xl md:text-5xl font-extrabold">
                      <span className="text-black">E-</span>
                      <span className="text-indigo-600">EXAM</span>
                    </h2>
                    <p className="text-black text-[14px] ml-[20px] text-left font-semibold">
                      Bienvenue!
                    </p>
                  </div>

                  {/* Identifiant */}
                  <div className="mb-[30px] md:mb-[70px]">
                    <div className="mb-4">
                      <label className="block text-left mb-2 font-medium">Identifiant :</label>
                      <div className="relative">
                        <input
                          {...register("identifiant")}
                          type="text"
                          placeholder="Votre Identifiant"
                          className="bg-gray-100 outline-none w-full py-3 px-4 rounded-lg text-base shadow-sm border border-gray-300"
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                      <label className="block text-left mb-2 font-medium">Mot de passe :</label>
                      <div className="relative">
                        <input
                          {...register("password")}
                          type="password"
                          placeholder="Votre Mot de passe"
                          className="bg-gray-100 outline-none w-full py-3 px-4 rounded-lg text-base shadow-sm border border-gray-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Checkbox + Besoin d'aide */}
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <div className="flex items-center">
                      <input
                        {...register("check")}
                        type="checkbox"
                        id="myCheckbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      <label htmlFor="myCheckbox" className="text-gray-600">
                        Conserver ma session
                      </label>
                    </div>
                    <Link to="/signup" className="text-indigo-600 ">
                      Créer un Compte 
                    </Link>
                  </div>

                  {/* Buttons */}
                  <div>
                    <button onClick={onSubmit} className="w-full py-3 mb-4 bg-indigo-600 hover:bg-indigo-800 text-white text-sm font-bold uppercase tracking-widest rounded-lg">
                      S'identifier
                    </button>
                    <button
                      type="button"
                      className="w-full py-3 flex justify-center items-center bg-white hover:bg-gray-100 border border-gray-300 text-black text-sm font-bold uppercase rounded-lg"
                      onClick={handleFaceIdClick}
                    >
                      <FontAwesomeIcon icon={faSmile} className="mr-2 text-indigo-600" />
                      Face ID
                    </button>
                  </div>
                </form>
              </div>

              {/* Image on the right in default state */}
              <div
                className="w-full lg:w-1/2 bg-cover bg-center text-white rounded-b-[10px] lg:rounded-r-[10px] lg:rounded-bl-none p-12 flex items-center justify-center"
                style={{ backgroundImage: `url(${AuthImage})` }}
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
}
