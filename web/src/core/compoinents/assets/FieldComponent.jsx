import React, { useState, useEffect } from 'react';
import { Input } from 'semantic-ui-react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import debounce from "lodash/debounce";
import '../css/inputfield.css';

const InputfieldComponent = ({ title, data }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='input-field-component' >
      <div className='input-field-title'>{title}</div>
      <Input
        loading={isLoading}
        style={{ width: '100%', height: '100%' }}

      />
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

  // Hàm tìm kiếm (debounce)
  const handleSearch = debounce(async (value) => {
    if (value.trim()) {
      const data = await fetchData(value);
      setResults(data);
      setIsDropdownVisible(true);
    } else {
      setResults([]);
      setIsDropdownVisible(false);
    }
  }, 300);

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

const DropdownListComponent = ({ title, data }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className='dropdown-list-component'>
      <div className='dropdown-list-title'>{title}</div>
      <select
        value={selectedValue}
        onChange={handleChange}
        className="ui dropdown"
        style={{ width: '100%', height: '40px' }}
      >
        <option value="" disabled>Chọn một mục</option>
        {data.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

const SelectFieldComponent = ({ title, options }) => {
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
              name="gender"
              value={option.value}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

const RenderfieldComponent = ({ title, data }) => {
  const rowsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);  // Khởi tạo loading = true

  const resetLoading = () => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false); // Sau 2 giây, chuyển loading thành false
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
      setCurrentPage(currentPage + 1);  // Chuyển sang trang tiếp theo
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
                      <td key={colIndex}>{item[col]}</td>
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
          <i class="angle left icon"></i>
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
          <i class="angle right icon"></i>
        </button>
      </div>
    </div>
  );
};


export { InputfieldComponent, SearchFieldComponent, SelectFieldComponent, RenderfieldComponent };