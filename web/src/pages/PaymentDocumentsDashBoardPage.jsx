import React, { useEffect, useState } from "react";
import HeaderMenu from "../core/compoinents/assets/HeaderMenu.jsx";
import LeftMenu from "../core/compoinents/assets/LeftMenu.jsx";
import FormField from "../core/compoinents/assets/FormField.jsx";
import Layout from "../core/compoinents/assets/Layout.jsx";
import { BreakButton, DashboardContainer, TableContainerContent, TableContainerHeaderButton } from "../containers/DashboardContainer.jsx";
import KpiPerStaffStatusComponent from "../core/compoinents/assets/KpiPerStaffStatusComponent.jsx";
import { InputfieldComponent, RenderfieldComponent, SearchFieldComponent, SelectFieldComponent } from "../core/compoinents/assets/FieldComponent.jsx";
import { CreateOrderButton, FileUploadButton } from "../core/compoinents/assets/Button.jsx";
import { Placeholder } from "semantic-ui-react";

const data = [
  { "Mã chứng từ": "CT001", "Ngày chứng từ": "2024-12-01", "Loại chứng từ": "Hóa đơn", "Số tiền": 5000000, "Mã nhân viên": "NHMK001", "Người lập": "Vũ Lệnh Hiệp", "Phòng ban": "Phòng Kinh Doanh" },
  { "Mã chứng từ": "CT002", "Ngày chứng từ": "2024-12-02", "Loại chứng từ": "Biên lai", "Số tiền": 3000000, "Mã nhân viên": "NHMK002", "Người lập": "Trần Thiện Tài", "Phòng ban": "Phòng Marketing" },
  { "Mã chứng từ": "CT003", "Ngày chứng từ": "2024-12-03", "Loại chứng từ": "Phiếu thu", "Số tiền": 1000000, "Mã nhân viên": "NHMK003", "Người lập": "Lê Thị Mai", "Phòng ban": "Phòng Nhân Sự" },
  { "Mã chứng từ": "CT004", "Ngày chứng từ": "2024-12-04", "Loại chứng từ": "Hóa đơn", "Số tiền": 1500000, "Mã nhân viên": "NHMK004", "Người lập": "Nguyễn Văn B", "Phòng ban": "Phòng Kỹ Thuật" },
  { "Mã chứng từ": "CT005", "Ngày chứng từ": "2024-12-05", "Loại chứng từ": "Phiếu chi", "Số tiền": 2500000, "Mã nhân viên": "NHMK005", "Người lập": "Phạm Ngọc Lan", "Phòng ban": "Phòng Dự Án" },
  { "Mã chứng từ": "CT006", "Ngày chứng từ": "2024-12-06", "Loại chứng từ": "Hóa đơn", "Số tiền": 7000000, "Mã nhân viên": "NHMK006", "Người lập": "Đỗ Minh Tuấn", "Phòng ban": "Phòng Kinh Doanh" },
  { "Mã chứng từ": "CT007", "Ngày chứng từ": "2024-12-07", "Loại chứng từ": "Biên lai", "Số tiền": 4000000, "Mã nhân viên": "NHMK007", "Người lập": "Nguyễn Thị Lan", "Phòng ban": "Phòng Marketing" },
  { "Mã chứng từ": "CT008", "Ngày chứng từ": "2024-12-08", "Loại chứng từ": "Phiếu thu", "Số tiền": 6000000, "Mã nhân viên": "NHMK008", "Người lập": "Lê Quang Duy", "Phòng ban": "Phòng Nhân Sự" },
  { "Mã chứng từ": "CT009", "Ngày chứng từ": "2024-12-09", "Loại chứng từ": "Hóa đơn", "Số tiền": 8000000, "Mã nhân viên": "NHMK009", "Người lập": "Trần Minh Hoàng", "Phòng ban": "Phòng Dự Án" },
  { "Mã chứng từ": "CT010", "Ngày chứng từ": "2024-12-10", "Loại chứng từ": "Phiếu chi", "Số tiền": 3500000, "Mã nhân viên": "NHMK010", "Người lập": "Võ Thị Lan Anh", "Phòng ban": "Phòng Kỹ Thuật" },
  { "Mã chứng từ": "CT011", "Ngày chứng từ": "2024-12-11", "Loại chứng từ": "Biên lai", "Số tiền": 2000000, "Mã nhân viên": "NHMK011", "Người lập": "Nguyễn Hồng Nhung", "Phòng ban": "Phòng Kinh Doanh" }, { "Mã chứng từ": "CT001", "Ngày chứng từ": "2024-12-01", "Loại chứng từ": "Hóa đơn", "Số tiền": 5000000, "Mã nhân viên": "NHMK001", "Người lập": "Vũ Lệnh Hiệp", "Phòng ban": "Phòng Kinh Doanh" },
  { "Mã chứng từ": "CT002", "Ngày chứng từ": "2024-12-02", "Loại chứng từ": "Biên lai", "Số tiền": 3000000, "Mã nhân viên": "NHMK002", "Người lập": "Trần Thiện Tài", "Phòng ban": "Phòng Marketing" },
  { "Mã chứng từ": "CT003", "Ngày chứng từ": "2024-12-03", "Loại chứng từ": "Phiếu thu", "Số tiền": 1000000, "Mã nhân viên": "NHMK003", "Người lập": "Lê Thị Mai", "Phòng ban": "Phòng Nhân Sự" },
  { "Mã chứng từ": "CT004", "Ngày chứng từ": "2024-12-04", "Loại chứng từ": "Hóa đơn", "Số tiền": 1500000, "Mã nhân viên": "NHMK004", "Người lập": "Nguyễn Văn B", "Phòng ban": "Phòng Kỹ Thuật" },
  { "Mã chứng từ": "CT005", "Ngày chứng từ": "2024-12-05", "Loại chứng từ": "Phiếu chi", "Số tiền": 2500000, "Mã nhân viên": "NHMK005", "Người lập": "Phạm Ngọc Lan", "Phòng ban": "Phòng Dự Án" },
  { "Mã chứng từ": "CT006", "Ngày chứng từ": "2024-12-06", "Loại chứng từ": "Hóa đơn", "Số tiền": 7000000, "Mã nhân viên": "NHMK006", "Người lập": "Đỗ Minh Tuấn", "Phòng ban": "Phòng Kinh Doanh" },
  { "Mã chứng từ": "CT007", "Ngày chứng từ": "2024-12-07", "Loại chứng từ": "Biên lai", "Số tiền": 4000000, "Mã nhân viên": "NHMK007", "Người lập": "Nguyễn Thị Lan", "Phòng ban": "Phòng Marketing" },
  { "Mã chứng từ": "CT008", "Ngày chứng từ": "2024-12-08", "Loại chứng từ": "Phiếu thu", "Số tiền": 6000000, "Mã nhân viên": "NHMK008", "Người lập": "Lê Quang Duy", "Phòng ban": "Phòng Nhân Sự" },
  { "Mã chứng từ": "CT009", "Ngày chứng từ": "2024-12-09", "Loại chứng từ": "Hóa đơn", "Số tiền": 8000000, "Mã nhân viên": "NHMK009", "Người lập": "Trần Minh Hoàng", "Phòng ban": "Phòng Dự Án" },
  { "Mã chứng từ": "CT010", "Ngày chứng từ": "2024-12-10", "Loại chứng từ": "Phiếu chi", "Số tiền": 3500000, "Mã nhân viên": "NHMK010", "Người lập": "Võ Thị Lan Anh", "Phòng ban": "Phòng Kỹ Thuật" },
  { "Mã chứng từ": "CT011", "Ngày chứng từ": "2024-12-11", "Loại chứng từ": "Biên lai", "Số tiền": 2000000, "Mã nhân viên": "NHMK011", "Người lập": "Nguyễn Hồng Nhung", "Phòng ban": "Phòng Kinh Doanh" }, { "Mã chứng từ": "CT001", "Ngày chứng từ": "2024-12-01", "Loại chứng từ": "Hóa đơn", "Số tiền": 5000000, "Mã nhân viên": "NHMK001", "Người lập": "Vũ Lệnh Hiệp", "Phòng ban": "Phòng Kinh Doanh" },
  { "Mã chứng từ": "CT002", "Ngày chứng từ": "2024-12-02", "Loại chứng từ": "Biên lai", "Số tiền": 3000000, "Mã nhân viên": "NHMK002", "Người lập": "Trần Thiện Tài", "Phòng ban": "Phòng Marketing" },
  { "Mã chứng từ": "CT003", "Ngày chứng từ": "2024-12-03", "Loại chứng từ": "Phiếu thu", "Số tiền": 1000000, "Mã nhân viên": "NHMK003", "Người lập": "Lê Thị Mai", "Phòng ban": "Phòng Nhân Sự" },
  { "Mã chứng từ": "CT004", "Ngày chứng từ": "2024-12-04", "Loại chứng từ": "Hóa đơn", "Số tiền": 1500000, "Mã nhân viên": "NHMK004", "Người lập": "Nguyễn Văn B", "Phòng ban": "Phòng Kỹ Thuật" },
  { "Mã chứng từ": "CT005", "Ngày chứng từ": "2024-12-05", "Loại chứng từ": "Phiếu chi", "Số tiền": 2500000, "Mã nhân viên": "NHMK005", "Người lập": "Phạm Ngọc Lan", "Phòng ban": "Phòng Dự Án" },
  { "Mã chứng từ": "CT006", "Ngày chứng từ": "2024-12-06", "Loại chứng từ": "Hóa đơn", "Số tiền": 7000000, "Mã nhân viên": "NHMK006", "Người lập": "Đỗ Minh Tuấn", "Phòng ban": "Phòng Kinh Doanh" },
  { "Mã chứng từ": "CT007", "Ngày chứng từ": "2024-12-07", "Loại chứng từ": "Biên lai", "Số tiền": 4000000, "Mã nhân viên": "NHMK007", "Người lập": "Nguyễn Thị Lan", "Phòng ban": "Phòng Marketing" },
  { "Mã chứng từ": "CT008", "Ngày chứng từ": "2024-12-08", "Loại chứng từ": "Phiếu thu", "Số tiền": 6000000, "Mã nhân viên": "NHMK008", "Người lập": "Lê Quang Duy", "Phòng ban": "Phòng Nhân Sự" },
  { "Mã chứng từ": "CT009", "Ngày chứng từ": "2024-12-09", "Loại chứng từ": "Hóa đơn", "Số tiền": 8000000, "Mã nhân viên": "NHMK009", "Người lập": "Trần Minh Hoàng", "Phòng ban": "Phòng Dự Án" },
  { "Mã chứng từ": "CT010", "Ngày chứng từ": "2024-12-10", "Loại chứng từ": "Phiếu chi", "Số tiền": 3500000, "Mã nhân viên": "NHMK010", "Người lập": "Võ Thị Lan Anh", "Phòng ban": "Phòng Kỹ Thuật" },
  { "Mã chứng từ": "CT011", "Ngày chứng từ": "2024-12-11", "Loại chứng từ": "Biên lai", "Số tiền": 2000000, "Mã nhân viên": "NHMK011", "Người lập": "Nguyễn Hồng Nhung", "Phòng ban": "Phòng Kinh Doanh" },
];



const PaymentDocumentsDashBoardPage = () => {

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
          <CreateOrderButton title="Tạo Đơn" link="/staff/createTimeSheet" />
          <BreakButton style={{ gridColumn: "span 5", gridRow: "span 1" }} />
          <SearchFieldComponent style={{ gridColumn: "span 2" }} placeholder="Tìm kiếm theo tên" data={data} searchBy="Tên" />
        </TableContainerHeaderButton>

        <TableContainerContent style={{ gridColumn: "span 8", gridRow: "span 6" }}>
          <FormField style={{ gridColumn: 'span 8', gridRow: 'span 8' }}>
            <RenderfieldComponent data={data} option='Mã chứng từ' />
          </FormField>
        </TableContainerContent>
      </DashboardContainer>
    </Layout >
  );
};

export default PaymentDocumentsDashBoardPage;