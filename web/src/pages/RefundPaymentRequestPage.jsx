

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
  { "Mã nhân viên": "001", "Tên": "Nguyễn Văn A", "Ngày hoàn ứng": "2024-12-10", "Số tiền hoàn ứng (Triệu VND)": 8, "Lý do": "Hoàn tiền công tác", "Trạng thái": "Đã hoàn tất" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Ngày hoàn ứng": "2024-12-12", "Số tiền hoàn ứng (Triệu VND)": 4, "Lý do": "Hoàn chi phí dự án", "Trạng thái": "Chờ xử lý" },
  { "Mã nhân viên": "003", "Tên": "Lê Quang C", "Ngày hoàn ứng": "2024-12-09", "Số tiền hoàn ứng (Triệu VND)": 5, "Lý do": "Hoàn tiền tiếp khách", "Trạng thái": "Đã hoàn tất" },
  { "Mã nhân viên": "004", "Tên": "Phạm Thị D", "Ngày hoàn ứng": "2024-12-15", "Số tiền hoàn ứng (Triệu VND)": 10, "Lý do": "Hoàn chi phí mua thiết bị", "Trạng thái": "Đã hoàn tất" },
  { "Mã nhân viên": "005", "Tên": "Hoàng Văn E", "Ngày hoàn ứng": "2024-12-14", "Số tiền hoàn ứng (Triệu VND)": 6, "Lý do": "Hoàn chi phí đi lại", "Trạng thái": "Chờ xử lý" },
  { "Mã nhân viên": "006", "Tên": "Nguyễn Thị F", "Ngày hoàn ứng": "2024-12-13", "Số tiền hoàn ứng (Triệu VND)": 7, "Lý do": "Hoàn tiền đào tạo", "Trạng thái": "Đã hoàn tất" },
  { "Mã nhân viên": "007", "Tên": "Phạm Văn G", "Ngày hoàn ứng": "2024-12-16", "Số tiền hoàn ứng (Triệu VND)": 12, "Lý do": "Hoàn chi phí sự kiện", "Trạng thái": "Đã hoàn tất" },
  { "Mã nhân viên": "008", "Tên": "Vũ Thị H", "Ngày hoàn ứng": "2024-12-17", "Số tiền hoàn ứng (Triệu VND)": 5, "Lý do": "Hoàn tiền công tác", "Trạng thái": "Chờ xử lý" }
];



const RefundPaymentRequestPage = () => {

  return (
    <Layout>

      <HeaderMenu />
      <LeftMenu />

      <DashboardContainer>

        <TableContainerHeaderButton style={{ gridColumn: "span 8", gridRow: "span 1" }} >


          <BreakButton style={{ gridColumn: "span 6", gridRow: "span 1" }} />
          <FormField style={{ gridColumn: 'span 2 ', gridRow: 'span 1', }}>
            <SearchFieldComponent style={{ placeholder: 'Tìm kiếm' }} />
          </FormField>
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

export default RefundPaymentRequestPage;
