import React from "react";
import LeftMenu from "../core/compoinents/assets/LeftMenu.jsx";
import { BreakButton, DashboardContainer, AnalystContainerContent, TableContainerHeaderButton } from "../containers/DashboardContainer.jsx";
import Layout from "../core/compoinents/assets/Layout.jsx";
import HeaderMenu from "../core/compoinents/assets/HeaderMenu.jsx";
import FormField from "../core/compoinents/assets/FormField.jsx";
import { SearchFieldComponent } from "../core/compoinents/assets/FieldComponent.jsx";
import { WorkingStateCardComponent, TimeCardComponent, LeaveRequestCardComponent, ChartCardComponent, DateCardComponent } from '../core/compoinents/assets/AnalystComponent.jsx'

const WareHouseOverviewPage = () => {
  const data = [
    { day: 'Chủ nhật', hours: 5 },
    { day: 'Thứ hai', hours: 8 },
    { day: 'Thứ ba', hours: 7 },
    { day: 'Thứ tư', hours: 6 },
    { day: 'Thứ năm', hours: 9 },
    { day: 'Thứ sáu', hours: 8 },
    { day: 'Thứ bảy', hours: 5 }
  ];

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
          <ChartCardComponent style={{ gridColumn: "span 4", gridRow: "span 3" }} data={data} columns={columns} numberOfColumns={numberOfColumns} />
        </AnalystContainerContent>
      </DashboardContainer>
    </Layout>
  );
};

export default WareHouseOverviewPage;
