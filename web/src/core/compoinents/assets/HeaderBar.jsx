import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'; 
import '../css/headerBar.css';

const HeaderBar = ({userName}) => {
  const [language, setLanguage] = useState("vi");
  const dispatch = useDispatch();
  const activeItemPath = useSelector((state) => state.menu.activeItemPath);

  const getGreetingMessage = () => {
    const currentHour = new Date().getHours();
    const name = userName; // Thay thế bằng tên người dùng thực tế

    if (currentHour >= 6 && currentHour < 12) {
      return `Chào buổi sáng ${name}!`;
    } else if (currentHour >= 12 && currentHour < 18) {
      return `Chào buổi chiều ${name}!`;
    } else {
      return `Buổi tối tốt lành ${name}!`;
    }
  };

  const languageOptions = [
    { key: 'vi', value: 'vi', flag: 'vn', text: 'Tiếng Việt' },
    { key: 'en', value: 'en', flag: 'us', text: 'English' },
  ];

  return (
    <div id="menu-container">
        <div className='menu-container1'>
            <div className="greeting-message">
                {getGreetingMessage()}
            </div>
            <div className="menu-container2">
                Đây là tổng quan tháng này của bạn
            </div>
        </div>
        <div className="right-items">
          <div className="notification-icon">
            <i className="bell outline icon" style={{ fontSize: '1.5em', color: 'purple' }}></i>
          </div>
          <div className="user-profile">
            <Image src='https://react.semantic-ui.com/images/avatar/small/matthew.png' avatar />
          </div>
        </div>
    </div>
  );
};

export default HeaderBar;