import React, { useState } from 'react';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import LeftSidebar from '../components/LeftSidebar';

// Fonts and Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCalendarAlt, faHistory, faChartLine, faCog, faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";
// PDF Export
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Register Chart.js components
Chart.register(...registerables);

export const Statistics = () => {
  const activeChild = 'Statistiques';

  const subjectData = {
    Mathématiques: {
      barData: [7, 18, 19, 9, 20],
      pieData: [90, 10],
      doughnutData: [30, 35, 25, 10],
    },
    Sciences: {
      barData: [10, 11, 18, 13, 9],
      pieData: [60, 40],
      doughnutData: [20, 30, 40, 10],
    },
    Anglais: {
      barData: [9, 8, 12, 9, 15],
      pieData: [30, 70],
      doughnutData: [5, 30, 10, 65],
    },
  };

  const [selectedSubject, setSelectedSubject] = useState('Mathématiques');

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    const examTitle = `Rapport de l'examen - ${selectedSubject}`;
    doc.setFontSize(16);
    doc.text(examTitle, 20, 20);
    doc.autoTable({
      startY: 30,
      head: [['Examen', 'Score']],
      body: [
        ['CC1', subjectData[selectedSubject].barData[0]],
        ['CC2', subjectData[selectedSubject].barData[1]],
        ['CC3', subjectData[selectedSubject].barData[2]],
        ['CC4', subjectData[selectedSubject].barData[3]],
        ['DS', subjectData[selectedSubject].barData[4]],
      ],
    });

    // Save PDF 
    doc.save(`${selectedSubject}_rapport.pdf`);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
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

      {/* Main Content */}
      <main className="flex-grow p-4">
        <div className="mb-4 flex flex-col items-start">
          <label htmlFor="subject" className="mb-2 font-semibold">Sélectionner la matière :</label>
          <select
            id="subject"
            value={selectedSubject}
            onChange={handleSubjectChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
          >
            <option value="Mathématiques">Mathématiques</option>
            <option value="Sciences">Sciences</option>
            <option value="Anglais">Anglais</option>
          </select>
        </div>

        {/* Download PDF Button */}
        <div className="mb-4">
          <button
            onClick={handleDownloadPdf}
            className="bg-[#6366f1] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            <FontAwesomeIcon icon={faDownload} /> Télécharger le PDF
          </button>
        </div>

        {/* Class Rank */}
        <div className="mb-4 text-lg font-semibold">
          Rang dans la classe : <span className="text-[#6366f1]">5ème</span>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Bar Chart */}
          <div className="bg-white shadow-lg p-4 rounded-lg transition-transform transform hover:scale-105">
            <h3 className="font-semibold mb-2 text-lg">Scores par mois - {selectedSubject}</h3>
            <Bar
              data={{
                labels: ['CC1', 'CC2', 'CC3', 'CC4', 'DS'],
                datasets: [
                  {
                    label: 'Scores',
                    data: subjectData[selectedSubject].barData,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                  },
                ],
              }}
              options={{ responsive: true }}
            />
          </div>

          {/* Pie Chart */}
          <div className="bg-white shadow-lg p-4 rounded-lg transition-transform transform hover:scale-105">
            <h3 className="font-semibold mb-2 text-lg">Répartition Réussi/Échoué - {selectedSubject}</h3>
            <Pie
              data={{
                labels: ['Réussi', 'Échoué'],
                datasets: [
                  {
                    data: subjectData[selectedSubject].pieData,
                    backgroundColor: ['#36A2EB', '#FF0000'],
                  },
                ],
              }}
              options={{ responsive: true }}
            />
          </div>

          {/* Doughnut Chart */}
          <div className="bg-white shadow-lg p-4 rounded-lg transition-transform transform hover:scale-105">
            <h3 className="font-semibold mb-2 text-lg">Répartition des performances - {selectedSubject}</h3>
            <Doughnut
              data={{
                labels: ['Excellent', 'Bon', 'Moyen', 'Faible'],
                datasets: [
                  {
                    data: subjectData[selectedSubject].doughnutData,
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                  },
                ],
              }}
              options={{ responsive: true }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};
