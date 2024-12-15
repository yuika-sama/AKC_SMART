

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
  { "Mã nhân viên": "001", "Tên": "Nguyễn Văn A", "Ngày yêu cầu": "2024-12-01", "Số tiền (Triệu VND)": 10, "Lý do": "Đi công tác", "Trạng thái": "Đã phê duyệt" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Ngày yêu cầu": "2024-12-05", "Số tiền (Triệu VND)": 5, "Lý do": "Chi phí dự án", "Trạng thái": "Chờ phê duyệt" },
  { "Mã nhân viên": "003", "Tên": "Lê Quang C", "Ngày yêu cầu": "2024-12-02", "Số tiền (Triệu VND)": 8, "Lý do": "Chi phí tiếp khách", "Trạng thái": "Đã từ chối" },
  { "Mã nhân viên": "004", "Tên": "Phạm Thị D", "Ngày yêu cầu": "2024-12-03", "Số tiền (Triệu VND)": 12, "Lý do": "Mua thiết bị văn phòng", "Trạng thái": "Đã phê duyệt" },
  { "Mã nhân viên": "005", "Tên": "Hoàng Văn E", "Ngày yêu cầu": "2024-12-06", "Số tiền (Triệu VND)": 7, "Lý do": "Chi phí đi lại", "Trạng thái": "Chờ phê duyệt" },
  { "Mã nhân viên": "006", "Tên": "Nguyễn Thị F", "Ngày yêu cầu": "2024-12-04", "Số tiền (Triệu VND)": 9, "Lý do": "Đào tạo nhân viên", "Trạng thái": "Đã từ chối" },
  { "Mã nhân viên": "007", "Tên": "Phạm Văn G", "Ngày yêu cầu": "2024-12-07", "Số tiền (Triệu VND)": 15, "Lý do": "Chi phí sự kiện", "Trạng thái": "Đã phê duyệt" },
  { "Mã nhân viên": "008", "Tên": "Vũ Thị H", "Ngày yêu cầu": "2024-12-08", "Số tiền (Triệu VND)": 6, "Lý do": "Đi công tác", "Trạng thái": "Chờ phê duyệt" }
];


const AdvancePaymentRequestPage = () => {

  return (
    <Layout>

      <HeaderMenu />
      <LeftMenu />

      <DashboardContainer>

        <TableContainerHeaderButton style={{ gridColumn: "span 8", gridRow: "span 1" }} >
          <CreateOrderButton title="Tạo Đơn" link="/staff/createAdvancePaymentRequest" />
          <BreakButton style={{ gridColumn: "span 5", gridRow: "span 1" }} />
          <SearchFieldComponent style={{ gridColumn: "span 2" }} placeholder="Tìm kiếm theo tên" data={data} searchBy="Tên" />
        </TableContainerHeaderButton>

        <TableContainerContent style={{ gridColumn: "span 8", gridRow: "span 6" }}>
          <FormField style={{ gridColumn: 'span 8', gridRow: 'span 8' }}>
            <RenderfieldComponent data={data} />
          </FormField>
        </TableContainerContent>
      </DashboardContainer>
    </Layout >
  );
};

export default AdvancePaymentRequestPage;
