import React from "react";
import LeftMenu from "../core/compoinents/assets/LeftMenu.jsx";
import { BreakButton, DashboardContainer, TableContainerContent, TableContainerHeaderButton } from "../containers/DashboardContainer.jsx";
import Layout from "../core/compoinents/assets/Layout.jsx";
import HeaderBar from "../core/compoinents/assets/HeaderBar.jsx";
import DateCard from "../containers/DateCard.jsx";
import LeaveRequestCard from "../containers/LeaveRequestCard.jsx";
import TimeCard from "../containers/TimeCard.jsx";
import WorkingStateCard from "../containers/WorkingStateCard.jsx";
import ChartCard from "../containers/ChartCard.jsx";
import FormField from "../core/compoinents/assets/FormField.jsx";
import { SearchFieldComponent } from "../core/compoinents/assets/FieldComponent.jsx";
import './css/Overview.css';

const OverviewPage = () => {
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
      <HeaderBar userName="Yuika" />
      <LeftMenu />
      <DashboardContainer>
        <TableContainerHeaderButton style={{ gridColumn: "span 8", gridRow: "span 1" }} >
          <BreakButton style={{ gridColumn: "span 6", gridRow: "span 1" }} />
          <FormField style={{ gridColumn: 'span 2 ', gridRow: 'span 1', }}>
            <SearchFieldComponent style={{ placeholder: 'Tìm kiếm' }} />
          </FormField>
        </TableContainerHeaderButton>

        <TableContainerContent>

          <TimeCard style={{ gridColumn: "span 4", gridRow: "span 2" }} />
          <DateCard style={{ gridColumn: "span 4", gridRow: "span 2" }} />
          <LeaveRequestCard style={{ gridColumn: "span 4", gridRow: "span 2" }} />
          <WorkingStateCard style={{ gridColumn: "span 4", gridRow: "span 2" }} />
          <ChartCard style={{ gridColumn: "span 4", gridRow: "span 2" }} data={data} weekStart="Thứ hai" />

        </TableContainerContent>
      </DashboardContainer>
    </Layout>
  );
};

export default OverviewPage;
