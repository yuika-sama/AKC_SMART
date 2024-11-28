import React from "react";
import './css/WorkingStateCard.css'
import ClockOutButton from "../core/compoinents/assets/ClockOutButton";

const WorkingStateCard = () => {
  return (
    <div className="container"> 
        <h2 className="title">Trạng thái hoạt động</h2>
        <div className="time-clock">12: 34: 08</div>
        <div className="time-date">Ngày 12 tháng 9 năm 2024</div>
        <div className="info-container">
            <div>
                <span className="time-state">Thời gian nghỉ trưa</span>
                <span className="time-range">12.00PM - 01.00PM</span>
            </div>
            <div>
                <span className="aim-title">Mục tiêu ngày</span>
                <span className="time-amount">8h/ngày</span>
            </div>
        </div>
        <ClockOutButton/>
    </div>
  );
};

export default WorkingStateCard;
