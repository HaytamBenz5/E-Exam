import React, { useState } from "react";
import Select from 'react-select';
import RightSidebar from "../components/RightSideBar";
import LeftSidebar from "../components/LeftSidebar.js";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCalendarAlt, faHistory, faChartLine, faCog, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const OverviewIcon = () => <FontAwesomeIcon icon={faHome} />;
const IntegrationIcon = () => <FontAwesomeIcon icon={faCalendarAlt} />;
const PlansIcon = () => <FontAwesomeIcon icon={faHistory} />;
const TransactionsIcon = () => <FontAwesomeIcon icon={faChartLine} />;
const SettingsIcon = () => <FontAwesomeIcon icon={faCog} />;
const ContactIcon = () => <FontAwesomeIcon icon={faEnvelope} />;

const name = "";

const countryOptions = [
    { value: "+93", label: "AF (+93)" },
    { value: "+355", label: "AL (+355)" },
    { value: "+213", label: "DZ (+213)" },
    { value: "+376", label: "AD (+376)" },
    { value: "+244", label: "AO (+244)" },
    { value: "+1-268", label: "AG (+1-268)" },
    { value: "+54", label: "AR (+54)" },
    { value: "+374", label: "AM (+374)" },
    { value: "+297", label: "AW (+297)" },
    { value: "+61", label: "AU (+61)" },
    { value: "+43", label: "AT (+43)" },
    { value: "+994", label: "AZ (+994)" },
    { value: "+1-242", label: "BS (+1-242)" },
    { value: "+973", label: "BH (+973)" },
    { value: "+880", label: "BD (+880)" },
    { value: "+1-246", label: "BB (+1-246)" },
    { value: "+375", label: "BY (+375)" },
    { value: "+32", label: "BE (+32)" },
    { value: "+229", label: "BJ (+229)" },
    { value: "+975", label: "BT (+975)" },
    { value: "+591", label: "BO (+591)" },
    { value: "+387", label: "BA (+387)" },
    { value: "+267", label: "BW (+267)" },
    { value: "+55", label: "BR (+55)" },
    { value: "+673", label: "BN (+673)" },
    { value: "+359", label: "BG (+359)" },
    { value: "+226", label: "BF (+226)" },
    { value: "+257", label: "BI (+257)" },
    { value: "+855", label: "KH (+855)" },
    { value: "+237", label: "CM (+237)" },
    { value: "+1", label: "CA (+1)" },
    { value: "+238", label: "CV (+238)" },
    { value: "+236", label: "CF (+236)" },
    { value: "+235", label: "TD (+235)" },
    { value: "+56", label: "CL (+56)" },
    { value: "+86", label: "CN (+86)" },
    { value: "+57", label: "CO (+57)" },
    { value: "+269", label: "KM (+269)" },
    { value: "+243", label: "CD (+243)" },
    { value: "+242", label: "CG (+242)" },
    { value: "+682", label: "CK (+682)" },
    { value: "+506", label: "CR (+506)" },
    { value: "+385", label: "HR (+385)" },
    { value: "+53", label: "CU (+53)" },
    { value: "+357", label: "CY (+357)" },
    { value: "+420", label: "CZ (+420)" },
    { value: "+45", label: "DK (+45)" },
    { value: "+253", label: "DJ (+253)" },
    { value: "+1-767", label: "DM (+1-767)" },
    { value: "+1-809", label: "DO (+1-809)" },
    { value: "+593", label: "EC (+593)" },
    { value: "+20", label: "EG (+20)" },
    { value: "+503", label: "SV (+503)" },
    { value: "+240", label: "GQ (+240)" },
    { value: "+291", label: "ER (+291)" },
    { value: "+372", label: "EE (+372)" },
    { value: "+251", label: "ET (+251)" },
    { value: "+679", label: "FJ (+679)" },
    { value: "+358", label: "FI (+358)" },
    { value: "+33", label: "FR (+33)" },
    { value: "+241", label: "GA (+241)" },
    { value: "+220", label: "GM (+220)" },
    { value: "+995", label: "GE (+995)" },
    { value: "+49", label: "DE (+49)" },
    { value: "+233", label: "GH (+233)" },
    { value: "+30", label: "GR (+30)" },
    { value: "+1-473", label: "GD (+1-473)" },
    { value: "+502", label: "GT (+502)" },
    { value: "+224", label: "GN (+224)" },
    { value: "+245", label: "GW (+245)" },
    { value: "+592", label: "GY (+592)" },
    { value: "+509", label: "HT (+509)" },
    { value: "+504", label: "HN (+504)" },
    { value: "+852", label: "HK (+852)" },
    { value: "+36", label: "HU (+36)" },
    { value: "+354", label: "IS (+354)" },
    { value: "+91", label: "IN (+91)" },
    { value: "+62", label: "ID (+62)" },
    { value: "+98", label: "IR (+98)" },
    { value: "+964", label: "IQ (+964)" },
    { value: "+353", label: "IE (+353)" },
    { value: "+972", label: "IL (+972)" },
    { value: "+39", label: "IT (+39)" },
    { value: "+1-876", label: "JM (+1-876)" },
    { value: "+81", label: "JP (+81)" },
    { value: "+962", label: "JO (+962)" },
    { value: "+7", label: "KZ (+7)" },
    { value: "+254", label: "KE (+254)" },
    { value: "+686", label: "KI (+686)" },
    { value: "+383", label: "XK (+383)" },
    { value: "+965", label: "KW (+965)" },
    { value: "+996", label: "KG (+996)" },
    { value: "+856", label: "LA (+856)" },
    { value: "+371", label: "LV (+371)" },
    { value: "+961", label: "LB (+961)" },
    { value: "+266", label: "LS (+266)" },
    { value: "+231", label: "LR (+231)" },
    { value: "+218", label: "LY (+218)" },
    { value: "+423", label: "LI (+423)" },
    { value: "+370", label: "LT (+370)" },
    { value: "+352", label: "LU (+352)" },
    { value: "+853", label: "MO (+853)" },
    { value: "+389", label: "MK (+389)" },
    { value: "+261", label: "MG (+261)" },
    { value: "+265", label: "MW (+265)" },
    { value: "+60", label: "MY (+60)" },
    { value: "+960", label: "MV (+960)" },
    { value: "+223", label: "ML (+223)" },
    { value: "+356", label: "MT (+356)" },
    { value: "+692", label: "MH (+692)" },
    { value: "+222", label: "MR (+222)" },
    { value: "+230", label: "MU (+230)" },
    { value: "+52", label: "MX (+52)" },
    { value: "+691", label: "FM (+691)" },
    { value: "+373", label: "MD (+373)" },
    { value: "+377", label: "MC (+377)" },
    { value: "+976", label: "MN (+976)" },
    { value: "+382", label: "ME (+382)" },
    { value: "+212", label: "MA (+212)" },
    { value: "+258", label: "MZ (+258)" },
    { value: "+95", label: "MM (+95)" },
    { value: "+264", label: "NA (+264)" },
    { value: "+977", label: "NP (+977)" },
    { value: "+31", label: "NL (+31)" },
    { value: "+64", label: "NZ (+64)" },
    { value: "+505", label: "NI (+505)" },
    { value: "+227", label: "NE (+227)" },
    { value: "+234", label: "NG (+234)" },
    { value: "+683", label: "NU (+683)" },
    { value: "+672", label: "NF (+672)" },
    { value: "+47", label: "NO (+47)" },
    { value: "+968", label: "OM (+968)" },
    { value: "+92", label: "PK (+92)" },
    { value: "+680", label: "PW (+680)" },
    { value: "+507", label: "PA (+507)" },
    { value: "+675", label: "PG (+675)" },
    { value: "+595", label: "PY (+595)" },
    { value: "+1-787", label: "PR (+1-787)" },
    { value: "+351", label: "PT (+351)" },
    { value: "+974", label: "QA (+974)" },
    { value: "+40", label: "RO (+40)" },
    { value: "+7", label: "RU (+7)" },
    { value: "+250", label: "RW (+250)" },
    { value: "+590", label: "BL (+590)" },
    { value: "+1-758", label: "LC (+1-758)" },
    { value: "+1-784", label: "VC (+1-784)" },
    { value: "+685", label: "WS (+685)" },
    { value: "+378", label: "SM (+378)" },
    { value: "+966", label: "SA (+966)" },
    { value: "+221", label: "SN (+221)" },
    { value: "+381", label: "RS (+381)" },
    { value: "+248", label: "SC (+248)" },
    { value: "+232", label: "SL (+232)" },
    { value: "+65", label: "SG (+65)" },
    { value: "+1-721", label: "SX (+1-721)" },
    { value: "+421", label: "SK (+421)" },
    { value: "+386", label: "SI (+386)" },
    { value: "+677", label: "SB (+677)" },
    { value: "+65", label: "SG (+65)" },
    { value: "+963", label: "SY (+963)" },
    { value: "+886", label: "TW (+886)" },
    { value: "+992", label: "TJ (+992)" },
    { value: "+255", label: "TZ (+255)" },
    { value: "+66", label: "TH (+66)" },
    { value: "+670", label: "TL (+670)" },
    { value: "+228", label: "TG (+228)" },
    { value: "+690", label: "TK (+690)" },
    { value: "+676", label: "TO (+676)" },
    { value: "+1-868", label: "TT (+1-868)" },
    { value: "+216", label: "TN (+216)" },
    { value: "+90", label: "TR (+90)" },
    { value: "+993", label: "TM (+993)" },
    { value: "+1-649", label: "TC (+1-649)" },
    { value: "+688", label: "TV (+688)" },
    { value: "+256", label: "UG (+256)" },
    { value: "+380", label: "UA (+380)" },
    { value: "+971", label: "AE (+971)" },
    { value: "+44", label: "GB (+44)" },
    { value: "+1-340", label: "VI (+1-340)" },
    { value: "+680", label: "VU (+680)" },
    { value: "+383", label: "XK (+383)" },
    { value: "+681", label: "WF (+681)" },
    { value: "+967", label: "YE (+967)" },
    { value: "+260", label: "ZM (+260)" },
    { value: "+263", label: "ZW (+263)" }
];

