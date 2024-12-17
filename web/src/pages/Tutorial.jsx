import React, { useEffect, useState } from "react";
import HeaderMenu from "../core/compoinents/assets/HeaderMenu.jsx";
import LeftMenu from "../core/compoinents/assets/LeftMenu.jsx";
import FormField from "../core/compoinents/assets/FormField.jsx";
import Layout from "../core/compoinents/assets/Layout.jsx";
import { BreakButton, DashboardContainer, TableContainerContent, TableContainerHeaderButton } from "../containers/DashboardContainer.jsx";
import KpiPerStaffStatusComponent from "../core/compoinents/assets/KpiPerStaffStatusComponent.jsx";
import { InputfieldComponent, RenderfieldComponent, SearchFieldComponent, SelectFieldComponent } from "../core/compoinents/assets/FieldComponent.jsx";
import { CreateOrderButton, FileUploadButton } from "../core/compoinents/assets/Button.jsx";
import { Placeholder } from "semantic-ui-react";

const Tutorial = () => {

  return (
    <Layout>
      <HeaderMenu />
      <LeftMenu />

      <DashboardContainer>

        <TableContainerHeaderButton style={{ gridColumn: "span 8", gridRow: "span 1" }} >
          <FormField style={{ gridColumn: 'span 2', gridRow: 'span 1' }}>
            <h1 style={{ textAlign: "left", fontSize: "25px" }}>Hướng dẫn chấm công</h1>
          </FormField>
        </TableContainerHeaderButton>

        <TableContainerContent style={{ gridColumn: "span 8", gridRow: "span 6" }}>
          <FormField style={{ gridColumn: 'span 8', gridRow: 'span 2', textAlign: "left", fontSize: "20px", fontWeight: '600' }}>
          </FormField>

          <FormField style={{ gridColumn: 'span 8', gridRow: 'span 1', textAlign: "left", fontSize: "20px" }}>
            Bước 1: Đăng nhập vào hệ thống
            <br />
            <br />

            Trước tiên, bạn cần đăng nhập vào hệ thống bằng tài khoản đã được cấp. Sau khi đăng nhập thành công, bạn sẽ được chuyển đến trang chủ của hệ thống.
            <br />
            Bước 2: Chọn "Chấm công"
            <br />
            <br />
            Từ menu bên trái, bạn chọn mục "Chấm công" để vào trang chấm công. Trên trang này, bạn sẽ thấy thông tin về thời gian làm việc của mình.
            Bước 3: Xác nhận thời gian làm việc
            <br />
            <br />
            Bạn cần chọn ngày làm việc và thời gian bắt đầu, kết thúc ca làm việc. Hãy chắc chắn rằng các thông tin này là chính xác để tránh sai sót trong việc tính lương.
            <br />
            <br />

            Bước 4: Nhấn "Xác nhận"
            <br />
            <br />
            Sau khi bạn kiểm tra lại tất cả thông tin, nhấn vào nút "Xác nhận" để hoàn tất quá trình chấm công.
          </FormField>

        </TableContainerContent>
      </DashboardContainer>
    </Layout>
  );
};

export default Tutorial;
