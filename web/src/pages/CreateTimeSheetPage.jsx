import React from "react";
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
  { column1: 'Row 1 - Col 1', column2: 'Row 1 - Col 2', column3: 'Row 1 - Col 3', column4: 'Row 1 - Col 4' },
  { column1: 'Row 2 - Col 1', column2: 'Row 2 - Col 2', column3: 'Row 2 - Col 3', column4: 'Row 2 - Col 4' },
  { column1: 'Row 3 - Col 1', column2: 'Row 3 - Col 2', column3: 'Row 3 - Col 3', column4: 'Row 3 - Col 4' },
  { column1: 'Row 4 - Col 1', column2: 'Row 4 - Col 2', column3: 'Row 4 - Col 3', column4: 'Row 4 - Col 4' },
  { column1: 'Row 4 - Col 1', column2: 'Row 4 - Col 2', column3: 'Row 4 - Col 3', column4: 'Row 4 - Col 4' },
  { column1: 'Row 4 - Col 1', column2: 'Row 4 - Col 2', column3: 'Row 4 - Col 3', column4: 'Row 4 - Col 4' },
  { column1: 'Row 4 - Col 1', column2: 'Row 4 - Col 2', column3: 'Row 4 - Col 3', column4: 'Row 4 - Col 4' },
  { column1: 'Row 4 - Col 1', column2: 'Row 4 - Col 2', column3: 'Row 4 - Col 3', column4: 'Row 4 - Col 4' },
  { column1: 'Row 4 - Col 1', column2: 'Row 4 - Col 2', column3: 'Row 4 - Col 3', column4: 'Row 4 - Col 4' },
  { column1: 'Row 4 - Col 1', column2: 'Row 4 - Col 2', column3: 'Row 4 - Col 3', column4: 'Row 4 - Col 4' },
  { column1: 'Row 4 - Col 1', column2: 'Row 4 - Col 2', column3: 'Row 4 - Col 3', column4: 'Row 4 - Col 4' },
  { column1: 'Row 4 - Col 1', column2: 'Row 4 - Col 2', column3: 'Row 4 - Col 3', column4: 'Row 4 - Col 4' },
  { column1: 'Row 4 - Col 1', column2: 'Row 4 - Col 2', column3: 'Row 4 - Col 3', column4: 'Row 4 - Col 4' },
  { column1: 'Row 4 - Col 1', column2: 'Row 4 - Col 2', column3: 'Row 4 - Col 3', column4: 'Row 4 - Col 4' },
  { column1: 'Row 4 - Col 1', column2: 'Row 4 - Col 2', column3: 'Row 4 - Col 3', column4: 'Row 4 - Col 4' },
  { column1: 'Row 4 - Col 1', column2: 'Row 4 - Col 2', column3: 'Row 4 - Col 3', column4: 'Row 4 - Col 4' },
  { column1: 'Row 4 - Col 1', column2: 'Row 4 - Col 2', column3: 'Row 4 - Col 3', column4: 'Row 4 - Col 4' },
  { column1: 'Row 4 - Col 1', column2: 'Row 4 - Col 2', column3: 'Row 4 - Col 3', column4: 'Row 4 - Col 4' },
  { column1: 'Row 4 - Col 1', column2: 'Row 4 - Col 2', column3: 'Row 4 - Col 3', column4: 'Row 4 - Col 4' },
  { column1: 'Row 4 - Col 1', column2: 'Row 4 - Col 2', column3: 'Row 4 - Col 3', column4: 'Row 4 - Col 4' },

];

const CreateTimeSheetPage = () => {
  return (
    <Layout>
      <HeaderMenu />
      <LeftMenu />
      <DashboardContainer>

        <TableContainerHeaderButton style={{ gridColumn: "span 8", gridRow: "span 1" }} >
          <CreateOrderButton title="Tạo Đơn" link="/createKpi" />
          <CreateOrderButton title="Xem trước" link="/watchKpi" />

          <BreakButton style={{ gridColumn: "span 5", gridRow: "span 1" }} />
          {/* <FormField style={{ gridColumn: 'span 2 ', gridRow: 'span 1', }}>
            <SearchFieldComponent style={{ placeholder: 'Tìm kiếm' }} />
          </FormField> */}
        </TableContainerHeaderButton>


        <TableContainerContent style={{ gridColumn: "span 8", gridRow: "span 6" }}>
          <FormField style={{ gridColumn: "span 8", gridRow: "span 1" }}>
            <KpiPerStaffStatusComponent />
          </FormField>

          <FormField style={{ gridColumn: 'span 2', gridRow: 'span 1' }}>
            <InputfieldComponent title="Người Tạo:" />
          </FormField>
          <FormField style={{ gridColumn: 'span 2', gridRow: 'span 1' }}>
            <InputfieldComponent title="Số Điện Thoại:" />
          </FormField>
          <FormField style={{ gridColumn: 'span 2', gridRow: 'span 1' }}>
            <SelectFieldComponent title="Giới tính" options={[{ label: 'Nam', value: 'male' }, { label: 'Nữ', value: 'female' },]} />
          </FormField>
          <FormField style={{ gridColumn: 'span 2', gridRow: 'span 3' }}>
            <FileUploadButton title="Tải file tại đây" />
          </FormField>
          <FormField style={{ gridColumn: 'span 2', gridRow: 'span 1' }}>
            <InputfieldComponent title="Mã nhân viên:" />
          </FormField>
          <FormField style={{ gridColumn: 'span 2', gridRow: 'span 1' }}>
            <InputfieldComponent title="Phòng Ban:" />
          </FormField>
          <FormField style={{ gridColumn: 'span 2', gridRow: 'span 1' }}>
            <InputfieldComponent title="Chức vụ:" />
          </FormField>

          <FormField style={{ gridColumn: 'span 8', gridRow: 'span 8' }}>
            <RenderfieldComponent title="Danh Sách Bảng" data={data} />
          </FormField>
        </TableContainerContent>
      </DashboardContainer>
    </Layout >
  );
};

export default CreateTimeSheetPage;
