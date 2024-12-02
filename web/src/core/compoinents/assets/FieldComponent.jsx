import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
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
  if (!data || data.length === 0) return null;

  const columns = Object.keys(data[0]);

  return (
    <div className='render-field-component'>
      {title && (
        <div className='render-field-component-header'>
          <div className='render-field-title'>{title}</div>
        </div>
      )}
      <div className='render-field-component-content'>
        <div className='render-field-render-content-title'>
          <table>
            <thead>
              <tr>
                {columns.map((col, index) => (
                  <th key={index}>{col}</th>
                ))}
              </tr>
            </thead>
          </table>
        </div>

        <div className='render-field-render-content-body'>
          <table>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  {columns.map((col, colIndex) => (
                    <td key={colIndex}>{item[col]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


export { InputfieldComponent, SearchFieldComponent, SelectFieldComponent, RenderfieldComponent };
