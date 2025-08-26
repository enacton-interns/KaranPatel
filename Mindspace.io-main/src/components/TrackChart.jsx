import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const TrackChart = () => {
  const [moodCounts, setMoodCounts] = useState({
    excited: 0,
    grateful: 0,
    happy: 0,
    sad: 0,
    stressed: 0,
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('journalEntries')) || [];
    const counts = { excited: 0, grateful: 0, happy: 0, sad: 0, stressed: 0 };

    stored.forEach(entry => {
      const tag = entry.tag?.toLowerCase();
      if (counts[tag] !== undefined) counts[tag]++;
    });

    setMoodCounts(counts);
  }, []);

  const data = {
    labels: ['Excited', 'Grateful', 'Happy', 'Sad', 'Stressed'],
    datasets: [
      {
        label: 'Mood Frequency',
        data: Object.values(moodCounts),
        backgroundColor: [
          'rgba(255, 159, 64, 0.4)',
          'rgba(255, 206, 86, 0.4)',
          'rgba(75, 192, 192, 0.4)',
          'rgba(54, 162, 235, 0.4)',
          'rgba(153, 102, 255, 0.4)',
        ],
        borderColor: [
          'rgba(255, 159, 64, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 2,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Journal Mood Analytics',
        font: {
          size: 20,
          weight: 'bold',
        },
      },
    },
    scales: {
      y: { beginAtZero: true, ticks: { precision: 0 } },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center px-6">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-5xl h-[450px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default TrackChart;






// import React, { useEffect, useState } from 'react';
// import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend
// );

// const TrackChart = () => {

//     const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [],
//     });

//   useEffect(() => {
//     const stored = localStorage.getItem('journalEntries');
//     if (stored) {
//       const entries = JSON.parse(stored);

//       // Group and count entries by tag
//       const tagCount = {};
//       entries.forEach(entry => {
//         tagCount[entry.tag] = (tagCount[entry.tag] || 0) + 1;
//       });

//       const labels = Object.keys(tagCount);
//       const data = Object.values(tagCount);

//        const colors = [
//         'rgba(255, 159, 64, 0.2)',   // peach
//         'rgba(255, 205, 86, 0.2)',   // yellow
//         'rgba(75, 192, 192, 0.2)',   // cyan
//         'rgba(54, 162, 235, 0.2)',   // blue
//         'rgba(153, 102, 255, 0.2)',  // purple
//       ];

//       const borders = [
//         'rgba(255, 159, 64, 1)',
//         'rgba(255, 205, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(153, 102, 255, 1)',
//       ];

//        setChartData({
//         labels,
//         datasets: [
//           {
//             label: 'Journal Entries per Mood',
//             data,
//             backgroundColor: colors.slice(0, labels.length),
//             borderColor: borders.slice(0, labels.length),
//             borderWidth: 2,
//             borderRadius: 10,
//             barThickness: 40,
//           },
//         ],
//       });
//     }
//   }, []);

//   return (
//    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
//       <h2 className="text-2xl font-bold text-center mb-6 text-gray-700 dark:text-white">
//         Journal Mood Analytics
//       </h2>

//       {chartData.labels.length === 0 ? (
//         <p className="text-center text-gray-500">No journal data available.</p>
//       ) : (
//         <Bar
//           data={chartData}
//           options={{
//             responsive: true,
//             plugins: {
//               legend: {
//                 display: false,
//               },
//               tooltip: {
//                 enabled: true,
//                 backgroundColor: '#1e293b',
//                 titleFont: { size: 14 },
//                 bodyFont: { size: 13 },
//               },
//             },
//             scales: {
//               x: {
//                 ticks: {
//                   color: '#4b5563',
//                   font: { size: 13, weight: '500' },
//                 },
//                 grid: {
//                   display: false,
//                 },
//               },
//               y: {
//                 beginAtZero: true,
//                 ticks: {
//                   stepSize: 1,
//                   color: '#6b7280',
//                 },
//                 grid: {
//                   color: 'rgba(229,231,235,0.3)',
//                 },
//               },
//             },
//           }}
//         />
//       )}
//     </div>
//   )
// }

// export default TrackChart
























// // import React, {useState, useEffect} from 'react'
// // import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// // const TrackChart = () => {

// //     const [data, setdata] = useState([]);

// //     useEffect(() => {
// //         const stored = localStorage.getItem('journalEntries');
// //         if (stored) {
// //             const entries = JSON.parse(stored);

// //             const moodCounts = entries.reduce((acc, entry) => {
// //                 acc[entry.tag] = (acc[entry.tag] || 0) + 1;
// //                 return acc;
// //             }, {});

// //             const chartData = Object.entries(moodCounts).map(([mood, count]) =>     ({
// //                 mood,
// //                 count,
// //             }));

// //             setdata(chartData);
            

           
// //         }
// //     }, []);
// //   return (
// //     <div className='max-w-6xl mx-auto mt-10 p-6 bg-cyan-800 rounded shadow-md'>
// //         <h2 className='text-2xl text-white font-semibold mb-20 '>Mood Statistics</h2>

// //         {data.length === 0 ? (
// //             <p className='text-2xl text-gray-400'>No mood data to display yet.</p>
// //          ) : (
// //             <ResponsiveContainer width="100%" height={300}>
// //                 <BarChart data={data}>
// //                     <XAxis dataKey= "mood" stroke='#ffffff' />
// //                     <YAxis stroke='#ffffff' />
// //                     <Tooltip />
// //                     <Bar dataKey= "count" fill='38bdf8' />
// //                 </BarChart>
// //             </ResponsiveContainer>
// //          )}
// //     </div>
// //   )
// // }

// // export default TrackChart