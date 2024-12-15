import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ClockOutButton } from "./Button";
import "../css/formField.css";
import '../css/dateCard.css'
import '../css/leaveRequestCard.css'
import '../css/timeCard.css'
import '../css/workingStateCard.css';

const DoubleBarChart = ({ data, style, tittle }) => {
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  const currentData = data[selectedPeriod];

  return (
    <div style={style}>
      <h1> {tittle}</h1>
      <select
        onChange={(e) => setSelectedPeriod(e.target.value)}
        value={selectedPeriod}
        style={{
          marginBottom: "20px",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          backgroundColor: "#f9f9f9",
          cursor: "pointer",
        }}
      >
        <option value="week">Tuần</option>
        <option value="month">Tháng</option>
        <option value="quarter">Quý</option>
        <option value="year">Năm</option>
      </select>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={currentData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="period" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="import" fill="#8884d8" name="Nhập kho" />
          <Bar dataKey="export" fill="#82ca9d" name="Xuất kho" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};



const DateCardComponent = ({ style }) => {
  return (
    <div className="work-time-container" style={style}>
      <div className="work-time-header">
        <div className="time-circle"></div>
        <div className="time-info">
          <h2 className="time-value">20 Ngày</h2>
          <p className="time-label">Tổng thời gian làm</p>
        </div>
      </div>

      <div className="divider"></div>

      <p className="remaining-time">
        4 ngày đã dùng cho phép
      </p>
    </div>
  );
};

const ChartCardComponent = ({ style, data, weekStart }) => {
  const daysOfWeek = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
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
    <div className="chart" style={style}>
      <BarChart style={style}
        width={800}
        height={250}
        data={chartData}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="day"
          style={{
            fontSize: '12px',
            fontWeight: 'normal',
            fontFamily: 'Nunito-Regular'
          }}
          angle={-45}
          textAnchor="end"
        />
        <YAxis
          style={{
            fontSize: '12px',
            fontWeight: 'normal',
            fontFamily: 'Nunito-Regular'
          }}
        />
        <Tooltip
          contentStyle={{
            fontSize: '12px',
            fontWeight: 'normal',
            fontFamily: 'Nunito-Regular'
          }}
          itemStyle={{
            fontSize: '12px',
            fontWeight: 'normal',
            fontFamily: 'Nunito-Regular'
          }}
        />
        <Legend
          wrapperStyle={{
            fontSize: '15px',
            fontWeight: 'normal',
            fontFamily: 'Nunito-Regular',
            position: 'top',
            marginLeft: '50px',
          }}
          payload={[{ value: 'Giờ', type: 'square', color: '#8884d8' }]} // Customizing legend text
        />
        <Bar dataKey="hours" fill="#8884d8" barSize={20} />
      </BarChart>
    </div>
  );
};

const LeaveRequestCardComponent = ({ style }) => {
  return (
    <div className="work-time-container" style={style}>
      <div className="work-time-header">
        <div className="time-circle"></div>
        <div className="time-info">
          <h2 className="time-value">2 Ngày</h2>
          <p className="time-label">Đã nghỉ</p>
        </div>
      </div>

      <div className="divider"></div>

      <p className="remaining-time">
        20 ngày nữa có thể yêu cầu
      </p>
    </div>
  );
};

const TimeCardComponent = ({ style, data }) => {
  return (
    <div className="work-time-container" style={style}>
      <div className="work-time-header">
        <div className="time-circle"></div>
        <div className="time-info">
          <h2 className="time-value">134 giờ 48 phút</h2>
          <p className="time-label">Thời gian đã làm</p>
        </div>
      </div>

      <div className="divider"></div>

      <p className="remaining-time">
        2 ngày nữa để đạt chỉ tiêu
      </p>
    </div>
  );
};


const WorkingStateCardComponent = ({ style }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [workStatus, setWorkStatus] = useState("");
  const [timeRange, setTimeRange] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    if ((hours === 8 && minutes >= 0) || (hours > 8 && hours < 12)) {
      setWorkStatus("Thời gian làm việc");
      setTimeRange("8:00AM - 12:00PM");
    } else if (hours === 12) {
      setWorkStatus("Thời gian nghỉ trưa");
      setTimeRange("12:00PM - 1:00PM");
    } else if ((hours === 13 && minutes >= 0) || (hours > 13 && hours < 17)) {
      setWorkStatus("Thời gian làm việc");
      setTimeRange("1:00PM - 5:00PM");
    } else {
      setWorkStatus("Ngoài giờ hành chính");
      setTimeRange("5:00PM - 8:00AM");
    }
  }, [currentTime]);

  return (
    <div className="container" style={style}>
      <h2 className="title">Trạng thái hoạt động</h2>
      <div className="time-clock">{currentTime.toLocaleTimeString()}</div>
      <div className="time-date">
        {`Ngày ${currentTime.getDate()} tháng ${currentTime.getMonth() + 1} năm ${currentTime.getFullYear()}`}
      </div>
      <div className="info-container">
        <div>
          <span className="time-state">{workStatus}</span>
          <span className="time-range">{timeRange}</span>
        </div>
        <div>
          <span className="aim-title">Mục tiêu ngày</span>
          <span className="time-amount">8h/ngày</span>
        </div>
      </div>
      <ClockOutButton />
    </div>
  );
};



export { WorkingStateCardComponent, TimeCardComponent, LeaveRequestCardComponent, ChartCardComponent, DateCardComponent, DoubleBarChart };
