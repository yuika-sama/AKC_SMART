import React from "react";
import LeftMenu from "../core/compoinents/assets/LeftMenu.jsx";
import { BreakButton, DashboardContainer, TableContainerContent, TableContainerHeaderButton } from "../containers/DashboardContainer.jsx";
import Layout from "../core/compoinents/assets/Layout.jsx";
import HeaderBar from "../core/compoinents/assets/HeaderBar.jsx";
import FormField from "../core/compoinents/assets/FormField.jsx";
import { SearchFieldComponent } from "../core/compoinents/assets/FieldComponent.jsx";
import { WorkingStateCardComponent, TimeCardComponent, LeaveRequestCardComponent, ChartCardComponent, DateCardComponent } from '../core/compoinents/assets/DashboardComponent.jsx'


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

          <TimeCardComponent style={{ gridColumn: "span 4", gridRow: "span 2" }} />
          <DateCardComponent style={{ gridColumn: "span 4", gridRow: "span 2" }} />
          <LeaveRequestCardComponent style={{ gridColumn: "span 4", gridRow: "span 2" }} />
          <WorkingStateCardComponent style={{ gridColumn: "span 4", gridRow: "span 2" }} />
          <ChartCardComponent style={{ gridColumn: "span 4", gridRow: "span 2" }} data={data} weekStart="Thứ hai" />

        </TableContainerContent>
      </DashboardContainer>
    </Layout>
  );
};

export default OverviewPage;
