import React, { useState } from "react";
import axios from "axios";
import HeaderMenu from "../core/compoinents/assets/HeaderMenu.jsx";
import LeftMenu from "../core/compoinents/assets/LeftMenu.jsx";
import FormField from "../core/compoinents/assets/FormField.jsx";
import Layout from "../core/compoinents/assets/Layout.jsx";
import { BreakButton, DashboardContainer, TableContainerContent, TableContainerHeaderButton } from "../containers/DashboardContainer.jsx";
import KpiPerStaffStatusComponent from "../core/compoinents/assets/KpiPerStaffStatusComponent.jsx";
import { InputfieldComponent, SelectFieldComponent, InputDataFetchFieldComponent, DropdownListComponent } from "../core/compoinents/assets/FieldComponent.jsx";
import { CreateOrderButton } from "../core/compoinents/assets/Button.jsx";

const CreateTimeSheetRequestPage = () => {
  const [formData, setFormData] = useState({
    creator: "",
    phoneNumber: "",
    gender: "",
    employeeCode: "",
    department: "",
    position: "",
  });

  const handleChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleCreateOrder = async () => {
    try {
      console.log("🚀Dữ liệu gửi đi:", formData);
      const response = await axios.post("http://localhost:3000/staff", formData, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Tạo đơn thành công!");
    } catch (error) {
      console.error("Lỗi khi tạo đơn:", error);
      alert("Có lỗi xảy ra khi tạo đơn.  ");
    }
  };

  const data = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6"];

  return (
    <Layout>
      <HeaderMenu />
      <LeftMenu />
      <DashboardContainer>
        <TableContainerHeaderButton style={{ gridColumn: "span 8", gridRow: "span 1" }}>
          <CreateOrderButton onClick={handleCreateOrder} title="Tạo Đơn" />
          <CreateOrderButton title="Xem trước" />
          <BreakButton style={{ gridColumn: "span 5", gridRow: "span 1" }} />
        </TableContainerHeaderButton>

        <TableContainerContent style={{ gridColumn: "span 8", gridRow: "span 6" }}>
          <FormField style={{ gridColumn: "span 8", gridRow: "span 1" }}>
            <KpiPerStaffStatusComponent currentStep={1} title={'Bảng chấm công'} />
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
              title="Phòng Ban:"
              value={formData.department}
              onChange={(e) => handleChange("department", e.target.value)}
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
        </TableContainerContent>
      </DashboardContainer>
    </Layout>
  );
};

export default CreateTimeSheetRequestPage;
