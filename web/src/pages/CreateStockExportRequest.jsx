import React, { useEffect, useState } from "react";
import HeaderMenu from "../core/compoinents/assets/HeaderMenu.jsx";
import LeftMenu from "../core/compoinents/assets/LeftMenu.jsx";
import FormField from "../core/compoinents/assets/FormField.jsx";
import Layout from "../core/compoinents/assets/Layout.jsx";
import { BreakButton, DashboardContainer, TableContainerContent, TableContainerHeaderButton } from "../containers/DashboardContainer.jsx";
import KpiPerStaffStatusComponent from "../core/compoinents/assets/KpiPerStaffStatusComponent.jsx";
import { InputfieldComponent, RenderfieldComponent, SearchFieldComponent, SelectFieldComponent, DropdownListComponent, InputDataFetchFieldComponent } from "../core/compoinents/assets/FieldComponent.jsx";
import AllFileUploadButton, { CreateOrderButton, FileUploadButton } from "../core/compoinents/assets/Button.jsx";
import { Placeholder } from "semantic-ui-react";
import axios from "axios";

const CreateStockExportRequest = () => {
  const [upLoadData, setUpLoadData] = useState([]);
  const [formData, setFormData] = useState({
    creator: "",
    phoneNumber: "",
    gender: "",
    employeeCode: "",
    department: "",
    position: "",
    refundAmount: "",
    purpose: "",
    refundDate: "",
  });

  const data0000 = {
    employeeCode: "NHMK&^%$",
    creator: "Vũ Lệnh Hiệp",
    phoneNumber: "0869561191",
    gender: "male",
    department: ["Option 1", "Option 2", "Option 3", "Option 4"],
    position: ["Option 1", "Option 2", "Option 3"],
  }

  const dataFetching = {
    employeeCode: [data0000.employeeCode],
    creator: ["Vũ Lệnh Hiệp"],
    phoneNumber: ["0869561191"],
    gender: ["male"],
    department: ["Option 1", "Option 2", "Option 3", "Option 4"],
    position: ["Option 1", "Option 2", "Option 3"],
  };


  const handleFileChange = (data) => {
    setUpLoadData(data);
  };

  const handleChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleCreateRefundRequest = async () => {
    try {
      console.log("🚀 Dữ liệu gửi đi:", formData);
      const response = await axios.post("http://localhost:3000/refund-request", formData, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Tạo đơn xin hoàn ứng thành công!");
    } catch (error) {
      console.error("Lỗi khi tạo đơn xin hoàn ứng:", error);
      alert("Có lỗi xảy ra khi tạo đơn xin hoàn ứng.");
    }
  };

  const data = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'];
  const dataDepartment = ['Thực tập sinh', 'Nhân Viên', 'Trưởng phòng', 'Giám đốc'];

  return (
    <Layout>

      <HeaderMenu />
      <LeftMenu />

      <DashboardContainer>

        <TableContainerHeaderButton style={{ gridColumn: "span 8", gridRow: "span 1" }} >
          <CreateOrderButton onClick={handleCreateRefundRequest} title="Tạo Đơn Xin Hoàn Ứng" />
          <CreateOrderButton title="Xem trước" link="/watchKpi" />

          <BreakButton style={{ gridColumn: "span 5", gridRow: "span 1" }} />
        </TableContainerHeaderButton>

        <TableContainerContent style={{ gridColumn: "span 8", gridRow: "span 6" }}>
          <FormField style={{ gridColumn: "span 8", gridRow: "span 1" }}>
            <KpiPerStaffStatusComponent currentStep={1} title={'Đơn xin hoàn ứng'} />
          </FormField>

          <FormField style={{ gridColumn: "span 2", gridRow: "span 1" }}>
            <InputfieldComponent
              title="Người Tạo:"
              value={formData.creator}
              onChange={(e) => handleChange("creator", e.target.value)}
            />
          </FormField>

          <FormField style={{ gridColumn: "span 2", gridRow: "span 1" }}>
            <InputfieldComponent
              title="Số Điện Thoại:"
              value={formData.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
            />
          </FormField>

          <FormField style={{ gridColumn: "span 2", gridRow: "span 1" }}>
            <SelectFieldComponent
              title="Giới tính"
              options={[
                { label: "Nam", value: "male" },
                { label: "Nữ", value: "female" },
              ]}
              value={formData.gender}
              onChange={(selectedValue) => handleChange("gender", selectedValue)}
            />
          </FormField>

          <FormField style={{ gridColumn: "span 2", gridRow: "span 1" }}>
            <InputfieldComponent
              title="Số Tiền Yêu Cầu Hoàn Ứng:"
              value={formData.refundAmount}
              onChange={(e) => handleChange("refundAmount", e.target.value)}
              type="number"
            />
          </FormField>

          <FormField style={{ gridColumn: "span 2", gridRow: "span 1" }}>
            <InputfieldComponent
              title="Mục Đích Hoàn Ứng:"
              value={formData.purpose}
              onChange={(e) => handleChange("purpose", e.target.value)}
            />
          </FormField>

          <FormField style={{ gridColumn: "span 2", gridRow: "span 1" }}>
            <InputfieldComponent
              title="Ngày Hoàn Ứng:"
              value={formData.refundDate}
              onChange={(e) => handleChange("refundDate", e.target.value)}
              type="date"
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

          <FormField style={{ gridColumn: 'span 2', gridRow: 'span 3' }}>
            <AllFileUploadButton title="Tải file tại đây" onFileChange={handleFileChange} />
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
              title="Chức vụ:"
              data={data}
              value={formData.position}
              onChange={(value) => handleChange("position", value)}
            />
          </FormField>

          <FormField style={{ gridColumn: upLoadData.length ? 'span 8' : 'span 0', gridRow: upLoadData.length ? 'span 8' : 'span 0' }}>
            <RenderfieldComponent title="Danh Sách Bảng" data={upLoadData} />
          </FormField>
        </TableContainerContent>
      </DashboardContainer>
    </Layout >
  );
};

export default CreateStockExportRequest
  ;
