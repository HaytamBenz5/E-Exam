import React, { useState } from "react";
import RightSidebar from "../components/RightSideBar";
import LeftSidebar from "../components/LeftSidebar.js";
import Header from "../components/Header";
import { useAuth } from '../contexts/AuthContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCalendarAlt, faHistory, faChartLine, faCog, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const OverviewIcon = () => <FontAwesomeIcon icon={faHome} />;
const IntegrationIcon = () => <FontAwesomeIcon icon={faCalendarAlt} />;
const PlansIcon = () => <FontAwesomeIcon icon={faHistory} />;
const TransactionsIcon = () => <FontAwesomeIcon icon={faChartLine} />;
const SettingsIcon = () => <FontAwesomeIcon icon={faCog} />;
const ContactIcon = () => <FontAwesomeIcon icon={faEnvelope} />;

export function Profile() {
  const [activeChild, setActiveChild] = useState(null);

  const { userName, logout } = useAuth();

  const [phone, setPhone] = useState("+33 74500235");
  const [address, setAddress] = useState("Kingston");
  const [postal, setPostal] = useState("5236");
  const [city, setCity] = useState("Kiffa");
  const [country, setCountry] = useState("Mauritanienne");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [tempPhone, setTempPhone] = useState(phone);
  const [tempAddress, setTempAddress] = useState(address);
  const [tempPostal, setTempPostal] = useState(postal);
  const [tempCity, setTempCity] = useState(city);
  const [tempCountry, setTempCountry] = useState(country);

  const [success, setSuccess] = useState(false);

  const Enregistrer = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Les nouveaux mots de passe ne correspondent pas");
      return;
    }

    if (tempPhone) setPhone(tempPhone);
    if (tempAddress) setAddress(tempAddress);
    if (tempPostal) setPostal(tempPostal);
    if (tempCity) setCity(tempCity);
    if (tempCountry) setCountry(tempCountry);

    setSuccess(true);

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="w-1/6 flex-shrink-0">
        <LeftSidebar activeChild={activeChild}>
          <div href="/" name="Accueil" icon={<OverviewIcon />} />
          <div href="/venir" name="À venir" icon={<IntegrationIcon />} />
          <div href="/historique" name="Historique" icon={<PlansIcon />} />
          <div href="/stats" name="Statistiques" icon={<TransactionsIcon />} />
          <div href="/reglages" name="Réglages" icon={<SettingsIcon />} />
          <div href="/contact" name="Contact" icon={<ContactIcon />} />
        </LeftSidebar>
      </div>

      {/* Main content area */}
      <div className="flex flex-col p-[10px] w-[1200px] ml-[70px]">
        <Header name={userName} />

        <div className="flex-1 p-2 w-[900px] ml-[100px]">

          {/* Display the success message when data is saved */}
          {success && (
            <div className="bg-green-500 text-white p-2 rounded-md mb-4">
              Vos informations sont bien enregistrées !
            </div>
          )}

          <div className="bg-white p-4 rounded-lg shadow-sm mt-[10px]">
            <h3 className="text-indigo-600 text-lg mb-2 font-bold">Vos informations</h3>
            <div className="flex flex-col justify-center gap-3">
              <div className="flex justify-center gap-20 align-items-start">
                <div className="flex flex-col flex-1">
                  <span className="mb-2 text-black text-lg font-semibold">Nom</span>
                  <span className="bg-gray-200 p-2 rounded-lg text-gray-600">{userName}</span>
                </div>
                <div className="flex flex-col flex-1">
                  <span className="mb-2 text-black text-lg font-semibold">Prénom</span>
                  <span className="bg-gray-200 p-2 rounded-lg text-gray-600">Mohamed</span>
                </div>
              </div>
              <div className="flex justify-center gap-20 align-items-start">
                <div className="flex flex-col flex-1">
                  <span className="mb-2 text-black text-lg font-semibold">Nationalité</span>
                  <span className="bg-gray-200 p-2 rounded-lg text-gray-600">{country}</span>
                </div>
                <div className="flex flex-col flex-1">
                  <span className="mb-2 text-black text-lg font-semibold">Numéro de Téléphone</span>
                  <span className="bg-gray-200 p-2 rounded-lg text-gray-600">{phone}</span>
                </div>
              </div>
              <div className="flex justify-center gap-20 align-items-start">
                <div className="flex flex-col flex-1">
                  <span className="mb-2 text-black text-lg font-semibold">E-mail</span>
                  <span className="bg-gray-200 p-2 rounded-lg text-gray-600">m3eljily@enib.fr</span>
                </div>
                <div className="flex flex-col flex-1">
                  <span className="mb-2 text-black text-lg font-semibold">Adresse</span>
                  <span className="bg-gray-200 p-2 rounded-lg text-gray-600">{address}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm mt-[20px]">
            <h3 className="text-indigo-600 text-lg mb-2 font-bold">Modifiez Votre Profil</h3>
            <form>
              <div className="flex flex-col gap-6">
                <div className="flex gap-6">
                  <div className="flex flex-col flex-1">
                    <label htmlFor="address" className="mb-2 text-black text-lg font-semibold">Adresse</label>
                    <input
                      type="text"
                      id="address"
                      placeholder="Kingston"
                      className="p-2 border border-gray-300 bg-gray-200 rounded-lg text-gray-600"
                      onChange={(e) => setTempAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex flex-col flex-1">
                    <label htmlFor="postal" className="mb-2 text-black text-lg font-semibold">Code Postal</label>
                    <input
                      type="text"
                      id="postal"
                      placeholder="5236"
                      className="p-2 border border-gray-300 bg-gray-200 rounded-lg text-gray-600"
                      onChange={(e) => setTempPostal(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <label htmlFor="city" className="mb-2 text-black text-lg font-semibold">Ville</label>
                    <input
                      type="text"
                      id="city"
                      placeholder="Kingston"
                      className="p-2 border border-gray-300 bg-gray-200 rounded-lg text-gray-600"
                      onChange={(e) => setTempCity(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex flex-col flex-1">
                    <label htmlFor="country" className="mb-2 text-black text-lg font-semibold">Pays</label>
                    <input
                      type="text"
                      id="country"
                      placeholder="France"
                      className="p-2 border border-gray-300 bg-gray-200 rounded-lg text-gray-600"
                      onChange={(e) => setTempCountry(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <label htmlFor="phone" className="mb-2 text-black text-lg font-semibold">Numéro de Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+33 *********"
                      className="p-2 border border-gray-300 bg-gray-200 rounded-lg text-gray-600"
                      onChange={(e) => setTempPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <h4 className="text-indigo-600 text-lg mb-2 mt-5 font-bold">Modification du Mot de passe</h4>
              <div className="mb-8">
                <div className="flex flex-col flex-1">
                  <input
                    type="password"
                    id="current-password"
                    placeholder="Mot de passe actuel"
                    className="p-2 border border-gray-300 bg-gray-200 rounded-lg text-gray-600"
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                </div>
                <br />
                <div className="flex flex-col flex-1">
                  <input
                    type="password"
                    id="new-password"
                    placeholder="Nouveau mot de passe"
                    className="p-2 border border-gray-300 bg-gray-200 rounded-lg text-gray-600"
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <br />
                <div className="flex flex-col flex-1">
                  <input
                    type="password"
                    id="confirm-password"
                    placeholder="Confirmer le nouveau mot de passe"
                    className="p-2 border border-gray-300 bg-gray-200 rounded-lg text-gray-600"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <br />
              </div>

              <div className="flex justify-end gap-4">
                <button type="reset" className="px-4 py-2 rounded-md text-sm cursor-pointer bg-gray-200 text-gray-600">Annuler</button>
                <button type="submit" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={Enregistrer}>Enregistrer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0">
        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
}

export default Profile;
