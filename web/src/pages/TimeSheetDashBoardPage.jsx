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
  { "Mã nhân viên": "001", "Tên": "Nguyễn Văn A", "Chức vụ": "Giám đốc", "Phòng ban": "Kinh doanh", "Số điện thoại": "0123456789" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Chức vụ": "Nhân viên", "Phòng ban": "Marketing", "Số điện thoại": "0987654321" },
  { "Mã nhân viên": "003", "Tên": "Lê Quang C", "Chức vụ": "Trưởng phòng", "Phòng ban": "Kế toán", "Số điện thoại": "0912345678" }
];


const TimeSheetDashBoardPage = () => {

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

export default TimeSheetDashBoardPage;
