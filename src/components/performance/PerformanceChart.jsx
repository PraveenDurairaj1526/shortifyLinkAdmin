import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, } from "chart.js";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from 'react-redux';
import { getLinkFromFirebase } from '../../slice/shortLinkSlice';
import { getFilterData } from './getFilterData';
import DateFilter from './DateFilter';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const PerformanceChart = () => {
  const { shortLinks, loading } = useSelector((state) => state?.shortLinks)
  const dispatch = useDispatch();
  const [days, setDays] = useState(7);

  useEffect(() => {
    dispatch(getLinkFromFirebase());
  }, [dispatch]);


  const rawData = [
    { count: 120, shortLink: 20 },
    { count: 190, shortLink: 30 },
    { count: 300, shortLink: 40 },
    { count: 250, shortLink: 22 },
    { count: 220, shortLink: 18 },
    { count: 400, shortLink: 50 },
    { count: 380, shortLink: 45 },
  ];
  const select = 'click '

  const data = {
    labels: [...getFilterData(shortLinks, days).map(item => item.date)],
    datasets: [
      {
        label: 'Short Link',
        data: getFilterData(shortLinks, days).map(item => item.shortLink),
        borderColor: "#6366F1",
        backgroundColor: "#6366F1",
        tension: 0,
        fill: true,
      }
    ],
  };


  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        grid: {
          color: "#ebe6e7",
        },
      },
    },
  };

  return (
    <div className="p-5 rounded-xl border border-gray-200 bg-white mb-6">
      <div className='flex justify-between flex-wrap gap-3 mb-6'>
        <div>
          <div className='text-xl font-semibold mb-1.5'>Link Creation Analytics</div>
          <p className='text-sm text-gray-700'>Day-by-day short links created over the selected period</p>
        </div>
        <DateFilter days={days} setDays={setDays} />
      </div>
      <div className='h-[450px]'>
        <Line data={data} options={options} />
      </div>
    </div>
  )
}

export default PerformanceChart