import React from "react";
import './css/dashboardContainer.css'

const DashboardContainer = ({ style, children }) => {
  return (
    <div id="content-container" style={style}>
      {children}
    </div>
  );
};



export { DashboardContainer };
