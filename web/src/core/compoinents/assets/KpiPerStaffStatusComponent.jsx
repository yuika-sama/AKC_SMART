import React, { useState, useEffect } from "react";
import "../css/kpiPerStaffStatusComponent.css";

const KpiPerStaffStatusComponent = ({ currentStep, title }) => {
  const [lineColors, setLineColors] = useState({ 1: "incomplete", 2: "incomplete" });
  const [circleColors, setCircleColors] = useState({
    1: "inactive", 2: "inactive", 3: "inactive"
  });

  useEffect(() => {
    // Cập nhật màu sắc của các vòng tròn và đường nối
    if (currentStep === 1) {
      setLineColors({ 1: "completed", 2: "incomplete" });
      setCircleColors({ 1: "active", 2: "inactive", 3: "inactive" });
    } else if (currentStep === 2) {
      setLineColors({ 1: "completed", 2: "completed" });
      setCircleColors({ 1: "active", 2: "active", 3: "inactive" });
    } else if (currentStep === 3) {
      setLineColors({ 1: "completed", 2: "completed" });
      setCircleColors({ 1: "active", 2: "active", 3: "active" });
    }
  }, [currentStep]);

  return (
    <div className="kpi-header">
      <h3 className="kpi-title">{title}</h3>
      <div className="kpi-steps">
        {/* <div className="kpi-step">
          <div className={`step-circle-draf ${circleColors[1] === "active" ? "active" : ""}`}>
            1
          </div>
          <div className={`step-line ${lineColors[1]}`}></div>
        </div>
        <div className="kpi-step">
          <div className={`step-circle-waiting ${circleColors[2] === "active" ? "active" : ""}`}>
            2
          </div>
          <div className={`step-line ${lineColors[2]}`}></div>
        </div>
        <div className="kpi-step">
          <div className={`step-circle-completed ${circleColors[3] === "active" ? "active" : ""}`}>
            3
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default KpiPerStaffStatusComponent;
