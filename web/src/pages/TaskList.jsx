import React, { useEffect, useState } from "react";
import HeaderBar from "../core/compoinents/assets/HeaderBar.jsx";
import LeftMenu from "../core/compoinents/assets/LeftMenu.jsx";
import FormField from "../core/compoinents/assets/FormField.jsx";
import Layout from "../core/compoinents/assets/Layout.jsx";
import { BreakButton, DashboardContainer, TableContainerContent, TableContainerHeaderButton } from "../containers/DashboardContainer.jsx";
import KpiPerStaffStatusComponent from "../core/compoinents/assets/KpiPerStaffStatusComponent.jsx";
import { InputfieldComponent, RenderfieldComponent, SearchFieldComponent, SelectFieldComponent } from "../core/compoinents/assets/FieldComponent.jsx";
import { CreateOrderButton, FileUploadButton } from "../core/compoinents/assets/Button.jsx";
import { Placeholder } from "semantic-ui-react";
import './css/TaskList.css'; 

const TaskList = () => {
  const taskData = [
    { "Tên công việc": 'Tên công việc 1', "Thời gian": '5 ngày', "Tiến độ": '50%', "Mô tả": 'Mô tả', "Ghi chú": 'Ghi chú' },
    { "Tên công việc": 'Tên công việc 2', "Thời gian": '1 tuần', "Tiến độ": '75%', "Mô tả": 'Mô tả', "Ghi chú": 'Ghi chú' },
    { "Tên công việc": 'Tên công việc 3', "Thời gian": '2 ngày', "Tiến độ": '10%', "Mô tả": 'Mô tả', "Ghi chú": 'Ghi chú' },
  ];

  return (
    <Layout>
      <HeaderBar userName="Yuika" />
      <LeftMenu />
      <DashboardContainer>
        <div className="task-list-container">
          <div className="table-header">
            <h2>Công việc</h2>
            <TableContainerHeaderButton style={{ gridColumn: "span 8", gridRow: "span 1" }}>
              <CreateOrderButton title="Thêm CV" link="/createTask"/>
              <BreakButton style={{ gridColumn: "span 5", gridRow: "span 1" }} />
              <FormField style={{ gridColumn: 'span 2 ', gridRow: 'span 1', }}>
                <SearchFieldComponent style={{ placeholder: 'Tìm kiếm' }} />
              </FormField>
            </TableContainerHeaderButton>

            <TableContainerContent style={{ gridColumn: "span 8", gridRow: "span 6" }}>
              <FormField
                style={{
                  gridColumn: "span 8",
                  gridRow:"span 7",
                  gridTemplateColumns: "repeat(8, 1fr)",
                }}
              >
                <RenderfieldComponent data={taskData} />
              </FormField>
            </TableContainerContent>
          </div>
        </div>
      </DashboardContainer>
    </Layout>
  );
};

export default TaskList;