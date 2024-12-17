import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import { Loader } from 'semantic-ui-react'; // Import Loader từ Semantic UI React
import '../css/button.css'

const ClockOutButton = ({ onClick, title }) => {
  const [loading, setLoading] = useState(false); // Để quản lý trạng thái loading
  const navigate = useNavigate(); // Dùng hook navigate để chuyển hướng

  const handleClick = () => {
    setLoading(true); // Bật chế độ loading
    setTimeout(() => {
      localStorage.clear();
      // Sau 3 giây, thực hiện chuyển hướng và gọi hàm onClick
      navigate('/'); // Chuyển hướng về trang chủ
    }, 3000);
  };

  return (
    <button className="clock-out-button" onClick={handleClick} disabled={loading}>
      <span>
        {loading ? (
          <Loader active inline size="mini" className="custom-loader" />
        ) : (
          title
        )}
      </span>
    </button>
  );
};


const SimpleButton = ({ title, style, onClick }) => {
  return (
    <Button style={style}
      onClick={onClick}
      className="ui-simple-button"
    >
      {title}
    </Button>
  );
};

const CreateOrderButton = ({ title, link, style, onClick }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) onClick(e);
    navigate(link || "/default-route");
  };

  return (
    <Button
      style={style}
      onClick={handleClick}
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

const AllFileUploadButton = ({ title, onFileChange }) => {
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
        onChange={handleFileChange}
      />
    </div>
  );
};
export default AllFileUploadButton;


export { CreateOrderButton, ClockOutButton, FileUploadButton, AllFileUploadButton, SimpleButton };
