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

const CreateAdvancePaymentRequest = () => {
  const [upLoadData, setUpLoadData] = useState([]);
  const [formData, setFormData] = useState({
    creator: "",
    phoneNumber: "",
    gender: "",
    employeeCode: "",
    department: "",
    position: "",
    advanceAmount: "",   // Số tiền yêu cầu tạm ứng
    purpose: "",         // Mục đích tạm ứng
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

  const handleCreateAdvancePaymentRequest = async () => {
    try {
      console.log("🚀 Dữ liệu gửi đi:", formData);
      const response = await axios.post("http://localhost:3000/advance-payment-request", formData, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Tạo đơn xin tạm ứng thành công!");
    } catch (error) {
      console.error("Lỗi khi tạo đơn xin tạm ứng:", error);
      alert("Có lỗi xảy ra khi tạo đơn xin tạm ứng.");
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
          <CreateOrderButton onClick={handleCreateAdvancePaymentRequest} title="Tạo Đơn" />
          <CreateOrderButton title="Xem trước" link="/watchKpi" />

          <BreakButton style={{ gridColumn: "span 5", gridRow: "span 1" }} />
        </TableContainerHeaderButton>

        <TableContainerContent style={{ gridColumn: "span 8", gridRow: "span 6" }}>
          <FormField style={{ gridColumn: "span 8", gridRow: "span 1" }}>
            <KpiPerStaffStatusComponent currentStep={1} title={'Đơn xin tạm ứng'} />
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
              title="Số Tiền Yêu Cầu Tạm Ứng:"
              value={formData.advanceAmount}
              onChange={(e) => handleChange("advanceAmount", e.target.value)}
              type="number"
            />
          </FormField>

          <FormField style={{ gridColumn: "span 2", gridRow: "span 1" }}>
            <InputfieldComponent
              title="Mục Đích Tạm Ứng:"
              value={formData.purpose}
              onChange={(e) => handleChange("purpose", e.target.value)}
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

export default CreateAdvancePaymentRequest;
