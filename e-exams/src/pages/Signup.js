import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faIdCard } from "@fortawesome/free-regular-svg-icons";
import AuthImage from "../assets/images/AuthImage.jpg";
import { Link } from 'react-router-dom';


export function Signup() {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const [isChecked, setIsChecked] = useState(false);
  const [isSwapped, setIsSwapped] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleFaceIdClick = () => {
    setIsSwapped(!isSwapped);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white font-montserrat">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-6 md:px-20 text-center">
        <div className="flex flex-col lg:flex-row w-full lg:w-2/3 max-w-5xl  bg-white rounded-[10px] border border-gray-300">
          {/* LEFT SIDE BEGIN ============== */}

          {/* Form on the left in default state */}
          <div className="w-full lg:w-1/2 p-6">
            <form onSubmit={onSubmit}>
              <div className="py-6 md:py-10 mr-0 md:mr-[180px] mb-[20px]">
                <h2 className="text-4xl md:text-5xl font-extrabold">
                  <span className="text-black">E-</span>
                  <span className="text-indigo-600">EXAM</span>
                </h2>
                <p className="text-black text-[20px] ml-[20px] text-left font-semibold">
                  Créer un Compte
                </p>
              </div>

              {/* Identifiant */}
              <div className="mb-[30px] md:mb-[70px]">
                <div className="flex flex-wrap -mx-2">
                  <div className="w-full lg:w-1/2 px-2 mb-4">
                    <label className="block text-left mb-2 font-medium">
                      Nom :
                    </label>
                    <div className="relative">
                      <input
                        {...register("nom")}
                        type="text"
                        placeholder="Votre Nom"
                        
                        className="bg-gray-100 outline-none h-10 w-full py-3 px-4 rounded-lg text-base shadow-sm border border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 px-2 mb-4">
                    <label className="block text-left mb-2 font-medium">
                      Prénom :
                    </label>
                    <div className="relative">
                      <input
                        {...register("prenom")}
                        type="text"
                        placeholder="Votre Prénom"
                        
                        className="bg-gray-100 h-10  outline-none w-full py-3 px-4 rounded-lg text-base shadow-sm border border-gray-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-left mb-2 font-medium">
                    Date de naissance :
                  </label>
                  <div className="relative">
                    <input
                      {...register("birthdate")}
                      type="date"
                      
                      className="bg-gray-100 outline-none h-10  w-full py-3 px-4 rounded-lg text-base shadow-sm border border-gray-300"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-left mb-2 font-medium">
                    Email :
                  </label>
                  <div className="relative">
                    <input
                      {...register("email")}
                      placeholder="Votre Email"
                      type="text"
                      
                      className="bg-gray-100 h-10  outline-none w-full py-3 px-4 rounded-lg text-base shadow-sm border border-gray-300"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="mb-4">
                  <label className="block text-left mb-2 font-medium">
                    Mot de passe :
                  </label>
                  <div className="relative">
                    <input
                      {...register("password")}
                      type="password"
                      placeholder="Votre Mot de passe"
                      
                      className="bg-gray-100 h-10  outline-none w-full py-3 px-4 rounded-lg text-base shadow-sm border border-gray-300"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-left mb-2 font-medium">
                    Sexe :
                  </label>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <input
                        {...register("gender")}
                        type="radio"
                        value="male"
                        id="male"
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <label htmlFor="male" className="ml-2 text-gray-700">
                        Homme
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        {...register("gender")}
                        type="radio"
                        value="female"
                        id="female"
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <label htmlFor="female" className="ml-2 text-gray-700">
                        Femme
                      </label>
                    </div>
                  </div>
                  <br />
                  <label className="block text-left mb-2 font-medium">
                    Votre Photo:
                  </label>
                  <div className="flex items-center">
                    <input
                      {...register("photo")}
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      className="block w-full text-sm text-gray-500
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-lg file:border-0
                   file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-blue-700
                   hover:file:bg-blue-100"
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
                <a href="/" className="text-indigo-600 hover:text-indigo-800">
                  Avez-vous déja un compte ?
                </a>
              </div>

              {/* Buttons */}
              <div>
              <Link to="/">
                      <button className="w-full py-3 mb-4 bg-indigo-600 hover:bg-indigo-800 text-white text-sm font-bold uppercase tracking-widest rounded-lg">
                        S'inscrire
                      </button>
                   </Link>
              </div>
            </form>
          </div>

          {/* Image on the right in default state */}
          <div
            className="w-full lg:w-1/2 bg-cover bg-center text-white rounded-b-[10px] lg:rounded-r-[10px] lg:rounded-bl-none p-12 flex items-center justify-center"
            style={{ backgroundImage: `url(${AuthImage})` }}
          />
        </div>
      </main>
    </div>
  );
}
