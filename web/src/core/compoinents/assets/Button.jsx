import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import '../css/button.css'


const ClockOutButton = ({ onClick }) => {
  return (
    <button className="clock-out-button" onClick={onClick}>
      <span>Clock out</span>
    </button>
  );
};

const CreateOrderButton = ({ title, link, style }) => {
  const navigate = useNavigate();

  return (
    <Button style={style}
      onClick={() => navigate(link || '/default-route')}
      className="ui button"
    >
      {title}
    </Button>
  );
};


const FileUploadButton = ({ title, onFileChange }) => {
  const [fileName, setFileName] = useState('None');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      console.log('Selected file:', file);

      const reader = new FileReader();
      reader.onload = (event) => {
        const binaryString = event.target.result;
        const workbook = XLSX.read(binaryString, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(sheet);

        onFileChange(data);
      };
      reader.readAsBinaryString(file);
    }
  };

  return (
    <div className='file-upload-button'>
      <div style={{ fontFamily: 'Nunito-Regular', fontSize: '20px', color: '#132549' }}>{title}</div>
      <div>{fileName}</div>
      <Button
        style={{ backgroundColor: '#89AAEB', position: 'relative', left: '20%' }}
        icon="upload"
        onClick={() => document.querySelector('#file-input').click()}
      />
      <Input
        id="file-input"
        type="file"
        style={{ display: 'none' }}
        accept=".xlsx,.xls"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUploadButton;




export { CreateOrderButton, ClockOutButton, FileUploadButton };
