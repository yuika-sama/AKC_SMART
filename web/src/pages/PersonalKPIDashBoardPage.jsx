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
  { "Mã nhân viên": "001", "Tên": "Nguyễn Văn A", "Doanh số (Triệu VND)": 500, "Tỷ lệ hoàn thành (%)": 95, "Số giờ làm thêm": 10, "Số lỗi vi phạm": 0, "Xếp hạng hiệu suất": "A" },
  { "Mã nhân viên": "002", "Tên": "Trần Thị B", "Doanh số (Triệu VND)": 300, "Tỷ lệ hoàn thành (%)": 85, "Số giờ làm thêm": 20, "Số lỗi vi phạm": 2, "Xếp hạng hiệu suất": "B" },
  { "Mã nhân viên": "003", "Tên": "Lê Quang C", "Doanh số (Triệu VND)": 450, "Tỷ lệ hoàn thành (%)": 90, "Số giờ làm thêm": 15, "Số lỗi vi phạm": 1, "Xếp hạng hiệu suất": "A" },
  { "Mã nhân viên": "004", "Tên": "Phạm Thị D", "Doanh số (Triệu VND)": 250, "Tỷ lệ hoàn thành (%)": 80, "Số giờ làm thêm": 5, "Số lỗi vi phạm": 3, "Xếp hạng hiệu suất": "C" },
  { "Mã nhân viên": "005", "Tên": "Hoàng Văn E", "Doanh số (Triệu VND)": 600, "Tỷ lệ hoàn thành (%)": 98, "Số giờ làm thêm": 12, "Số lỗi vi phạm": 0, "Xếp hạng hiệu suất": "A+" },
  { "Mã nhân viên": "006", "Tên": "Nguyễn Thị F", "Doanh số (Triệu VND)": 350, "Tỷ lệ hoàn thành (%)": 88, "Số giờ làm thêm": 7, "Số lỗi vi phạm": 1, "Xếp hạng hiệu suất": "B" },
  { "Mã nhân viên": "007", "Tên": "Phạm Văn G", "Doanh số (Triệu VND)": 200, "Tỷ lệ hoàn thành (%)": 75, "Số giờ làm thêm": 3, "Số lỗi vi phạm": 4, "Xếp hạng hiệu suất": "C" },
  { "Mã nhân viên": "008", "Tên": "Vũ Thị H", "Doanh số (Triệu VND)": 550, "Tỷ lệ hoàn thành (%)": 96, "Số giờ làm thêm": 18, "Số lỗi vi phạm": 0, "Xếp hạng hiệu suất": "A+" },
  { "Mã nhân viên": "009", "Tên": "Đỗ Văn I", "Doanh số (Triệu VND)": 420, "Tỷ lệ hoàn thành (%)": 92, "Số giờ làm thêm": 9, "Số lỗi vi phạm": 0, "Xếp hạng hiệu suất": "A" },
  { "Mã nhân viên": "010", "Tên": "Lý Thị J", "Doanh số (Triệu VND)": 300, "Tỷ lệ hoàn thành (%)": 85, "Số giờ làm thêm": 6, "Số lỗi vi phạm": 1, "Xếp hạng hiệu suất": "B" },
  { "Mã nhân viên": "011", "Tên": "Nguyễn Văn K", "Doanh số (Triệu VND)": 400, "Tỷ lệ hoàn thành (%)": 90, "Số giờ làm thêm": 14, "Số lỗi vi phạm": 1, "Xếp hạng hiệu suất": "A" },
  { "Mã nhân viên": "012", "Tên": "Trần Thị L", "Doanh số (Triệu VND)": 500, "Tỷ lệ hoàn thành (%)": 95, "Số giờ làm thêm": 20, "Số lỗi vi phạm": 0, "Xếp hạng hiệu suất": "A+" },
  { "Mã nhân viên": "013", "Tên": "Hoàng Văn M", "Doanh số (Triệu VND)": 350, "Tỷ lệ hoàn thành (%)": 87, "Số giờ làm thêm": 10, "Số lỗi vi phạm": 2, "Xếp hạng hiệu suất": "B" },
  { "Mã nhân viên": "014", "Tên": "Phạm Thị N", "Doanh số (Triệu VND)": 250, "Tỷ lệ hoàn thành (%)": 78, "Số giờ làm thêm": 4, "Số lỗi vi phạm": 3, "Xếp hạng hiệu suất": "C" },
  { "Mã nhân viên": "015", "Tên": "Vũ Văn O", "Doanh số (Triệu VND)": 600, "Tỷ lệ hoàn thành (%)": 99, "Số giờ làm thêm": 22, "Số lỗi vi phạm": 0, "Xếp hạng hiệu suất": "A+" },
  { "Mã nhân viên": "016", "Tên": "Đỗ Thị P", "Doanh số (Triệu VND)": 430, "Tỷ lệ hoàn thành (%)": 91, "Số giờ làm thêm": 8, "Số lỗi vi phạm": 0, "Xếp hạng hiệu suất": "A" },
  { "Mã nhân viên": "017", "Tên": "Lý Văn Q", "Doanh số (Triệu VND)": 310, "Tỷ lệ hoàn thành (%)": 84, "Số giờ làm thêm": 6, "Số lỗi vi phạm": 1, "Xếp hạng hiệu suất": "B" },
  { "Mã nhân viên": "018", "Tên": "Nguyễn Thị R", "Doanh số (Triệu VND)": 390, "Tỷ lệ hoàn thành (%)": 88, "Số giờ làm thêm": 15, "Số lỗi vi phạm": 1, "Xếp hạng hiệu suất": "B+" },
  { "Mã nhân viên": "019", "Tên": "Trần Văn S", "Doanh số (Triệu VND)": 550, "Tỷ lệ hoàn thành (%)": 97, "Số giờ làm thêm": 16, "Số lỗi vi phạm": 0, "Xếp hạng hiệu suất": "A+" },
  { "Mã nhân viên": "020", "Tên": "Hoàng Thị T", "Doanh số (Triệu VND)": 220, "Tỷ lệ hoàn thành (%)": 70, "Số giờ làm thêm": 5, "Số lỗi vi phạm": 5, "Xếp hạng hiệu suất": "C" },
  { "Mã nhân viên": "021", "Tên": "Phạm Văn U", "Doanh số (Triệu VND)": 480, "Tỷ lệ hoàn thành (%)": 93, "Số giờ làm thêm": 19, "Số lỗi vi phạm": 0, "Xếp hạng hiệu suất": "A" },
  { "Mã nhân viên": "022", "Tên": "Vũ Thị V", "Doanh số (Triệu VND)": 330, "Tỷ lệ hoàn thành (%)": 82, "Số giờ làm thêm": 7, "Số lỗi vi phạm": 2, "Xếp hạng hiệu suất": "B" },
  { "Mã nhân viên": "023", "Tên": "Đỗ Văn W", "Doanh số (Triệu VND)": 520, "Tỷ lệ hoàn thành (%)": 96, "Số giờ làm thêm": 12, "Số lỗi vi phạm": 0, "Xếp hạng hiệu suất": "A+" },
  { "Mã nhân viên": "024", "Tên": "Lý Thị X", "Doanh số (Triệu VND)": 300, "Tỷ lệ hoàn thành (%)": 85, "Số giờ làm thêm": 8, "Số lỗi vi phạm": 1, "Xếp hạng hiệu suất": "B" },
  { "Mã nhân viên": "025", "Tên": "Nguyễn Văn Y", "Doanh số (Triệu VND)": 450, "Tỷ lệ hoàn thành (%)": 89, "Số giờ làm thêm": 10, "Số lỗi vi phạm": 0, "Xếp hạng hiệu suất": "A" },
  { "Mã nhân viên": "026", "Tên": "Trần Thị Z", "Doanh số (Triệu VND)": 200, "Tỷ lệ hoàn thành (%)": 76, "Số giờ làm thêm": 2, "Số lỗi vi phạm": 4, "Xếp hạng hiệu suất": "C" },
  { "Mã nhân viên": "027", "Tên": "Phạm Văn AA", "Doanh số (Triệu VND)": 410, "Tỷ lệ hoàn thành (%)": 88, "Số giờ làm thêm": 11, "Số lỗi vi phạm": 1, "Xếp hạng hiệu suất": "B+" },
  { "Mã nhân viên": "028", "Tên": "Vũ Thị BB", "Doanh số (Triệu VND)": 540, "Tỷ lệ hoàn thành (%)": 94, "Số giờ làm thêm": 20, "Số lỗi vi phạm": 0, "Xếp hạng hiệu suất": "A+" },
  { "Mã nhân viên": "029", "Tên": "Đỗ Văn CC", "Doanh số (Triệu VND)": 370, "Tỷ lệ hoàn thành (%)": 83, "Số giờ làm thêm": 7, "Số lỗi vi phạm": 1, "Xếp hạng hiệu suất": "B" },
  { "Mã nhân viên": "030", "Tên": "Lý Thị DD", "Doanh số (Triệu VND)": 280, "Tỷ lệ hoàn thành (%)": 79, "Số giờ làm thêm": 3, "Số lỗi vi phạm": 2, "Xếp hạng hiệu suất": "C" }
];



const PersonalKPIDashBoardPage = () => {

  return (
    <Layout>

      <HeaderMenu />
      <LeftMenu />

      <DashboardContainer>

        <TableContainerHeaderButton style={{ gridColumn: "span 8", gridRow: "span 1" }} >
          <CreateOrderButton title="Tạo Đơn" link="/staff/createPersonalKPI" />
          <BreakButton style={{ gridColumn: "span 4", gridRow: "span 1" }} />
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

export default PersonalKPIDashBoardPage;
