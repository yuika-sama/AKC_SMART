import React, { useState, useEffect } from 'react';
import { Input } from 'semantic-ui-react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import '../css/inputfield.css';

const InputfieldComponent = ({ title }) => {
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

const SearchFieldComponent = ({ style }) => {
  return (
    <div className='search-field-component'>
      <Input
        placeholder={style?.placeholder}
        style={{ width: '100%', height: '100%' }}
      />
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
    resetLoading();  // Gọi lại hàm resetLoading khi currentPage thay đổi
  }, [currentPage]);  // Khi currentPage thay đổi thì sẽ gọi lại setTimeout

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