import React from "react";

import { useAuth } from '../contexts/AuthContext'; 
import UpcomingExam from "../components/UpcomingExam.js";
import RightSidebar from "../components/RightSideBar";
import LeftSidebar from "../components/LeftSidebar.js";
import Header from "../components/Header";
import CardToDayExam from "../components/CardToDayExam";

//fonts
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCalendarAlt, faHistory, faChartLine, faCog, faEnvelope } from "@fortawesome/free-solid-svg-icons";

// data from help.js
import {todayExam, upcomingExams, pastExams } from '../helpers/exams';


export function Home() {
  const activeChild = "Accueil"; 
  const {userName} = useAuth();

  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="w-1/6 flex-shrink-0">
        <LeftSidebar activeChild={activeChild}>
          <div href="/home" name="Accueil" icon={<FontAwesomeIcon icon={faHome} />} />
          <div href="/venir" name="À venir" icon={<FontAwesomeIcon icon={faCalendarAlt} />} />
          <div href="/historique" name="Historique" icon={<FontAwesomeIcon icon={faHistory} />} />
          <div href="/stats" name="Statistiques" icon={<FontAwesomeIcon icon={faChartLine} />} />
          <div href="/reglages" name="Réglages" icon={<FontAwesomeIcon icon={faCog} />} />
          <div href="/contact" name="Contact" icon={<FontAwesomeIcon icon={faEnvelope} />} />
        </LeftSidebar>
      </div>

      {/* Main content area */}
      <div className="flex flex-col ">
        {/* Header */}
        <Header name={userName} />
        {/* Main page content */}
        <div className="flex-1 p-2 sm:h-[600px] md:h-[768px] lg:h-[800px] xl:h-[900px] xl:w-[1200px] ml-20">
          <CardToDayExam exam={todayExam} />
        </div>
        <div className="flex-1 p-2 sm:h-[600px] md:h-[768px] lg:h-[800px] xl:h-[900px] xl:w-[1200px] ml-20 mt-[10px] ">
          <UpcomingExam title="Examens à venir" link="/venir" exams={upcomingExams} />
        </div>
        <div className="flex-1 p-2 sm:h-[600px] md:h-[768px] lg:h-[800px] xl:h-[900px] xl:w-[1200px] ml-20 mt-[10px] ">
          <UpcomingExam title="Examens passés" link="/historique" exams={pastExams} />
        </div>
      </div>

      <div className="flex-shrink-0">
        <RightSidebar/>          
      </div>
    </div>
  );
}

export default Home;