import React from "react";
import HeaderMenu from "../core/compoinents/assets/HeaderMenu";
import LeftMenu from "../core/compoinents/assets/LeftMenu";
import FormField from "../core/compoinents/assets/FormField.jsx";
import Layout from "../core/compoinents/assets/Layout";
import { DashboardContainer } from "../containers/DashboardContainer.jsx";

const ExamplePage = () => {
  return (
    <Layout>
      <HeaderMenu />
      <LeftMenu />
      <DashboardContainer>
        <FormField style={{ gridColumn: 'span 2', gridRow: 'span 1' }}>Ô 1</FormField>
        <FormField style={{ gridColumn: 'span 1', gridRow: 'span 2' }}>Ô 2</FormField>
        <FormField style={{ gridColumn: 'span 1', gridRow: 'span 1' }}>Ô 3</FormField>
        <FormField style={{ gridColumn: 'span 1', gridRow: 'span 1' }}>Ô 4</FormField>
      </DashboardContainer>
    </Layout>
  );
};

export default ExamplePage;
