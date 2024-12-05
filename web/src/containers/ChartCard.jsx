import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const daysOfWeek = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];

const ChartCard = ({ data, weekStart }) => {
  const startIndex = daysOfWeek.indexOf(weekStart);
  const safeStartIndex = startIndex !== -1 ? startIndex : 0;

  const reorderedDaysOfWeek = [
    ...daysOfWeek.slice(safeStartIndex),
    ...daysOfWeek.slice(0, safeStartIndex)
  ];

  const chartData = reorderedDaysOfWeek.map(day => {
    const matchingData = data.find(entry => entry.day === day);
    return {
      day,
      hours: matchingData ? matchingData.hours : 0
    };
  });

  return (
    <BarChart
      width={700}
      height={300}
      data={chartData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="day"
        style={{
          fontSize: '12px',
          fontWeight: 'normal',
          fontFamily: 'Arial, sans-serif'
        }}
        angle={-45}
        textAnchor="end"
      />
      <YAxis
        style={{
          fontSize: '12px',
          fontWeight: 'normal',
          fontFamily: 'Arial, sans-serif'
        }}
      />
      <Tooltip
        contentStyle={{
          fontSize: '12px',
          fontWeight: 'normal',
          fontFamily: 'Arial, sans-serif'
        }}
        itemStyle={{
          fontSize: '12px',
          fontWeight: 'normal',
          fontFamily: 'Arial, sans-serif'
        }}
      />
      <Legend
        wrapperStyle={{
          fontSize: '15px',
          fontWeight: 'normal',
          fontFamily: 'Arial, sans-serif',
          position: 'top',
          marginLeft: '50px',
        }}
        payload={[{ value: 'Giờ', type: 'square', color: '#8884d8' }]} // Customizing legend text
      />
      <Bar dataKey="hours" fill="#8884d8" barSize={20} />
    </BarChart>
  );
};

export default ChartCard;
