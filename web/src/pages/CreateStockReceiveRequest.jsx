import React, { useState } from "react";
import HeaderMenu from "../core/compoinents/assets/HeaderMenu.jsx";
import LeftMenu from "../core/compoinents/assets/LeftMenu.jsx";
import FormField from "../core/compoinents/assets/FormField.jsx";
import Layout from "../core/compoinents/assets/Layout.jsx";
import { BreakButton, DashboardContainer, TableContainerContent, TableContainerHeaderButton } from "../containers/DashboardContainer.jsx";
import KpiPerStaffStatusComponent from "../core/compoinents/assets/KpiPerStaffStatusComponent.jsx";
import { InputfieldComponent, RenderfieldComponent, SearchFieldComponent, SelectFieldComponent, DropdownListComponent } from "../core/compoinents/assets/FieldComponent.jsx";
import AllFileUploadButton, { CreateOrderButton } from "../core/compoinents/assets/Button.jsx";
import { InputDataFetchFieldComponent } from "../core/compoinents/assets/FieldComponent.jsx";
import axios from "axios";

// Dữ liệu mẫu cho yêu cầu nhập kho
const stockRequestData = [
  { "Mã hàng": "001", "Tên hàng": "Máy tính", "Ngày yêu cầu": "2024-12-10", "Số lượng yêu cầu": 50, "Lý do": "Nhập kho cho dự án A", "Trạng thái": "Chờ duyệt" },
  { "Mã hàng": "002", "Tên hàng": "Bàn làm việc", "Ngày yêu cầu": "2024-12-12", "Số lượng yêu cầu": 20, "Lý do": "Nhập kho để thay mới", "Trạng thái": "Chờ duyệt" },
  { "Mã hàng": "003", "Tên hàng": "Ghế xoay", "Ngày yêu cầu": "2024-12-09", "Số lượng yêu cầu": 30, "Lý do": "Cung cấp cho văn phòng mới", "Trạng thái": "Đã duyệt" },
  { "Mã hàng": "004", "Tên hàng": "Máy chiếu", "Ngày yêu cầu": "2024-12-15", "Số lượng yêu cầu": 10, "Lý do": "Nhập kho phục vụ hội thảo", "Trạng thái": "Đã duyệt" },
  { "Mã hàng": "005", "Tên hàng": "Màn hình", "Ngày yêu cầu": "2024-12-14", "Số lượng yêu cầu": 15, "Lý do": "Nhập kho thay thế cũ", "Trạng thái": "Chờ duyệt" },
  { "Mã hàng": "006", "Tên hàng": "Máy in", "Ngày yêu cầu": "2024-12-13", "Số lượng yêu cầu": 5, "Lý do": "Cung cấp cho phòng làm việc", "Trạng thái": "Đã duyệt" },
  { "Mã hàng": "007", "Tên hàng": "Máy chiếu", "Ngày yêu cầu": "2024-12-16", "Số lượng yêu cầu": 12, "Lý do": "Nhập kho phục vụ sự kiện", "Trạng thái": "Đã duyệt" },
  { "Mã hàng": "008", "Tên hàng": "Bàn ghế văn phòng", "Ngày yêu cầu": "2024-12-17", "Số lượng yêu cầu": 8, "Lý do": "Nhập kho phục vụ văn phòng mới", "Trạng thái": "Chờ duyệt" }
];

