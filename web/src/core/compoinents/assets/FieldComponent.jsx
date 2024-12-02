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

const SearchFieldComponent = ({ title }) => {

  return (
    <div className='search-field-component' >
      <div className='search-field-title'>{title}</div>
      <Input
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};



const SelectFieldComponent = ({ title }) => {
  return (
    <div className='select-field-component'>
      <div className='select-field-title'>{title}</div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <label
          style={{
            padding: '10px',
            border: '2px solid #000',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}
        >
          <input type="radio" name="gender" value="male" />
          Nam
        </label>
        <label
          style={{
            padding: '10px',
            border: '2px solid #000',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}
        >
          <input type="radio" name="gender" value="female" />
          Nữ
        </label>
      </div>
    </div>
  );
};

export { InputfieldComponent, SearchFieldComponent, SelectFieldComponent };
