import React, { useEffect, useState } from "react";
import HeaderMenu from "../core/compoinents/assets/HeaderMenu.jsx";
import LeftMenu from "../core/compoinents/assets/LeftMenu.jsx";
import FormField from "../core/compoinents/assets/FormField.jsx";
import Layout from "../core/compoinents/assets/Layout.jsx";
import { BreakButton, DashboardContainer, TableContainerContent, TableContainerHeaderButton } from "../containers/DashboardContainer.jsx";
import KpiPerStaffStatusComponent from "../core/compoinents/assets/KpiPerStaffStatusComponent.jsx";
import { AproveRenderfieldComponent, InputfieldComponent, RenderfieldComponent, SearchFieldComponent, SelectFieldComponent } from "../core/compoinents/assets/FieldComponent.jsx";
import { CreateOrderButton, FileUploadButton } from "../core/compoinents/assets/Button.jsx";
import { Placeholder } from "semantic-ui-react";

const data = [
  { "Mã hàng": "001", "Tên hàng": "Máy tính", "Ngày yêu cầu": "2024-12-10", "Số lượng yêu cầu": 50, "Lý do": "Cung cấp cho dự án A", "Trạng thái": "Chờ xuất kho" },
  { "Mã hàng": "002", "Tên hàng": "Bàn làm việc", "Ngày yêu cầu": "2024-12-12", "Số lượng yêu cầu": 20, "Lý do": "Thay mới văn phòng", "Trạng thái": "Chờ xuất kho" },
  { "Mã hàng": "003", "Tên hàng": "Ghế xoay", "Ngày yêu cầu": "2024-12-09", "Số lượng yêu cầu": 30, "Lý do": "Trang bị cho phòng họp", "Trạng thái": "Đã xuất kho" },
  { "Mã hàng": "004", "Tên hàng": "Máy chiếu", "Ngày yêu cầu": "2024-12-15", "Số lượng yêu cầu": 10, "Lý do": "Dùng cho hội thảo", "Trạng thái": "Chờ xuất kho" },
  { "Mã hàng": "005", "Tên hàng": "Màn hình", "Ngày yêu cầu": "2024-12-14", "Số lượng yêu cầu": 15, "Lý do": "Thay thế màn hình cũ", "Trạng thái": "Chờ xuất kho" },
  { "Mã hàng": "006", "Tên hàng": "Máy in", "Ngày yêu cầu": "2024-12-13", "Số lượng yêu cầu": 5, "Lý do": "Cung cấp cho phòng làm việc", "Trạng thái": "Đã xuất kho" },
  { "Mã hàng": "007", "Tên hàng": "Máy chiếu", "Ngày yêu cầu": "2024-12-16", "Số lượng yêu cầu": 12, "Lý do": "Cung cấp cho sự kiện", "Trạng thái": "Chờ xuất kho" },
  { "Mã hàng": "008", "Tên hàng": "Bàn ghế văn phòng", "Ngày yêu cầu": "2024-12-17", "Số lượng yêu cầu": 8, "Lý do": "Cung cấp cho văn phòng mới", "Trạng thái": "Chờ xuất kho" }
];




const ApproveStockExportDashBoardPage = () => {

  const fetchData = async (query) => {
    const normalizedQuery = query.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const filteredData = data.filter(item => {
      console.log("Checking item:", item["Tên"]);
      return item["Tên"].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(normalizedQuery.toLowerCase());
    });
    return filteredData;
  };



  return (
    <Layout>

      <HeaderMenu />
      <LeftMenu />

      <DashboardContainer>

        <TableContainerHeaderButton style={{ gridColumn: "span 9", gridRow: "span 1" }} >
          <CreateOrderButton title="Tạo Đơn" link="/approve/stockExported" />
          <BreakButton style={{ gridColumn: "span 5", gridRow: "span 1" }} />
          <SearchFieldComponent style={{ gridColumn: "span 2" }} placeholder="Tìm kiếm theo tên" data={data} searchBy="Tên" />
        </TableContainerHeaderButton>

        <TableContainerContent style={{ gridColumn: "span 8", gridRow: "span 6" }}>
          <FormField style={{ gridColumn: 'span 8', gridRow: 'span 8' }}>
            <AproveRenderfieldComponent data={data} option='Mã hàng' />
          </FormField>
        </TableContainerContent>
      </DashboardContainer>
    </Layout >
  );
};

export default ApproveStockExportDashBoardPage;