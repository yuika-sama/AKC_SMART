import React from "react";
import HeaderMenu from "../core/compoinents/assets/HeaderMenu.jsx";
import LeftMenu from "../core/compoinents/assets/LeftMenu.jsx";
import FormField from "../core/compoinents/assets/FormField.jsx";
import Layout from "../core/compoinents/assets/Layout.jsx";
import { BreakButton, DashboardContainer, TableContainerContent, TableContainerHeaderButton } from "../containers/DashboardContainer.jsx";
import { RenderfieldComponent, SearchFieldComponent } from "../core/compoinents/assets/FieldComponent.jsx";
import { CreateOrderButton } from "../core/compoinents/assets/Button.jsx";

const data = [
  { "Mã nhân viên": "001", "Tên": "Nguyễn Văn A", "Thời gian checkin": "2024-12-10 08:00", "Thời gian checkout": "2024-12-10 17:00" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Thời gian checkin": "2024-12-12 09:00", "Thời gian checkout": "2024-12-12 16:30" },
  { "Mã nhân viên": "003", "Tên": "Lê Quang C", "Thời gian checkin": "2024-12-09 08:15", "Thời gian checkout": "2024-12-09 17:00" },
  { "Mã nhân viên": "004", "Tên": "Phạm Thị D", "Thời gian checkin": "2024-12-15 07:45", "Thời gian checkout": "" },
  { "Mã nhân viên": "005", "Tên": "Hoàng Văn E", "Thời gian checkin": "2024-12-14 08:30", "Thời gian checkout": "2024-12-14 17:15" },
  { "Mã nhân viên": "006", "Tên": "Nguyễn Thị F", "Thời gian checkin": "2024-12-13 09:00", "Thời gian checkout": "" },
  { "Mã nhân viên": "007", "Tên": "Phạm Văn G", "Thời gian checkin": "2024-12-16 08:00", "Thời gian checkout": "2024-12-16 18:00" },
  { "Mã nhân viên": "008", "Tên": "Vũ Thị H", "Thời gian checkin": "2024-12-17 09:15", "Thời gian checkout": "" }
];

data.forEach(employee => {
  const { "Thời gian checkin": checkin, "Thời gian checkout": checkout } = employee;

  if (checkout) {
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    const totalTime = (checkoutDate - checkinDate) / (1000 * 60 * 60); // Tổng thời gian làm (giờ)
    employee["Tổng thời gian làm"] = totalTime.toFixed(2) + " giờ";
  } else {
    employee["Tổng thời gian làm"] = "-";
    employee["Thời gian checkout"] = "-";
  }
});


const TimeKeeping = () => {
  return (
    <Layout>
      <HeaderMenu />
      <LeftMenu />
      <DashboardContainer>
        <TableContainerHeaderButton>
          <CreateOrderButton title='xác nhận' />
          <BreakButton style={{ gridColumn: "span 5", gridRow: "span 1" }} />
          <SearchFieldComponent style={{ gridColumn: "span 2" }} placeholder="Tìm kiếm theo tên" />
        </TableContainerHeaderButton>
        <TableContainerContent style={{ gridColumn: "span 8", gridRow: "span 6" }}>
          <FormField style={{ gridColumn: "span 8", gridRow: "span 8" }}>
            <RenderfieldComponent data={data} />
          </FormField>
        </TableContainerContent>
      </DashboardContainer>
    </Layout>
  )
}

export default TimeKeeping