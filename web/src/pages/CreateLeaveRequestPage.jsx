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

const CreateLeaveRequestPage = () => {
  const [upLoadData, setUpLoadData] = useState([]);
  const [formData, setFormData] = useState({
    creator: "",
    phoneNumber: "",
    gender: "",
    employeeCode: "",
    department: "",
    position: "",
    leaveStartDate: "",  // Ngày bắt đầu nghỉ
    leaveEndDate: "",    // Ngày kết thúc nghỉ
    reason: "",          // Lý do nghỉ
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

  const handleCreateLeaveRequest = async () => {
    try {
      console.log("🚀 Dữ liệu gửi đi:", formData);
      const response = await axios.post("http://localhost:3000/leave-request", formData, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Tạo đơn xin nghỉ phép thành công!");
    } catch (error) {
      console.error("Lỗi khi tạo đơn xin nghỉ phép:", error);
      alert("Có lỗi xảy ra khi tạo đơn xin nghỉ phép.");
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
          <CreateOrderButton onClick={handleCreateLeaveRequest} title="Tạo Đơn" />
          <CreateOrderButton title="Xem trước" link="/watchKpi" />

          <BreakButton style={{ gridColumn: "span 5", gridRow: "span 1" }} />
        </TableContainerHeaderButton>

        <TableContainerContent style={{ gridColumn: "span 8", gridRow: "span 6" }}>
          <FormField style={{ gridColumn: "span 8", gridRow: "span 1" }}>
            <KpiPerStaffStatusComponent currentStep={1} title={'Đơn xin nghỉ phép'} />
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
              title="Ngày Bắt Đầu Nghỉ:"
              value={formData.leaveStartDate}
              onChange={(e) => handleChange("leaveStartDate", e.target.value)}
              type="date"
            />
          </FormField>

          <FormField style={{ gridColumn: "span 2", gridRow: "span 1" }}>
            <InputfieldComponent
              title="Ngày Kết Thúc Nghỉ:"
              value={formData.leaveEndDate}
              onChange={(e) => handleChange("leaveEndDate", e.target.value)}
              type="date"
            />
          </FormField>

          <FormField style={{ gridColumn: "span 2", gridRow: "span 1" }}>
            <InputfieldComponent
              title="Lý Do Nghỉ:"
              value={formData.reason}
              onChange={(e) => handleChange("reason", e.target.value)}
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

export default CreateLeaveRequestPage;
