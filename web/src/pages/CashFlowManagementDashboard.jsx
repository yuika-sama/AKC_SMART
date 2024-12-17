import React from "react";
import LeftMenu from "../core/compoinents/assets/LeftMenu.jsx";
import { BreakButton, DashboardContainer, AnalystContainerContent, TableContainerHeaderButton } from "../containers/DashboardContainer.jsx";
import Layout from "../core/compoinents/assets/Layout.jsx";
import HeaderMenu from "../core/compoinents/assets/HeaderMenu.jsx";
import FormField from "../core/compoinents/assets/FormField.jsx";
import { SearchFieldComponent } from "../core/compoinents/assets/FieldComponent.jsx";
import { WorkingStateCardComponent, TimeCardComponent, LeaveRequestCardComponent, ChartCardComponent, DateCardComponent, DoubleBarChart, CashFlowChart } from '../core/compoinents/assets/AnalystComponent.jsx'

const CashFlowManagementDashboard = () => {


  const data = [
    {
      name: "Biên lai thanh toán", // Danh mục
      amount: 2000000, // Số tiền
      date: "2024-12-11", // Ngày chứng từ
    },
    {
      name: "Máy lạnh phải trả", // Danh mục
      amount: 3000000, // Số tiền
      date: "2024-12-18", // Ngày yêu cầu
    },
    {
      name: "Phiếu thu thanh toán",
      amount: 2500000,
      date: "2024-12-15",
    },
    {
      name: "Tiền điện tháng 12",
      amount: 1500000,
      date: "2024-12-20",
    },
    {
      name: "Biên nhận nội bộ",
      amount: 1800000,
      date: "2024-12-22",
    },
    {
      name: "Hóa đơn văn phòng phẩm",
      amount: 1200000,
      date: "2024-12-25",
    },
    {
      name: "Tạm ứng công tác phí",
      amount: 3200000,
      date: "2024-12-28",
    },
  ];
  return (
    <Layout>
      <HeaderMenu />
      <LeftMenu />
      <DashboardContainer>
        <TableContainerHeaderButton style={{ gridColumn: "span 8", gridRow: "span 1" }} >
          <BreakButton style={{ gridColumn: "span 5", gridRow: "span 1" }} />
        </TableContainerHeaderButton>

        <AnalystContainerContent>
          <CashFlowChart tittle={'Quản lý dòng tiền'} data={data} style={{ gridColumn: "span 6", gridRow: "span 5" }} />
        </AnalystContainerContent>

      </DashboardContainer>
    </Layout>
  );
};

export default CashFlowManagementDashboard;
