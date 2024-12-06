import React, { useState } from "react";
import HeaderBar from "../core/compoinents/assets/HeaderBar.jsx";
import LeftMenu from "../core/compoinents/assets/LeftMenu.jsx";
import FormField from "../core/compoinents/assets/FormField.jsx";
import Layout from "../core/compoinents/assets/Layout.jsx";
import {
  BreakButton,
  DashboardContainer,
  TableContainerContent,
  TableContainerHeaderButton
} from "../containers/DashboardContainer.jsx";
import {
  InputfieldComponent,
  RenderfieldComponent,
  SearchFieldComponent
} from "../core/compoinents/assets/FieldComponent.jsx";
import { CreateOrderButton, SimpleButton } from "../core/compoinents/assets/Button.jsx";
import './css/TaskList.css';

const TaskList = () => {
  const [taskData, setTaskData] = useState([
    { "Tên công việc": 'Tên công việc 1', "Thời gian": '5 ngày', "Tiến độ": '50%', "Mô tả": 'Mô tả', "Ghi chú": 'Ghi chú' },
    { "Tên công việc": 'Tên công việc 2', "Thời gian": '1 tuần', "Tiến độ": '75%', "Mô tả": 'Mô tả', "Ghi chú": 'Ghi chú' },
  ]);

  const [isAddingTask, setIsAddingTask] = useState(false);
  const [newTask, setNewTask] = useState({
    "Tên công việc": "",
    "Thời gian": "",
    "Tiến độ": "",
    "Mô tả": "",
    "Ghi chú": "",
  });

  // State cho dropdown filter
  const [showFilter, setShowFilter] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    "Tên công việc": false,
    "Thời gian": false,
    "Tiến độ": false,
    "Mô tả": false,
    "Ghi chú": false,
  });

  const handleAddTask = () => {
    setIsAddingTask(true);
  };

  const handleCancelAddTask = () => {
    setIsAddingTask(false);
    setNewTask({ "Tên công việc": "", "Thời gian": "", "Tiến độ": "", "Mô tả": "", "Ghi chú": "" });
  };

  const formatTime = (time) => {
    const timeInDays = parseInt(time, 10);
    if (isNaN(timeInDays) || timeInDays <= 0) return "";

    let years = Math.floor(timeInDays / 365);
    let months = Math.floor((timeInDays % 365) / 30);
    let days = timeInDays % 30;

    let formattedTime = '';
    if (years > 0) formattedTime += `${years} năm `;
    if (months > 0) formattedTime += `${months} tháng `;
    if (days > 0 || formattedTime === '') formattedTime += `${days} ngày`;

    return formattedTime.trim();
  };

  const handleConfirmAddTask = () => {
    // Kiểm tra các trường bắt buộc không trống
    if (!newTask["Tên công việc"] || !newTask["Thời gian"] || !newTask["Tiến độ"] || !newTask["Mô tả"]) {
      alert("Vui lòng nhập đầy đủ các thông tin bắt buộc.");
      return;
    }

    // Chuyển và định dạng thời gian
    const formattedTime = formatTime(newTask["Thời gian"]);
    if (!formattedTime) {
      alert("Thời gian phải là một số hợp lệ.");
      return;
    }

    // Kiểm tra tiến độ hợp lệ
    const progress = parseFloat(newTask["Tiến độ"]);
    if (isNaN(progress) || progress < 0 || progress > 100) {
      alert("Tiến độ phải là một số từ 0 đến 100.");
      return;
    }
    newTask["Tiến độ"] = `${progress}%`;

    // Thêm công việc vào dữ liệu và sắp xếp
    setTaskData((prevData) => {
      const updatedData = [...prevData, { ...newTask, "Thời gian": formattedTime }];
      updatedData.sort((a, b) => a["Tên công việc"].localeCompare(b["Tên công việc"]));
      return updatedData;
    });

    handleCancelAddTask();
  };

  // Hàm xử lý khi click vào nút "Lọc theo"
  const handleFilterClick = () => {
    setShowFilter(!showFilter);
  };

  // Hàm xử lý khi thay đổi lựa chọn trong dropdown filter
  const handleFilterChange = (option) => {
    setFilterOptions({
      ...filterOptions,
      [option]: !filterOptions[option],
    });
  };

  // Hàm lọc dữ liệu dựa trên filterOptions
  const filterData = () => {
    let filteredData = [...taskData];
    for (const option in filterOptions) {
      if (filterOptions[option]) {
        filteredData = filteredData.map((item) => ({
          ...item,
          [option]: item[option].toString() // Chuyển đổi giá trị thành chuỗi để so sánh
        }));
      }
    }
    return filteredData;
  };

  return (
    <Layout>
      <HeaderBar userName="Yuika" />
      <LeftMenu />
      <DashboardContainer>
        <div className="task-list-container">
          <div className="table-header">
            <h2>Công việc</h2>
            <TableContainerHeaderButton style={{ gridColumn: "span 8", gridRow: "span 1" }}>
              <SimpleButton title="Thêm CV" onClick={handleAddTask} />
              {/* Nút "Lọc theo" với dropdown */}
              <div className="filter-dropdown">
                <SimpleButton title="Lọc theo" onClick={handleFilterClick} />
                {showFilter && (
                  <ul className="filter-options">
                    {Object.keys(filterOptions).map((option) => (
                      <li key={option}>
                        <input
                          type="checkbox"
                          id={option}
                          checked={filterOptions[option]}
                          onChange={() => handleFilterChange(option)}
                        />
                        <label htmlFor={option}>{option}</label>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <BreakButton style={{ gridColumn: "span 4", gridRow: "span 1" }} />
              <SearchFieldComponent style={{ gridColumn: "span 2" }} placeholder="Tìm kiếm theo tên" data={data} searchBy="Tên" />
            </TableContainerHeaderButton>

            <TableContainerContent style={{ gridColumn: "span 8", gridRow: "span 6" }}>
              {isAddingTask && (
                <div className="add-task-form">
                  <input
                    type="text"
                    placeholder="Tên công việc"
                    value={newTask["Tên công việc"]}
                    onChange={(e) => setNewTask({ ...newTask, "Tên công việc": e.target.value })}
                  />
                  <input
                    type="number"
                    placeholder="Thời gian (dạng số)"
                    value={newTask["Thời gian"]}
                    onChange={(e) => setNewTask({ ...newTask, "Thời gian": e.target.value })}
                  />
                  <input
                    type="number"
                    placeholder="Tiến độ (%)"
                    value={newTask["Tiến độ"]}
                    onChange={(e) => setNewTask({ ...newTask, "Tiến độ": e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Mô tả"
                    value={newTask["Mô tả"]}
                    onChange={(e) => setNewTask({ ...newTask, "Mô tả": e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Ghi chú"
                    value={newTask["Ghi chú"]}
                    onChange={(e) => setNewTask({ ...newTask, "Ghi chú": e.target.value })}
                  />
                  <div className="form-buttons">
                    <button className="confirm" onClick={handleConfirmAddTask}>Xác nhận</button>
                    <button className="cancel" onClick={handleCancelAddTask}>Hủy</button>
                  </div>
                </div>
              )}
              <FormField
                style={{
                  gridColumn: "span 8",
                  gridRow: "span 6",
                  gridTemplateColumns: "repeat(8, 1fr)",
                }}>
                {/* Truyền dữ liệu đã được lọc vào RenderfieldComponent */}
                <RenderfieldComponent data={filterData()} />
              </FormField>
            </TableContainerContent>
          </div>
        </div>
      </DashboardContainer>
    </Layout>
  );
};

export default TaskList;