import React from "react";
import { useAuth } from '../contexts/AuthContext'; 
import UpcomingExam from "../components/UpcomingExam.js";
import RightSidebar from "../components/RightSideBar";
import LeftSidebar from "../components/LeftSidebar.js";
import Header from "../components/Header";
import CardToDayExam from "../components/CardToDayExam";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCalendarAlt, faHistory, faChartLine, faCog, faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Data from helpers
import { todayExam, upcomingExams, pastExams } from '../helpers/exams';

export function Home() {
  const activeChild = "Accueil"; 
  const { userName } = useAuth();

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Sidebar */}
      <div className="w-1/5 sm:w-1/5 md:w-1/6 lg:w-1/6 flex-shrink-0">
        <LeftSidebar activeChild={activeChild}>
          <div href="/Home" name="Accueil" icon={<FontAwesomeIcon icon={faHome} />} />
          <div href="/Venir" name="À venir" icon={<FontAwesomeIcon icon={faCalendarAlt} />} />
          <div href="/Historique" name="Historique" icon={<FontAwesomeIcon icon={faHistory} />} />
          <div href="/Stats" name="Statistiques" icon={<FontAwesomeIcon icon={faChartLine} />} />
          <div href="/Reglages" name="Réglages" icon={<FontAwesomeIcon icon={faCog} />} />
          <div href="/Contact" name="Contact" icon={<FontAwesomeIcon icon={faEnvelope} />} />
        </LeftSidebar>
      </div>

      {/* Main content area */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* Header */}
        <Header name={userName} />
        
        {/* Main page content */}
        <div className="flex flex-col flex-1 p-4 space-y-4">
          <div className="flex-1">
            <CardToDayExam exam={todayExam} />
          </div>
          <div className="flex-1">
            <UpcomingExam title="Examens à venir" link="/venir" exams={upcomingExams} />
          </div>
          <div className="flex-1">
            <UpcomingExam title="Examens passés" link="/historique" exams={pastExams} />
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="hidden xl:flex xl:w-1/6 xl:flex-shrink-0">
        <RightSidebar/>          
      </div>
    </div>
  );
}

export default Home;
