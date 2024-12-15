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
  { "Mã nhân viên": "NHMK001", "Người Tạo": "Vũ Lệnh Hiệp", "Số Điện Thoại": "0869561191", "Giới tính": "Nam", "Phòng Ban": "Phòng Kinh Doanh", "Chức vụ": "Nhân Viên" },
  { "Mã nhân viên": "NHMK002", "Người Tạo": "Trần Thiện Tài", "Số Điện Thoại": "0912345678", "Giới tính": "Nam", "Phòng Ban": "Phòng Marketing", "Chức vụ": "Trưởng Phòng" },
  { "Mã nhân viên": "NHMK003", "Người Tạo": "Lê Thị Mai", "Số Điện Thoại": "0938765432", "Giới tính": "Nữ", "Phòng Ban": "Phòng Nhân Sự", "Chức vụ": "Nhân Viên" },
  { "Mã nhân viên": "NHMK004", "Người Tạo": "Nguyễn Văn B", "Số Điện Thoại": "0862345678", "Giới tính": "Nam", "Phòng Ban": "Phòng Kỹ Thuật", "Chức vụ": "Giám Đốc" },
  { "Mã nhân viên": "NHMK005", "Người Tạo": "Phạm Ngọc Lan", "Số Điện Thoại": "0901234567", "Giới tính": "Nữ", "Phòng Ban": "Phòng Dự Án", "Chức vụ": "Trưởng Phòng" },
  { "Mã nhân viên": "NHMK006", "Người Tạo": "Đỗ Minh Tuấn", "Số Điện Thoại": "0987654321", "Giới tính": "Nam", "Phòng Ban": "Phòng Kinh Doanh", "Chức vụ": "Nhân Viên" },
  { "Mã nhân viên": "NHMK007", "Người Tạo": "Nguyễn Thị Lan", "Số Điện Thoại": "0912456789", "Giới tính": "Nữ", "Phòng Ban": "Phòng Marketing", "Chức vụ": "Nhân Viên" },
  { "Mã nhân viên": "NHMK008", "Người Tạo": "Lê Quang Duy", "Số Điện Thoại": "0945678910", "Giới tính": "Nam", "Phòng Ban": "Phòng Nhân Sự", "Chức vụ": "Trưởng Phòng" },
  { "Mã nhân viên": "NHMK009", "Người Tạo": "Trần Minh Hoàng", "Số Điện Thoại": "0922334455", "Giới tính": "Nam", "Phòng Ban": "Phòng Dự Án", "Chức vụ": "Giám Đốc" },
  { "Mã nhân viên": "NHMK010", "Người Tạo": "Võ Thị Lan Anh", "Số Điện Thoại": "0908765432", "Giới tính": "Nữ", "Phòng Ban": "Phòng Kỹ Thuật", "Chức vụ": "Nhân Viên" },
  { "Mã nhân viên": "NHMK011", "Người Tạo": "Nguyễn Hồng Nhung", "Số Điện Thoại": "0865432109", "Giới tính": "Nữ", "Phòng Ban": "Phòng Kinh Doanh", "Chức vụ": "Trưởng Phòng" },
  { "Mã nhân viên": "NHMK012", "Người Tạo": "Hoàng Thanh Sơn", "Số Điện Thoại": "0987412589", "Giới tính": "Nam", "Phòng Ban": "Phòng Dự Án", "Chức vụ": "Nhân Viên" },
  { "Mã nhân viên": "NHMK013", "Người Tạo": "Phan Thị Minh", "Số Điện Thoại": "0934678291", "Giới tính": "Nữ", "Phòng Ban": "Phòng Nhân Sự", "Chức vụ": "Giám Đốc" },
  { "Mã nhân viên": "NHMK014", "Người Tạo": "Nguyễn Văn Mạnh", "Số Điện Thoại": "0865987412", "Giới tính": "Nam", "Phòng Ban": "Phòng Kinh Doanh", "Chức vụ": "Nhân Viên" },
  { "Mã nhân viên": "NHMK015", "Người Tạo": "Lê Minh Tuấn", "Số Điện Thoại": "0901234567", "Giới tính": "Nam", "Phòng Ban": "Phòng Marketing", "Chức vụ": "Trưởng Phòng" },
  { "Mã nhân viên": "NHMK016", "Người Tạo": "Trần Hữu Tài", "Số Điện Thoại": "0947589642", "Giới tính": "Nam", "Phòng Ban": "Phòng Nhân Sự", "Chức vụ": "Nhân Viên" },
  { "Mã nhân viên": "NHMK017", "Người Tạo": "Nguyễn Thị Mai", "Số Điện Thoại": "0901324567", "Giới tính": "Nữ", "Phòng Ban": "Phòng Kỹ Thuật", "Chức vụ": "Nhân Viên" },
  { "Mã nhân viên": "NHMK018", "Người Tạo": "Lê Quang C", "Số Điện Thoại": "0916532678", "Giới tính": "Nam", "Phòng Ban": "Phòng Marketing", "Chức vụ": "Trưởng Phòng" },
  { "Mã nhân viên": "NHMK019", "Người Tạo": "Phan Thị Lan", "Số Điện Thoại": "0934567890", "Giới tính": "Nữ", "Phòng Ban": "Phòng Kinh Doanh", "Chức vụ": "Nhân Viên" },
  { "Mã nhân viên": "NHMK020", "Người Tạo": "Trần Đăng Khoa", "Số Điện Thoại": "0922334455", "Giới tính": "Nam", "Phòng Ban": "Phòng Dự Án", "Chức vụ": "Nhân Viên" },
  { "Mã nhân viên": "NHMK021", "Người Tạo": "Lê Thiện Hòa", "Số Điện Thoại": "0909988776", "Giới tính": "Nam", "Phòng Ban": "Phòng Nhân Sự", "Chức vụ": "Giám Đốc" },
  { "Mã nhân viên": "NHMK022", "Người Tạo": "Nguyễn Quang Hieu", "Số Điện Thoại": "0912345678", "Giới tính": "Nam", "Phòng Ban": "Phòng Marketing", "Chức vụ": "Trưởng Phòng" },
  { "Mã nhân viên": "NHMK023", "Người Tạo": "Phạm Thị Lan", "Số Điện Thoại": "0987423659", "Giới tính": "Nữ", "Phòng Ban": "Phòng Kinh Doanh", "Chức vụ": "Nhân Viên" },
  { "Mã nhân viên": "NHMK024", "Người Tạo": "Nguyễn Tấn Tài", "Số Điện Thoại": "0865437896", "Giới tính": "Nam", "Phòng Ban": "Phòng Dự Án", "Chức vụ": "Giám Đốc" },
  { "Mã nhân viên": "NHMK025", "Người Tạo": "Lê Thị Bảo", "Số Điện Thoại": "0905678132", "Giới tính": "Nữ", "Phòng Ban": "Phòng Marketing", "Chức vụ": "Trưởng Phòng" },
  { "Mã nhân viên": "NHMK026", "Người Tạo": "Trần Thanh Thúy", "Số Điện Thoại": "0919876543", "Giới tính": "Nữ", "Phòng Ban": "Phòng Nhân Sự", "Chức vụ": "Nhân Viên" },
  { "Mã nhân viên": "NHMK027", "Người Tạo": "Nguyễn Thanh Tài", "Số Điện Thoại": "0931234567", "Giới tính": "Nam", "Phòng Ban": "Phòng Kinh Doanh", "Chức vụ": "Nhân Viên" },
  { "Mã nhân viên": "NHMK028", "Người Tạo": "Võ Thị Kim", "Số Điện Thoại": "0906549871", "Giới tính": "Nữ", "Phòng Ban": "Phòng Dự Án", "Chức vụ": "Trưởng Phòng" },
  { "Mã nhân viên": "NHMK029", "Người Tạo": "Lê Thiện Tuấn", "Số Điện Thoại": "0932345678", "Giới tính": "Nam", "Phòng Ban": "Phòng Nhân Sự", "Chức vụ": "Nhân Viên" },
  { "Mã nhân viên": "NHMK030", "Người Tạo": "Nguyễn Lệ Thanh", "Số Điện Thoại": "0913214567", "Giới tính": "Nữ", "Phòng Ban": "Phòng Marketing", "Chức vụ": "Trưởng Phòng" },
  { "Mã nhân viên": "NHMK031", "Người Tạo": "Trần Quang Hieu", "Số Điện Thoại": "0987654321", "Giới tính": "Nam", "Phòng Ban": "Phòng Kinh Doanh", "Chức vụ": "Giám Đốc" },
  { "Mã nhân viên": "NHMK032", "Người Tạo": "Lê Thị Lan", "Số Điện Thoại": "0931324657", "Giới tính": "Nữ", "Phòng Ban": "Phòng Nhân Sự", "Chức vụ": "Nhân Viên" },
  { "Mã nhân viên": "NHMK033", "Người Tạo": "Nguyễn Thị Thu", "Số Điện Thoại": "0904567389", "Giới tính": "Nữ", "Phòng Ban": "Phòng Dự Án", "Chức vụ": "Trưởng Phòng" },
  { "Mã nhân viên": "NHMK034", "Người Tạo": "Phan Minh", "Số Điện Thoại": "0924335678", "Giới tính": "Nam", "Phòng Ban": "Phòng Marketing", "Chức vụ": "Nhân Viên" },
  { "Mã nhân viên": "NHMK035", "Người Tạo": "Võ Thiện Hòa", "Số Điện Thoại": "0905672345", "Giới tính": "Nam", "Phòng Ban": "Phòng Kinh Doanh", "Chức vụ": "Nhân Viên" },
  { "Mã nhân viên": "NHMK036", "Người Tạo": "Nguyễn Lệ Thanh", "Số Điện Thoại": "0907456789", "Giới tính": "Nữ", "Phòng Ban": "Phòng Nhân Sự", "Chức vụ": "Giám Đốc" },
  { "Mã nhân viên": "NHMK037", "Người Tạo": "Lê Thanh Tân", "Số Điện Thoại": "0931098765", "Giới tính": "Nam", "Phòng Ban": "Phòng Dự Án", "Chức vụ": "Nhân Viên" },
  { "Mã nhân viên": "NHMK038", "Người Tạo": "Trần Thiệt Thu", "Số Điện Thoại": "0918765432", "Giới tính": "Nữ", "Phòng Ban": "Phòng Marketing", "Chức vụ": "Trưởng Phòng" },
  { "Mã nhân viên": "NHMK039", "Người Tạo": "Nguyễn Thanh Hòa", "Số Điện Thoại": "0909876543", "Giới tính": "Nam", "Phòng Ban": "Phòng Nhân Sự", "Chức vụ": "Giám Đốc" },
  { "Mã nhân viên": "NHMK040", "Người Tạo": "Võ Tiến Đạt", "Số Điện Thoại": "0934538765", "Giới tính": "Nam", "Phòng Ban": "Phòng Kỹ Thuật", "Chức vụ": "Trưởng Phòng" }
];



const TimeSheetDashBoardPage = () => {

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
            <RenderfieldComponent data={data} />
          </FormField>
        </TableContainerContent>
      </DashboardContainer>
    </Layout >
  );
};

export default TimeSheetDashBoardPage;