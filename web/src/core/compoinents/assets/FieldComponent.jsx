import React, { useState, useEffect } from 'react';
import { Input, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { IoMdCheckmark } from 'react-icons/io';
import { FaPlus, MdDeleteOutline } from "react-icons/fa";
import { IoMdTrash } from 'react-icons/io';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import debounce from "lodash/debounce";
import { DatePicker } from "antd"; // Import DatePicker từ Ant Design
import moment from "moment"; // Import thư viện moment để xử lý ngày tháng
import '../css/inputfield.css';

const InputfieldComponent = ({ title, value, onChange }) => {
  return (
    <div className="input-field-component">
      <div className="input-field-title">{title}</div>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

const InputDataFetchFieldComponent = ({ title, value, onChange, dataFetching }) => {
  const [isReadOnly, setIsReadOnly] = useState(true);

  useEffect(() => {
    if (dataFetching && dataFetching.length > 0) {
      setIsReadOnly(true);
    } else {
      setIsReadOnly(false);
    }
  }, [dataFetching]);

  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="input-field-component">
      <div className="input-field-title">{title}</div>
      <Input
        value={value || (isReadOnly ? dataFetching : '')}
        loading={false}
        style={{ width: '100%', height: '40px' }}
        onChange={handleInputChange}
        readOnly={isReadOnly}
      />
      {!dataFetching && !isReadOnly && (
        <div className="input-warning"> </div>
      )}
    </div>
  );
};

const DateFieldComponent = ({ title, value, onChange, dataFetching }) => {
  const [isReadOnly, setIsReadOnly] = useState(true);

  useEffect(() => {
    if (dataFetching && dataFetching.length > 0) {
      setIsReadOnly(true); // Đặt readonly nếu có dữ liệu fetching
    } else {
      setIsReadOnly(false); // Nếu không có dữ liệu fetching, cho phép chỉnh sửa
    }
  }, [dataFetching]);

  const handleDateChange = (date, dateString) => {
    onChange(dateString); // Khi người dùng chọn ngày, gọi onChange với giá trị ngày dạng chuỗi
  };

  return (
    <div className="date-field-component">
      <div className="date-field-title">{title}</div>
      <DatePicker
        value={value ? moment(value, "DD/MM/YYYY") : null} // Chuyển đổi giá trị sang dạng moment
        onChange={handleDateChange}
        style={{ width: "100%", height: "40px" }}
        disabled={isReadOnly} // Đặt readonly nếu có dữ liệu fetching
      />
      {!dataFetching && !isReadOnly && (
        <div className="input-warning">Vui lòng chọn ngày</div>
      )}
    </div>
  );
};

const SearchFieldComponent = ({ style = {}, placeholder, data, searchBy }) => {

  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const fetchData = async (query) => {
    if (!query.trim()) {
      return [];
    }
    const filteredData = data.filter(item =>
      item[searchBy] && item[searchBy].toString().toLowerCase().includes(query.toLowerCase())
    );
    return filteredData;
  };

  const handleSearch = debounce(async (value) => {
    if (value.trim()) {
      const data = await fetchData(value);
      setResults(data);
      setIsDropdownVisible(true);
    } else {
      setResults([]);
      setIsDropdownVisible(false);
    }
  }, 700);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    handleSearch(value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".search-field-component")) {
        setIsDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="search-field-component" style={style}>
      <Input
        placeholder={placeholder}
        value={searchValue}
        onChange={handleInputChange}
        style={{ width: "100%" }}
      />
      {isDropdownVisible && results.length > 0 && (
        <div className="dropdown">
          {results.map((item, index) => (
            <div key={index} className="dropdown-item">
              {item[searchBy] || "Không có dữ liệu"}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const DropdownListComponent = ({ style, title, data = [], onChange }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="dropdown-list-component" style={style}>
      <div className="dropdown-list-title">{title}</div>
      <select
        value={selectedValue}
        onChange={handleChange}
        className="ui dropdown"
        style={{
          width: "100%",
          height: "40px",
          maxHeight: "150px",
          overflowY: "auto",
        }}
      >
        <option style={{ opacity: "70%" }} value="" disabled>
          {title} {/* Placeholder text */}
        </option>
        {data.length > 0 ? (
          data.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No options available
          </option>
        )}
      </select>
    </div>
  );
};

const SelectFieldComponent = ({ title, options, onChange, value }) => {
  const [isReadOnly, setIsReadOnly] = useState(true);


  return (
    <div className='select-field-component'>
      <div className='select-field-title'>{title}</div>
      <div style={{ display: 'flex', gap: '20px' }}>
        {options.map((option) => (
          <label
            key={option.value}
            className="select-field-label"
          >
            <input
              type="radio"
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

const RenderfieldComponent = ({ title, data, option }) => {
  const rowsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const resetLoading = () => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  };

  useEffect(() => {
    resetLoading();
  }, [currentPage]);

  if (!data || data.length === 0) return null;

  const columns = Object.keys(data[0]);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentPageData = data.slice(startIndex, startIndex + rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='render-field-component'>
      {title && (
        <div className='render-field-component-header'>
          <div className='render-field-title'>{title}</div>
        </div>
      )}
      <div className='render-field-component-content'>
        <div className='render-field-render-content-title'>
          <table style={{ width: '100%', height: '100%' }}>
            <thead>
              <tr>
                {columns.map((col, index) => (
                  <th
                    style={{ backgroundColor: '#c9c9c9', borderRadius: '20px' }}
                    key={index}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
          </table>
        </div>

        <div className='render-field-render-content-body'>
          {loading ? (
            <div className="ui active dimmer" style={{ backgroundColor: '#ffffff' }}>
              <div className="ui text loader" style={{
                color: '#0b1629',
                width: '100%',
                height: '80%'
              }} />
              <div style={{ color: '#c9c9c9', textAlign: 'center' }} > --- Loading</div>
            </div>
          ) : (
            <table>
              <tbody>
                {currentPageData.map((item, index) => (
                  <tr key={index}>
                    {columns.map((col, colIndex) => (
                      <td key={colIndex}>
                        {col === option ? (
                          <Link
                            to={`/watch/${item[col]}`}
                            style={{ fontFamily: 'Nunito-Regular', color: '#4176da', fontWeight: 'bold' }}
                          >
                            {item[col]}
                          </Link>
                        ) : (
                          item[col]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <div className='render-field-render-content-footer'>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          style={{ marginRight: '2%', marginTop: '0.5%' }}
        >
          <i className="angle left icon"></i>
        </button>
        <span style={{ marginRight: '1%', marginTop: '0.5%' }}>
          1....
          <span style={{ textDecoration: 'underline' }}>{currentPage}</span>
          ....{totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          style={{ marginRight: '1%', marginTop: '0.5%' }}
        >
          <i className="angle right icon"></i>
        </button>
      </div>
    </div>
  );
};

const AproveRenderfieldComponent = ({ title, data, option }) => {
  const rowsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedItems, setSelectedItems] = useState({});

  const resetLoading = () => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  };

  useEffect(() => {
    resetLoading();
  }, [currentPage]);

  if (!data || data.length === 0) return null;

  const columns = Object.keys(data[0]);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentPageData = data.slice(startIndex, startIndex + rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSelectItem = (itemId) => {
    setSelectedItems(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId] // Chọn hoặc bỏ chọn item tùy theo trạng thái hiện tại
    }));
  };

  // Xử lý chọn tất cả các items trên trang hiện tại
  const handleSelectAll = () => {
    const allItemIds = currentPageData.map(item => item["Mã nhân viên"]);
    const allSelected = allItemIds.every(id => selectedItems[id]);
    if (allSelected) {
      // Nếu tất cả đã được chọn, bỏ chọn tất cả
      setSelectedItems({});
    } else {
      // Nếu không, chọn tất cả các item
      const newSelectedItems = allItemIds.reduce((acc, id) => {
        acc[id] = true;
        return acc;
      }, {});
      setSelectedItems(newSelectedItems);
    }
  };

  return (
    <div className='render-field-component'>
      {title && (
        <div className='render-field-component-header'>
          <div className='render-field-title'>{title}</div>
        </div>
      )}
      <div className='render-field-component-content'>
        <div className='render-field-render-content-title'>
          <table style={{ width: '100%', height: '100%' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: '#c9c9c9', borderRadius: '20px' }}>
                  <input
                    type="checkbox"
                    checked={currentPageData.every(item => selectedItems[item["Mã nhân viên"]])} // Kiểm tra xem tất cả các item trong trang hiện tại đã được chọn chưa
                    onChange={handleSelectAll} // Khi nhấn vào checkbox này, chọn/deselect tất cả
                  />
                </th>
                {columns.map((col, index) => (
                  <th
                    style={{ backgroundColor: '#c9c9c9', borderRadius: '20px' }}
                    key={index}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
          </table>
        </div>

        <div className='render-field-render-content-body'>
          {loading ? (
            <div className="ui active dimmer" style={{ backgroundColor: '#ffffff' }}>
              <div className="ui text loader" style={{
                color: '#0b1629',
                width: '100%',
                height: '80%'
              }} />
              <div style={{ color: '#c9c9c9', textAlign: 'center' }} > --- Loading</div>
            </div>
          ) : (
            <table>
              <tbody>
                {currentPageData.map((item, index) => (
                  <tr key={index}>
                    <td style={{ textAlign: 'center' }}>
                      <input
                        type="checkbox"
                        checked={selectedItems[item["Mã nhân viên"]] || false} // Kiểm tra nếu item này đã được chọn
                        onChange={() => handleSelectItem(item["Mã nhân viên"])} // Khi thay đổi, chọn hoặc bỏ chọn item
                      />
                    </td>
                    {columns.map((col, colIndex) => (
                      <td key={colIndex}>
                        {col === option ? (
                          <Link
                            to={`/watch/${item[col]}`}
                            style={{ fontFamily: 'Nunito-Regular', color: '#4176da', fontWeight: 'bold' }}
                          >
                            {item[col]}
                          </Link>
                        ) : (
                          item[col]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <div className='render-field-render-content-footer'>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          style={{ marginRight: '2%', marginTop: '0.5%' }}
        >
          <i className="angle left icon"></i>
        </button>
        <span style={{ marginRight: '1%', marginTop: '0.5%' }}>
          1.... <span style={{ textDecoration: 'underline' }}>{currentPage}</span> ....{totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          style={{ marginRight: '1%', marginTop: '0.5%' }}
        >
          <i className="angle right icon"></i>
        </button>
      </div>
    </div>
  );
};

const generateId = (name) => {
  const formattedName = name
    .normalize("NFD")                    // Phân tách các dấu
    .replace(/[\u0300-\u036f]/g, "")     // Loại bỏ các dấu
    .replace(/\s+/g, "")                 // Loại bỏ khoảng trắng
    .toUpperCase();                     // Chuyển thành chữ hoa (nếu cần)

  // Kết hợp với thời gian tạo để tạo ra ID duy nhất
  return `${formattedName}${Date.now()}`;
};

const FormTaskListComponent = ({ name, title, taskListData, onTaskListChange }) => {
  const [inputRows, setInputRows] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [logError, setLogError] = useState('');

  const headerData = ['STT', 'Tên công việc', 'Thời gian làm(h)', '% Hoàn thành', 'Mô tả chi tiết', 'Ghi chú', 'Thao tác'];

  const addRow = () => {
    setLogError('');
    const newId = generateId(name);
    setInputRows([
      ...inputRows,
      {
        id: newId,
        stt: inputRows.length + 1,
        inputs: Array(5).fill(''),
        isCompleted: false
      }
    ]);
  };

  const handleInputChange = (rowId, index, value) => {
    const updatedRows = inputRows.map(row =>
      row.id === rowId
        ? { ...row, inputs: row.inputs.map((input, i) => i === index ? value : input) }
        : row
    );
    setInputRows(updatedRows);
  };

  const handleDelete = (rowId) => {
    const updatedInputRows = inputRows.filter(row => row.id !== rowId);
    setInputRows(updatedInputRows);

    const updatedTaskList = taskList.filter(task => task.id !== rowId);
    setTaskList(updatedTaskList);

    console.log("Danh sách công việc hiện tại sau khi xóa:", updatedTaskList);
  };

  const handleComplete = (rowId) => {
    const existingTask = taskList.find(task => task.id === rowId);
    if (existingTask) {
      setLogError(`Công việc với ID ${rowId} đã tồn tại!`);
      console.log(`Công việc với ID ${rowId} đã tồn tại!`);
      return;
    }

    const updatedRows = inputRows.map(row =>
      row.id === rowId ? { ...row, isCompleted: true } : row
    );

    const completedTask = inputRows.find(row => row.id === rowId);
    if (completedTask) {
      const [taskName, timeWorked, completionPercent, description] = completedTask.inputs;

      if (!taskName || !timeWorked || !completionPercent || !description) {
        setLogError("Lỗi: Các trường Tên công việc, Thời gian làm, % Hoàn thành, và Mô tả chi tiết là bắt buộc.");
        console.log("Lỗi: Các trường Tên công việc, Thời gian làm, % Hoàn thành, và Mô tả chi tiết là bắt buộc.");
        return;
      }

      setInputRows(updatedRows);

      const newTask = {
        id: completedTask.id,
        stt: completedTask.stt,
        name: completedTask.inputs[0],
        time: completedTask.inputs[1],
        progress: completedTask.inputs[2],
        description: completedTask.inputs[3],
        note: completedTask.inputs[4]
      };

      const updatedTaskList = [...taskList, newTask];
      setTaskList(updatedTaskList);
      onTaskListChange(updatedTaskList);

      console.log('Danh sách công việc hiện tại:', updatedTaskList);
    }
  };

  return (
    <div className='form-task-list-component'>
      <h3 style={{ marginLeft: '2%', marginTop: '0.2%', position: 'fixed' }}>{title}</h3>
      <h3 style={{ marginLeft: '2%', marginTop: '2%', position: 'fixed', color: 'red' }}>{logError}</h3> {/* Hiển thị thông báo lỗi */}

      <div className='form-task-list-component-header'>
        <div style={{ gridColumn: 'span 6' }}></div>
        <button
          onClick={addRow}
          className="form-task-list-component-action-btn"
        >
          Add
        </button>
      </div>

      <div className='form-task-list-component-input-container'>
        <div className='form-task-list-component-input-container-header'>
          {headerData.slice(0, -1).map((header, index) => (
            <div key={index} className="form-task-list-component-input-cell">
              <strong>{header}</strong>
            </div>
          ))}
        </div>
        {inputRows.map(row => (
          <div key={row.id} className="form-task-list-component-input-row">
            <div className="form-task-list-component-input-cell">
              <input
                type="text"
                value={row.stt}
                readOnly
                className="form-task-list-component-input-field"
              />
            </div>
            {row.inputs.map((input, index) => (
              <div key={index} className="form-task-list-component-input-cell">
                {index === 1 || index === 2 ? (
                  <input
                    type="number"
                    value={input}
                    onChange={(e) => handleInputChange(row.id, index, e.target.value)}
                    disabled={row.isCompleted}
                    className="form-task-list-component-input-field"
                    min="0"
                  />
                ) : (
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => handleInputChange(row.id, index, e.target.value)}
                    disabled={row.isCompleted}
                    className="form-task-list-component-input-field"
                  />
                )}
              </div>
            ))}
            <div className='form-task-list-component-action-btn-container'>
              <IoMdCheckmark style={{ color: '#0b5da0' }} size={30} onClick={() => handleComplete(row.id)} />
              <IoMdTrash size={30} onClick={() => handleDelete(row.id)} style={{ color: '#ad3939' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { DateFieldComponent, AproveRenderfieldComponent, InputfieldComponent, SearchFieldComponent, SelectFieldComponent, RenderfieldComponent, DropdownListComponent, InputDataFetchFieldComponent, FormTaskListComponent };