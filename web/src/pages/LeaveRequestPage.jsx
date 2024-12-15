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
  { "Mã nhân viên": "001", "Tên": "Nguyễn Văn A", "Ngày bắt đầu": "2024-12-10", "Ngày kết thúc": "2024-12-12", "Lý do": "Nghỉ phép cá nhân", "Trạng thái": "Đã phê duyệt" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Ngày bắt đầu": "2024-12-15", "Ngày kết thúc": "2024-12-17", "Lý do": "Chăm sóc gia đình", "Trạng thái": "Chờ phê duyệt" },
  { "Mã nhân viên": "003", "Tên": "Lê Quang C", "Ngày bắt đầu": "2024-12-20", "Ngày kết thúc": "2024-12-25", "Lý do": "Đi du lịch", "Trạng thái": "Đã phê duyệt" },
  { "Mã nhân viên": "004", "Tên": "Phạm Thị D", "Ngày bắt đầu": "2024-12-18", "Ngày kết thúc": "2024-12-19", "Lý do": "Ốm", "Trạng thái": "Đã từ chối" },
  { "Mã nhân viên": "005", "Tên": "Hoàng Văn E", "Ngày bắt đầu": "2024-12-08", "Ngày kết thúc": "2024-12-10", "Lý do": "Tham gia hội nghị", "Trạng thái": "Đã phê duyệt" },
  { "Mã nhân viên": "006", "Tên": "Nguyễn Thị F", "Ngày bắt đầu": "2024-12-22", "Ngày kết thúc": "2024-12-24", "Lý do": "Lý do cá nhân", "Trạng thái": "Chờ phê duyệt" },
  { "Mã nhân viên": "007", "Tên": "Phạm Văn G", "Ngày bắt đầu": "2024-12-11", "Ngày kết thúc": "2024-12-12", "Lý do": "Ốm", "Trạng thái": "Đã phê duyệt" },
  { "Mã nhân viên": "008", "Tên": "Vũ Thị H", "Ngày bắt đầu": "2024-12-25", "Ngày kết thúc": "2024-12-30", "Lý do": "Đi công tác", "Trạng thái": "Đã phê duyệt" },
  { "Mã nhân viên": "009", "Tên": "Đỗ Văn I", "Ngày bắt đầu": "2024-12-13", "Ngày kết thúc": "2024-12-14", "Lý do": "Làm việc riêng", "Trạng thái": "Đã từ chối" },
  { "Mã nhân viên": "010", "Tên": "Lý Thị J", "Ngày bắt đầu": "2024-12-20", "Ngày kết thúc": "2024-12-22", "Lý do": "Tham dự đám cưới", "Trạng thái": "Chờ phê duyệt" },
  { "Mã nhân viên": "011", "Tên": "Nguyễn Văn K", "Ngày bắt đầu": "2024-12-15", "Ngày kết thúc": "2024-12-16", "Lý do": "Lý do sức khỏe", "Trạng thái": "Đã phê duyệt" },
  { "Mã nhân viên": "012", "Tên": "Trần Thị L", "Ngày bắt đầu": "2024-12-23", "Ngày kết thúc": "2024-12-27", "Lý do": "Đi du lịch", "Trạng thái": "Đã phê duyệt" },
  { "Mã nhân viên": "013", "Tên": "Hoàng Văn M", "Ngày bắt đầu": "2024-12-12", "Ngày kết thúc": "2024-12-14", "Lý do": "Chăm sóc người thân", "Trạng thái": "Chờ phê duyệt" },
  { "Mã nhân viên": "014", "Tên": "Phạm Thị N", "Ngày bắt đầu": "2024-12-17", "Ngày kết thúc": "2024-12-18", "Lý do": "Làm việc riêng", "Trạng thái": "Đã từ chối" },
  { "Mã nhân viên": "015", "Tên": "Vũ Văn O", "Ngày bắt đầu": "2024-12-09", "Ngày kết thúc": "2024-12-11", "Lý do": "Đi công tác", "Trạng thái": "Đã phê duyệt" },
  { "Mã nhân viên": "016", "Tên": "Đỗ Thị P", "Ngày bắt đầu": "2024-12-18", "Ngày kết thúc": "2024-12-21", "Lý do": "Lý do cá nhân", "Trạng thái": "Chờ phê duyệt" },
  { "Mã nhân viên": "017", "Tên": "Lý Văn Q", "Ngày bắt đầu": "2024-12-10", "Ngày kết thúc": "2024-12-13", "Lý do": "Tham dự hội nghị", "Trạng thái": "Đã phê duyệt" },
  { "Mã nhân viên": "018", "Tên": "Nguyễn Thị R", "Ngày bắt đầu": "2024-12-20", "Ngày kết thúc": "2024-12-22", "Lý do": "Chăm sóc gia đình", "Trạng thái": "Đã từ chối" },
  { "Mã nhân viên": "019", "Tên": "Trần Văn S", "Ngày bắt đầu": "2024-12-25", "Ngày kết thúc": "2024-12-28", "Lý do": "Đi công tác", "Trạng thái": "Đã phê duyệt" },
  { "Mã nhân viên": "020", "Tên": "Hoàng Thị T", "Ngày bắt đầu": "2024-12-08", "Ngày kết thúc": "2024-12-09", "Lý do": "Làm việc riêng", "Trạng thái": "Đã từ chối" }
];

const LeaveRequestPage = () => {

  return (
    <Layout>

      <HeaderMenu />
      <LeftMenu />

      <DashboardContainer>

        <TableContainerHeaderButton style={{ gridColumn: "span 8", gridRow: "span 1" }} >
          <CreateOrderButton title="Tạo Đơn" link="/staff/createLeaveRequest" />
          <BreakButton style={{ gridColumn: "span 5", gridRow: "span 1" }} />
          <SearchFieldComponent style={{ gridColumn: "span 2" }} placeholder="Tìm kiếm theo tên" data={data} searchBy="Tên" />
        </TableContainerHeaderButton>

        <TableContainerContent style={{ gridColumn: "span 8", gridRow: "span 6" }}>
          <FormField style={{ gridColumn: 'span 8', gridRow: 'span 8' }}>
            <RenderfieldComponent data={data} option='Mã nhân viên' />
          </FormField>
        </TableContainerContent>
      </DashboardContainer>
    </Layout >
  );
};

export default LeaveRequestPage;
