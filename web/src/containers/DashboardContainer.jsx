import React from "react";
import './css/dashboardContainer.css'

const DashboardContainer = ({ style, children }) => {
  return (
    <div id="dashboard-container" style={style}>
      {children}
    </div>
  );
};

const TableContainerContent = ({ style, children }) => {
  return (
    <div id="table-container-content" style={style}>
      {children}
    </div>
  );
};

const TableContainerHeaderButton = ({ style, children }) => {
  return (
    <div id="table-container-header-button" style={style}>
      {children}
    </div>
  );
};


const BreakButton = ({ style, children }) => {
  return (
    <div id="table-container-header-button-break" style={style}>
      {children}
    </div>
  );
};


export { DashboardContainer, TableContainerContent, TableContainerHeaderButton, BreakButton };
