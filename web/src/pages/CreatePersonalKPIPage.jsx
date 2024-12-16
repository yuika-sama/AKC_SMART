import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderMenu from "../core/compoinents/assets/HeaderMenu.jsx";
import LeftMenu from "../core/compoinents/assets/LeftMenu.jsx";
import FormField from "../core/compoinents/assets/FormField.jsx";
import Layout from "../core/compoinents/assets/Layout.jsx";
import { BreakButton, DashboardContainer, TableContainerContent, TableContainerHeaderButton } from "../containers/DashboardContainer.jsx";
import KpiPerStaffStatusComponent from "../core/compoinents/assets/KpiPerStaffStatusComponent.jsx";
import { InputfieldComponent, RenderfieldComponent, SearchFieldComponent, SelectFieldComponent, DropdownListComponent, InputDataFetchFieldComponent } from "../core/compoinents/assets/FieldComponent.jsx";
import { CreateOrderButton, FileUploadButton } from "../core/compoinents/assets/Button.jsx";

const CreatePersonalKPIPage = () => {
  const [upLoadData, setUpLoadData] = useState([]);

  const handleFileChange = (data) => {
    setUpLoadData(data); // Set the parsed data in state
  };

  const [formData, setFormData] = useState({
    employeeCode: "",
    creator: "",
    phoneNumber: "",
    gender: "",
    department: "",
    position: "",
  })

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

  useEffect(() => {
    const newFormData = { ...formData };

    Object.keys(dataFetching).forEach((key) => {
      if (dataFetching[key]?.length > 0) {
        newFormData[key] = dataFetching[key][0];
      }
    });

    setFormData(newFormData);
  }, []);

  const handleCreateOrder = async () => {
    try {
      console.log("🚀 Dữ liệu gửi đi:", formData);
    } catch (error) {
      console.error("Lỗi khi tạo đơn:", error);
      alert("Có lỗi xảy ra khi tạo đơn.");
    }
  };

  const handleChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };


  return (
    <Layout>
      <HeaderMenu />
      <LeftMenu />
      <DashboardContainer>
        <TableContainerHeaderButton style={{ gridColumn: "span 8", gridRow: "span 1" }}>
          <CreateOrderButton onClick={handleCreateOrder} title="Tạo Đơn" />
          {/* <CreateOrderButton title="Xem trước" /> */}
          <BreakButton style={{ gridColumn: "span 5", gridRow: "span 1" }} />
        </TableContainerHeaderButton>

        <TableContainerContent style={{ gridColumn: "span 8", gridRow: "span 6" }}>
          <FormField style={{ gridColumn: "span 8", gridRow: "span 1" }}>
            <KpiPerStaffStatusComponent currentStep={1} title={'Tạo KPI cá nhân'} />
          </FormField>

          <FormField style={{ gridColumn: "span 2", gridRow: "span 1" }}>
            <InputDataFetchFieldComponent
              title="Mã nhân viên:"
              value={formData.employeeCode}
              onChange={(value) => handleChange("employeeCode", value)}
              dataFetching={dataFetching.employeeCode}
            />
          </FormField>

          <FormField style={{ gridColumn: "span 2", gridRow: "span 1" }}>
            <InputDataFetchFieldComponent
              title="Người Tạo:"
              value={formData.creator}
              onChange={(value) => handleChange("creator", value)}
              dataFetching={dataFetching.creator}
            />
          </FormField>

          <FormField style={{ gridColumn: "span 2", gridRow: "span 1" }}>
            <InputDataFetchFieldComponent
              title="Số Điện Thoại:"
              value={formData.phoneNumber}
              onChange={(value) => handleChange("phoneNumber", value)}
              dataFetching={dataFetching.phoneNumber}
            />
          </FormField>

          <FormField style={{ gridColumn: 'span 2', gridRow: 'span 3' }}>
            <FileUploadButton title="Tải file tại đây" onFileChange={handleFileChange} />
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
            <DropdownListComponent
              title="Phòng Ban:"
              data={dataFetching.department}
              value={formData.department}
              onChange={(value) => handleChange("department", value)}
            />
          </FormField>

          <FormField style={{ gridColumn: "span 2", gridRow: "span 1" }}>
            <DropdownListComponent
              title="Chức vụ:"
              data={dataFetching.position}
              value={formData.position}
              onChange={(value) => handleChange("position", value)}
            />
          </FormField>

          <FormField style={{ gridColumn: upLoadData.length ? 'span 8' : 'span 0', gridRow: upLoadData.length ? 'span 8' : 'span 0' }}>
            <RenderfieldComponent title="Danh Sách Bảng" data={upLoadData} />
          </FormField>
        </TableContainerContent>
      </DashboardContainer>
    </Layout>
  );
};

export default CreatePersonalKPIPage;