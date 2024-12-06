import React from "react";
import LeftMenu from "../core/compoinents/assets/LeftMenu.jsx";
import { BreakButton, DashboardContainer, AnalystContainerContent, TableContainerHeaderButton } from "../containers/DashboardContainer.jsx";
import Layout from "../core/compoinents/assets/Layout.jsx";
import HeaderMenu from "../core/compoinents/assets/HeaderMenu.jsx";
import FormField from "../core/compoinents/assets/FormField.jsx";
import { SearchFieldComponent } from "../core/compoinents/assets/FieldComponent.jsx";
import { WorkingStateCardComponent, TimeCardComponent, LeaveRequestCardComponent, ChartCardComponent, DateCardComponent } from '../core/compoinents/assets/AnalystComponent.jsx'

const OverviewPage = () => {
  const data = [];

  const chart = [
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
      <HeaderMenu />
      <LeftMenu />
      <DashboardContainer>
        <TableContainerHeaderButton style={{ gridColumn: "span 8", gridRow: "span 1" }} >
          <BreakButton style={{ gridColumn: "span 5", gridRow: "span 1" }} />
          <SearchFieldComponent style={{ gridColumn: "span 2" }} placeholder="Tìm kiếm theo tên" data={data} searchBy="Tên" />
        </TableContainerHeaderButton>

        <AnalystContainerContent>

          <TimeCardComponent style={{ gridColumn: "span 2", gridRow: "span 2" }} />
          <DateCardComponent style={{ gridColumn: "span 2", gridRow: "span 2" }} />
          <LeaveRequestCardComponent style={{ gridColumn: "span 2", gridRow: "span 2" }} />
          <WorkingStateCardComponent style={{ gridColumn: "span 2", gridRow: "span 3" }} />
          <ChartCardComponent style={{ gridColumn: "span 4", gridRow: "span 3" }} data={chart} weekStart="Thứ hai" />

        </AnalystContainerContent>
      </DashboardContainer>
    </Layout>
  );
};

export default OverviewPage;