const CreateStockReceiveRequest = () => {
  const [upLoadData, setUpLoadData] = useState([]);
  const [formData, setFormData] = useState({
    itemCode: "",
    itemName: "",
    requestDate: "",
    quantity: "",
    reason: "",
    status: "",
    employeeCode: "",
    department: "",
    position: "",
  });

  const handleFileChange = (data) => {
    setUpLoadData(data);
  };

  const handleChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleCreateStockRequest = async () => {
    try {
      console.log("🚀 Dữ liệu gửi đi:", formData);
      const response = await axios.post("http://localhost:3000/stock-receive-request", formData, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Tạo yêu cầu nhập kho thành công!");
    } catch (error) {
      console.error("Lỗi khi tạo yêu cầu nhập kho:", error);
      alert("Có lỗi xảy ra khi tạo yêu cầu nhập kho.");
    }
  };

  const stockTypes = ["Nhập kho", "Xuất kho"];
  const dataDepartment = ['Thực tập sinh', 'Nhân Viên', 'Trưởng phòng', 'Giám đốc'];
  const data = ['Nhân Viên', 'Trưởng phòng', 'Giám đốc'];

  return (
    <Layout>

      <HeaderMenu />
      <LeftMenu />

      <DashboardContainer>

        <TableContainerHeaderButton style={{ gridColumn: "span 8", gridRow: "span 1" }} >
          <CreateOrderButton onClick={handleCreateStockRequest} title="Tạo đơn" />
          <BreakButton style={{ gridColumn: "span 5", gridRow: "span 1" }} />
          <SearchFieldComponent style={{ gridColumn: "span 2" }} placeholder="Tìm kiếm theo tên hàng" data={stockRequestData} searchBy="Tên hàng" />
        </TableContainerHeaderButton>

        <TableContainerContent style={{ gridColumn: "span 8", gridRow: "span 6" }}>
          <FormField style={{ gridColumn: "span 8", gridRow: "span 1" }}>
            <KpiPerStaffStatusComponent currentStep={1} title={'Yêu Cầu Nhập Kho'} />
          </FormField>

          <FormField style={{ gridColumn: "span 3", gridRow: "span 1" }}>
            <InputfieldComponent
              title="Mã Hàng:"
              value={formData.itemCode}
              onChange={(e) => handleChange("itemCode", e.target.value)}
            />
          </FormField>

          <FormField style={{ gridColumn: "span 3", gridRow: "span 1" }}>
            <InputfieldComponent
              title="Tên Hàng:"
              value={formData.itemName}
              onChange={(e) => handleChange("itemName", e.target.value)}
            />
          </FormField>

          <FormField style={{ gridColumn: "span 2", gridRow: "span 1" }}>
            <InputfieldComponent
              title="Ngày Yêu Cầu:"
              value={formData.requestDate}
              onChange={(e) => handleChange("requestDate", e.target.value)}
              type="date"
            />
          </FormField>

          <FormField style={{ gridColumn: "span 2", gridRow: "span 1" }}>
            <InputfieldComponent
              title="Số Lượng Yêu Cầu:"
              value={formData.quantity}
              onChange={(e) => handleChange("quantity", e.target.value)}
              type="number"
            />
          </FormField>

          <FormField style={{ gridColumn: "span 3", gridRow: "span 1" }}>
            <InputfieldComponent
              title="Lý Do Yêu Cầu:"
              value={formData.reason}
              onChange={(e) => handleChange("reason", e.target.value)}
            />
          </FormField>

          <FormField style={{ gridColumn: "span 3", gridRow: "span 1" }}>
            <SelectFieldComponent
              title="Trạng Thái"
              options={[
                { label: "Chờ duyệt", value: "Chờ duyệt" },
                { label: "Đã duyệt", value: "Đã duyệt" }
              ]}
              value={formData.status}
              onChange={(selectedValue) => handleChange("status", selectedValue)}
            />
          </FormField>

          <FormField style={{ gridColumn: "span 2", gridRow: "span 1" }}>
            <InputDataFetchFieldComponent
              title="Mã nhân viên:"
              value={formData.employeeCode}
              onChange={(value) => handleChange("employeeCode", value)}
              dataFetching={["NHMK&^%$"]}
            />
          </FormField>

          <FormField style={{ gridColumn: "span 2", gridRow: "span 1" }}>
            <DropdownListComponent
              title="Phòng Ban:"
              data={dataDepartment}
              value={formData.department}
              onChange={(value) => handleChange("department", value)}
            />
          </FormField>

          <FormField style={{ gridColumn: "span 2", gridRow: "span 1" }}>
            <DropdownListComponent
              title="Chức Vụ:"
              data={data}
              value={formData.position}
              onChange={(value) => handleChange("position", value)}
            />
          </FormField>

          <FormField style={{ gridColumn: 'span 2', gridRow: 'span 3' }}>
            <AllFileUploadButton title="Tải file tại đây" onFileChange={handleFileChange} />
          </FormField>

          <FormField style={{ gridColumn: upLoadData.length ? 'span 8' : 'span 0', gridRow: upLoadData.length ? 'span 8' : 'span 0' }}>
            <RenderfieldComponent title="Danh Sách Bảng" data={upLoadData} />
          </FormField>
        </TableContainerContent>
      </DashboardContainer>
    </Layout>
  );
};

export default CreateStockReceiveRequest;
