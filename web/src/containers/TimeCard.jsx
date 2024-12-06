import React from "react";
import './css/TimeCard.css'

const TimeCard = ({ style, data }) => {
  return (
    <div className="work-time-container">
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

export default TimeCard;