export function Contact() {
  const activeChild = 'Contact';

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    privacyAccepted: false,
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = "Le prénom est requis.";
    if (!formData.lastName) errors.lastName = "Le nom est requis.";
    if (!formData.email) errors.email = "L'email est requis.";
    if (!formData.message) errors.message = "Le message est requis.";
    if (!formData.privacyAccepted) errors.privacyAccepted = "Vous devez accepter la politique de confidentialité.";
    setFormErrors(errors);
    setTimeout(() => setFormSuccess(false), 1800);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
        privacyAccepted: false,
      });
      setFormErrors({});
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCountryChange = (selectedOption) => {
    setFormData({
      ...formData,
      countryCode: selectedOption.value,
    });
  };
  
  return (
    <div className="flex h-screen">
      <div className="w-1/6 flex-shrink-0">
        <LeftSidebar activeChild={activeChild}>
          <div href="/Home" name="Accueil" icon={<OverviewIcon />} />
          <div href="/venir" name="À venir" icon={<IntegrationIcon />} />
          <div href="/historique" name="Historique" icon={<PlansIcon />} />
          <div href="/stats" name="Statistiques" icon={<TransactionsIcon />} />
          <div href="/reglages)" name="Réglages" icon={<SettingsIcon />} />
          <div href="/Contact" name="Contact" icon={<ContactIcon />} />
        </LeftSidebar>
      </div>

      <div className="flex flex-col p-[10px] w-[1200px] ml-[70px]">
        <Header name={name} />
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nous Contacter</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">Vous avez une question ?</p>
          </div>
          {formSuccess && <div className="text-green-600 mb-4">Merci de nous avoir contactés !</div>}
          <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {/* Prénom */}
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Prénom <span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {formErrors.firstName && <p className="text-red-500 text-sm">{formErrors.firstName}</p>}
                </div>
              </div>

              {/* Nom */}
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Nom <span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="lastName"
                    id="last-name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {formErrors.lastName && <p className="text-red-500 text-sm">{formErrors.lastName}</p>}
                </div>
              </div>

              {/* E-mail */}
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Votre e-mail <span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="flex gap-4">
                    {/* Section pour le code du pays */}
                    <div className="flex-1">
                    <label htmlFor="country" className="block text-sm font-semibold leading-6 text-gray-900">
                        Code
                    </label>
                    <Select
                        id="country"
                        name="country"
                        options={countryOptions}
                        menuPlacement="bottom"
                        className="w-full rounded-md bg-white py-2 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm "
                        styles={{
                        control: (provided) => ({
                            ...provided,
                            minHeight: '40px',
                            padding: '0',
                        }),
                        }}
                    />
                    </div>

                    {/* Section pour le numéro de téléphone */}
                    <div className="flex-2">
                    <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                        Numéro de téléphone
                    </label>
                    <input
                        type="tel"
                        name="phone-number"
                        id="phone-number"
                        placeholder="Votre numéro"
                        className="w-full mt-2 block rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    />
                    </div>
                </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                  {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
                </div>
              </div>
              </div>

              {/* Politique de confidentialité */}
              <div className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <input
                    type="checkbox"
                    name="privacyAccepted"
                    id="privacyAccepted"
                    checked={formData.privacyAccepted}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                </div>
                <label className="text-sm leading-6 text-gray-600" htmlFor="privacyAccepted">
                  En soumettant ce formulaire, j'accepte notre{" "}
                  <a href="#" className="font-semibold text-indigo-600">
                    politique de confidentialité
                  </a>
                  .
                </label>
                {formErrors.privacyAccepted && <p className="text-red-500 text-sm">{formErrors.privacyAccepted}</p>}
              </div>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="w-10px rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex-shrink-0">
        <RightSidebar />
      </div>
    </div>
  );
}

export default Contact;
