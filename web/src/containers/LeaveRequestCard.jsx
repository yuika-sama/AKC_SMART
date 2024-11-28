import React from "react";
import './css/LeaveRequestCard.css'

const LeaveRequestCard = () => {
  return (
    <div className="work-time-container">
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

export default LeaveRequestCard;
