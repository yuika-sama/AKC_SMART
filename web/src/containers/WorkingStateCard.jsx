import React, { useState, useEffect } from "react";
import './css/WorkingStateCard.css';
import { ClockOutButton } from "../core/compoinents/assets/Button";

const WorkingStateCard = () => {
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
    <div className="container">
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

export default WorkingStateCard;
