import React from "react";
import LeftMenu from "../core/compoinents/assets/LeftMenu";
import { DashboardContainer } from "../containers/DashboardContainer.jsx";
import Layout from "../core/compoinents/assets/Layout";
import HeaderBar from "../core/compoinents/assets/HeaderBar.jsx";
import DateCard from "../containers/DateCard.jsx";
import LeaveRequestCard from "../containers/LeaveRequestCard.jsx";
import TimeCard from "../containers/TimeCard.jsx";
import WorkingStateCard from "../containers/WorkingStateCard.jsx";
import './css/Overview.css';

const Overview = () => {
  return (
    <Layout>
      <HeaderBar userName="Yuika"/>
      <LeftMenu/>
      <div className="main-layout">
          <table className="table-layout">
            <tr className="first-row">
              <th><TimeCard /></th>
              <th><DateCard /></th>
              <th><LeaveRequestCard /></th>
            </tr>
            <tr className="second-row">
              <th><WorkingStateCard /></th>
            </tr>
          </table>
      </div>
    </Layout>
  );
};

export default Overview;
