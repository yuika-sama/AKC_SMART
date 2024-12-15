import React from "react";
import LeftMenu from "../core/compoinents/assets/LeftMenu.jsx";
import { BreakButton, DashboardContainer, AnalystContainerContent, TableContainerHeaderButton } from "../containers/DashboardContainer.jsx";
import Layout from "../core/compoinents/assets/Layout.jsx";
import HeaderMenu from "../core/compoinents/assets/HeaderMenu.jsx";
import FormField from "../core/compoinents/assets/FormField.jsx";
import { SearchFieldComponent } from "../core/compoinents/assets/FieldComponent.jsx";
import { WorkingStateCardComponent, TimeCardComponent, LeaveRequestCardComponent, ChartCardComponent, DateCardComponent, DoubleBarChart } from '../core/compoinents/assets/AnalystComponent.jsx'

const CashFlowManagementDashboard = () => {
  const data = [
    { day: 'Chủ nhật', hours: 5 },
    { day: 'Thứ hai', hours: 8 },
    { day: 'Thứ ba', hours: 7 },
    { day: 'Thứ tư', hours: 6 },
    { day: 'Thứ năm', hours: 9 },
    { day: 'Thứ sáu', hours: 8 },
    { day: 'Thứ bảy', hours: 5 }
  ];

  const sampleData = {
    week: [
      { period: "Week 1", import: 500, export: 400 },
      { period: "Week 2", import: 700, export: 300 },
      { period: "Week 3", import: 600, export: 500 },
      { period: "Week 4", import: 800, export: 700 },
    ],
    month: [
      { period: "January", import: 2000, export: 1800 },
      { period: "February", import: 2400, export: 2200 },
      { period: "March", import: 2700, export: 2500 },
      { period: "April", import: 2600, export: 2300 },
      { period: "May", import: 3000, export: 2800 },
      { period: "June", import: 3200, export: 3000 },
      { period: "July", import: 3400, export: 3100 },
      { period: "August", import: 3600, export: 3300 },
      { period: "September", import: 3800, export: 3500 },
      { period: "October", import: 4000, export: 3700 },
      { period: "November", import: 4200, export: 3900 },
      { period: "December", import: 4400, export: 4100 },
    ],
    quarter: [
      { period: "Q1", import: 7000, export: 6000 },
      { period: "Q2", import: 8000, export: 7500 },
      { period: "Q3", import: 9000, export: 8500 },
      { period: "Q4", import: 10000, export: 9500 },
    ],
    year: [
      { period: "2020", import: 35000, export: 32000 },
      { period: "2021", import: 40000, export: 38000 },
      { period: "2022", import: 45000, export: 42000 },
    ],
  };

  const columns = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
  const numberOfColumns = ['Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy', 'Chủ nhật'];
  return (
    <Layout>
      <HeaderMenu />
      <LeftMenu />
      <DashboardContainer>
        <TableContainerHeaderButton style={{ gridColumn: "span 8", gridRow: "span 1" }} >
          <BreakButton style={{ gridColumn: "span 5", gridRow: "span 1" }} />
        </TableContainerHeaderButton>

        <AnalystContainerContent>
          <DoubleBarChart tittle={'Quản lý dòng tiền'} data={sampleData} style={{ gridColumn: "span 4", gridRow: "span 3" }} />
        </AnalystContainerContent>

      </DashboardContainer>
    </Layout>
  );
};

export default CashFlowManagementDashboard;
