import React from "react";
import HeaderBar from "../core/compoinents/assets/HeaderBar.jsx";
import LeftMenu from "../core/compoinents/assets/LeftMenu";
import FormField from "../core/compoinents/assets/FormField.jsx";
import Layout from "../core/compoinents/assets/Layout";
import { BreakButton, DashboardContainer, TableContainerContent, TableContainerHeaderButton } from "../containers/DashboardContainer.jsx";
import KpiPerStaffStatusComponent from "../core/compoinents/assets/KpiPerStaffStatusComponent.jsx";
import { InputfieldComponent, SearchFieldComponent, SelectFieldComponent } from "../core/compoinents/assets/FieldComponent.jsx";
import { CreateOrderButton } from "../core/compoinents/assets/Button.jsx";

const DashboardPage = () => {
  return (
    <Layout>
      <HeaderBar userName="Yuika"/>
      <LeftMenu />
      <DashboardContainer>

        <TableContainerHeaderButton style={{ gridColumn: "span 8", gridRow: "span 1" }} >
          <CreateOrderButton title="Tạo Đơn" link="/create-order" />
          <BreakButton style={{ gridColumn: "span 5", gridRow: "span 1" }} />
          <FormField style={{ gridColumn: 'span 2 ', gridRow: 'span 1' }}>
            <SearchFieldComponent />
          </FormField>
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
            <SelectFieldComponent title="Giới tính" />
          </FormField>
        </TableContainerContent>
      </DashboardContainer>
    </Layout >
  );
};

export default DashboardPage;
