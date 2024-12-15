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
  { "Mã khoản": "AP001", "Tên khoản": "Hóa đơn mua máy tính", "Ngày yêu cầu": "2024-12-10", "Số tiền": 5000000, "Lý do": "Mua máy tính cho văn phòng", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP002", "Tên khoản": "Hóa đơn mua bàn làm việc", "Ngày yêu cầu": "2024-12-12", "Số tiền": 3000000, "Lý do": "Mua bàn làm việc cho phòng nhân sự", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP003", "Tên khoản": "Hóa đơn thuê văn phòng", "Ngày yêu cầu": "2024-12-01", "Số tiền": 10000000, "Lý do": "Thuê văn phòng mới cho công ty", "Trạng thái": "Đã thanh toán" },
  { "Mã khoản": "AP004", "Tên khoản": "Hóa đơn dịch vụ internet", "Ngày yêu cầu": "2024-12-05", "Số tiền": 1200000, "Lý do": "Thanh toán dịch vụ internet tháng 12", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP005", "Tên khoản": "Hóa đơn mua ghế xoay", "Ngày yêu cầu": "2024-12-09", "Số tiền": 1500000, "Lý do": "Mua ghế xoay cho phòng họp", "Trạng thái": "Đã thanh toán" },
  { "Mã khoản": "AP006", "Tên khoản": "Hóa đơn mua máy in", "Ngày yêu cầu": "2024-12-13", "Số tiền": 2000000, "Lý do": "Mua máy in cho văn phòng", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP007", "Tên khoản": "Hóa đơn dịch vụ bảo trì", "Ngày yêu cầu": "2024-12-15", "Số tiền": 800000, "Lý do": "Dịch vụ bảo trì máy móc", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP008", "Tên khoản": "Hóa đơn cung cấp vật tư", "Ngày yêu cầu": "2024-12-18", "Số tiền": 4500000, "Lý do": "Cung cấp vật tư cho văn phòng mới", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP009", "Tên khoản": "Hóa đơn bảo hiểm nhân viên", "Ngày yêu cầu": "2024-12-10", "Số tiền": 2500000, "Lý do": "Thanh toán bảo hiểm nhân viên", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP010", "Tên khoản": "Hóa đơn dịch vụ vệ sinh", "Ngày yêu cầu": "2024-12-12", "Số tiền": 1200000, "Lý do": "Dịch vụ vệ sinh định kỳ", "Trạng thái": "Đã thanh toán" },
  { "Mã khoản": "AP011", "Tên khoản": "Hóa đơn sửa chữa máy tính", "Ngày yêu cầu": "2024-12-01", "Số tiền": 1800000, "Lý do": "Sửa chữa máy tính văn phòng", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP012", "Tên khoản": "Hóa đơn thanh toán tiền điện", "Ngày yêu cầu": "2024-12-04", "Số tiền": 3000000, "Lý do": "Thanh toán tiền điện tháng 12", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP013", "Tên khoản": "Hóa đơn phần mềm quản lý", "Ngày yêu cầu": "2024-12-06", "Số tiền": 4000000, "Lý do": "Mua phần mềm quản lý", "Trạng thái": "Đã thanh toán" },
  { "Mã khoản": "AP014", "Tên khoản": "Hóa đơn bảo trì máy chiếu", "Ngày yêu cầu": "2024-12-07", "Số tiền": 600000, "Lý do": "Bảo trì máy chiếu hội thảo", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP015", "Tên khoản": "Hóa đơn cung cấp văn phòng phẩm", "Ngày yêu cầu": "2024-12-09", "Số tiền": 1000000, "Lý do": "Cung cấp văn phòng phẩm cho văn phòng", "Trạng thái": "Đã thanh toán" },
  { "Mã khoản": "AP016", "Tên khoản": "Hóa đơn máy chiếu", "Ngày yêu cầu": "2024-12-10", "Số tiền": 7500000, "Lý do": "Mua máy chiếu cho phòng họp", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP017", "Tên khoản": "Hóa đơn dịch vụ vận chuyển", "Ngày yêu cầu": "2024-12-11", "Số tiền": 2500000, "Lý do": "Vận chuyển thiết bị văn phòng", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP018", "Tên khoản": "Hóa đơn tổ chức sự kiện", "Ngày yêu cầu": "2024-12-13", "Số tiền": 12000000, "Lý do": "Chi phí tổ chức sự kiện", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP019", "Tên khoản": "Hóa đơn dịch vụ quảng cáo", "Ngày yêu cầu": "2024-12-14", "Số tiền": 5000000, "Lý do": "Chi phí quảng cáo", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP020", "Tên khoản": "Hóa đơn dịch vụ cloud", "Ngày yêu cầu": "2024-12-16", "Số tiền": 4000000, "Lý do": "Thanh toán dịch vụ cloud cho công ty", "Trạng thái": "Đã thanh toán" },
  { "Mã khoản": "AP021", "Tên khoản": "Hóa đơn mua sắm thiết bị văn phòng", "Ngày yêu cầu": "2024-12-17", "Số tiền": 3500000, "Lý do": "Mua thiết bị văn phòng", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP022", "Tên khoản": "Hóa đơn thuê dịch vụ bảo vệ", "Ngày yêu cầu": "2024-12-18", "Số tiền": 2000000, "Lý do": "Thuê dịch vụ bảo vệ văn phòng", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP023", "Tên khoản": "Hóa đơn thanh toán tiền nước", "Ngày yêu cầu": "2024-12-15", "Số tiền": 800000, "Lý do": "Thanh toán tiền nước tháng 12", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP024", "Tên khoản": "Hóa đơn tiền vận chuyển", "Ngày yêu cầu": "2024-12-20", "Số tiền": 1500000, "Lý do": "Vận chuyển thiết bị văn phòng", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP025", "Tên khoản": "Hóa đơn thanh toán dịch vụ điện thoại", "Ngày yêu cầu": "2024-12-22", "Số tiền": 1000000, "Lý do": "Thanh toán dịch vụ điện thoại văn phòng", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP026", "Tên khoản": "Hóa đơn thuê xe", "Ngày yêu cầu": "2024-12-23", "Số tiền": 3000000, "Lý do": "Thuê xe đi công tác", "Trạng thái": "Đã thanh toán" },
  { "Mã khoản": "AP027", "Tên khoản": "Hóa đơn quảng cáo trên truyền hình", "Ngày yêu cầu": "2024-12-24", "Số tiền": 8000000, "Lý do": "Quảng cáo cho sản phẩm mới", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP028", "Tên khoản": "Hóa đơn mua thẻ cào điện thoại", "Ngày yêu cầu": "2024-12-25", "Số tiền": 500000, "Lý do": "Mua thẻ cào cho công ty", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP029", "Tên khoản": "Hóa đơn sửa chữa máy tính xách tay", "Ngày yêu cầu": "2024-12-26", "Số tiền": 1500000, "Lý do": "Sửa chữa máy tính xách tay cho nhân viên", "Trạng thái": "Đã thanh toán" },
  { "Mã khoản": "AP030", "Tên khoản": "Hóa đơn dịch vụ tiếp tân", "Ngày yêu cầu": "2024-12-27", "Số tiền": 1000000, "Lý do": "Dịch vụ tiếp tân cho văn phòng", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP031", "Tên khoản": "Hóa đơn bảo dưỡng thang máy", "Ngày yêu cầu": "2024-12-28", "Số tiền": 500000, "Lý do": "Bảo dưỡng thang máy văn phòng", "Trạng thái": "Đã thanh toán" },
  { "Mã khoản": "AP032", "Tên khoản": "Hóa đơn thanh toán tiền lương nhân viên", "Ngày yêu cầu": "2024-12-29", "Số tiền": 15000000, "Lý do": "Thanh toán tiền lương nhân viên tháng 12", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP033", "Tên khoản": "Hóa đơn dịch vụ thiết kế website", "Ngày yêu cầu": "2024-12-30", "Số tiền": 10000000, "Lý do": "Thiết kế website công ty", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP034", "Tên khoản": "Hóa đơn mua sắm đồ dùng cho bếp", "Ngày yêu cầu": "2024-12-31", "Số tiền": 300000, "Lý do": "Mua đồ dùng cho bếp văn phòng", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP035", "Tên khoản": "Hóa đơn phí tổ chức đào tạo", "Ngày yêu cầu": "2024-12-10", "Số tiền": 8000000, "Lý do": "Chi phí đào tạo nhân viên", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP036", "Tên khoản": "Hóa đơn chi phí hội nghị", "Ngày yêu cầu": "2024-12-12", "Số tiền": 6000000, "Lý do": "Chi phí tổ chức hội nghị", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP037", "Tên khoản": "Hóa đơn cung cấp dịch vụ truyền thông", "Ngày yêu cầu": "2024-12-15", "Số tiền": 5000000, "Lý do": "Dịch vụ truyền thông marketing", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP038", "Tên khoản": "Hóa đơn bảo trì hệ thống mạng", "Ngày yêu cầu": "2024-12-16", "Số tiền": 2500000, "Lý do": "Bảo trì hệ thống mạng công ty", "Trạng thái": "Chờ thanh toán" },
  { "Mã khoản": "AP039", "Tên khoản": "Hóa đơn điện thoại", "Ngày yêu cầu": "2024-12-17", "Số tiền": 1500000, "Lý do": "Thanh toán cước điện thoại công ty", "Trạng thái": "Đã thanh toán" },
  { "Mã khoản": "AP040", "Tên khoản": "Hóa đơn máy lạnh", "Ngày yêu cầu": "2024-12-18", "Số tiền": 3000000, "Lý do": "Mua máy lạnh cho văn phòng", "Trạng thái": "Chờ thanh toán" }
];




const AccountsPayableDashboardPage = () => {

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

export default AccountsPayableDashboardPage;