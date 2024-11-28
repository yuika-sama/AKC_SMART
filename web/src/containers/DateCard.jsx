import React from "react";
import './css/DateCard.css'

const DateCard = () => {
  return (
    <div className="work-time-container">
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

export default DateCard;
