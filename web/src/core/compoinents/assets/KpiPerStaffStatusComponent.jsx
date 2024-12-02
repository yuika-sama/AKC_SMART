import React, { useState, useEffect } from "react";
import "../css/kpiPerStaffStatusComponent.css";

const KpiPerStaffStatusComponent = ({ currentStep }) => {
  const [status, setStatus] = useState('completed');
  const [lineColors, setLineColors] = useState({ 1: "incomplete", 2: "incomplete" });

  useEffect(() => {
    if (status === "draft") {
      setLineColors({ 1: "completed", 2: "incomplete" });
    } else if (status === "waiting") {
      setLineColors({ 1: "incomplete", 2: "completed" });
    } else {
      setLineColors({ 1: "incomplete", 2: "incomplete" });
    }
  }, [status]);

  return (
    <div className="kpi-header">
      <h3 className="kpi-title">KPI cá nhân</h3>
      <div className="kpi-steps">
        <div className="kpi-step">
          <div className={`step-circle-draf ${currentStep >= 1 ? "active" : ""}`}>
            1
          </div>
          <div className={`step-line ${lineColors[1]}`}></div>
        </div>
        <div className="kpi-step">
          <div className={`step-circle-waiting ${currentStep >= 2 ? "active" : ""}`}>
            2
          </div>
          <div className={`step-line ${lineColors[2]}`}></div>
        </div>
        <div className="kpi-step">
          <div className={`step-circle-compeleted ${currentStep >= 3 ? "active" : ""}`}>
            3
          </div>
        </div>
      </div>
    </div>
  );
};

export default KpiPerStaffStatusComponent;
