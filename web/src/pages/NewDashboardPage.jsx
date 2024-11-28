import React from "react";
import HeaderMenu from "../core/compoinents/assets/HeaderMenu";
import LeftMenu from "../core/compoinents/assets/LeftMenu";
import FormField from "../core/compoinents/assets/FormField.jsx";
import Layout from "../core/compoinents/assets/Layout";
import { DashboardContainer } from "../containers/DashboardContainer.jsx";
import TimeCard from "../containers/TimeCard.jsx";
import DateCard from "../containers/DateCard.jsx";
import LeaveRequestCard from "../containers/LeaveRequestCard.jsx";
import WorkingStateCard from "../containers/WorkingStateCard.jsx";
import SideBar from "../core/compoinents/assets/SideBar.jsx";
import HeaderBar from "../core/compoinents/assets/HeaderBar.jsx";

const DashboardPage = () => {
  return (
    <Layout>
      <HeaderBar userName="Yuika" />
      <SideBar />  
    </Layout>
  );
};

export default DashboardPage;
