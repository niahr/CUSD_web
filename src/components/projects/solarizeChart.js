import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,

  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Emissions in Metric Tons CO2 equivalent (MTCO2e) Per Year',
    },
  },
};

const labels = [2008, 2010, 2012, 2014, 2016, 2017, 2021, 2025, 2029, 2033, 2035];

const data = {
  labels,
  datasets: [
    {
      label: 'Emissions 2008-2017',
      data: [(2008, 319743), (2010, 238420), (2012, 208616), (2014, 224650), (2016, 212100), (2017, 204200)],
      borderColor: '#0f9667',
      backgroundColor: '#97bdb0',
    },
    {
      label: 'Future Emissions Track',
      data: [{ x: 2017, y: 204200 }, { x: 2021, y: 142600 }, { x: 2025, y: 101000 }, { x: 2029, y: 60000 }, { x: 2033, y: 30000 }, { x: 2035, y: 0 }],
      borderColor: '#40e69e',
      borderDash: [5, 5],
      backgroundColor: '#a7ebd3',
    },
  ],
};

export default function SolarizeChart() {
  return <Line options={options} data={data} />;
}
