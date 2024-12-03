import React from "react";
import LeftMenu from "../core/compoinents/assets/LeftMenu";
import { DashboardContainer } from "../containers/DashboardContainer.jsx";
import Layout from "../core/compoinents/assets/Layout";
import HeaderBar from "../core/compoinents/assets/HeaderBar.jsx";
import DateCard from "../containers/DateCard.jsx";
import LeaveRequestCard from "../containers/LeaveRequestCard.jsx";
import TimeCard from "../containers/TimeCard.jsx";
import WorkingStateCard from "../containers/WorkingStateCard.jsx";
import ChartCard from "../containers/ChartCard.jsx";
import './css/Overview.css';

const Overview = () => {
  const data = [
    { day: 'Thứ hai', hours: 6 },
    { day: 'Thứ ba', hours: 8 },
    { day: 'Thứ tư', hours: 10 },
    { day: 'Thứ năm', hours: 7 },
    { day: 'Thứ sáu', hours: 9 },
    { day: 'Thứ bảy', hours: 2 },
    { day: 'Chủ nhật', hours: 1 },
  ];
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
              <th><ChartCard data = {data}  weekStart="Thứ hai"/></th>
            </tr>
          </table>
      </div>
    </Layout>
  );
};

export default Overview;
