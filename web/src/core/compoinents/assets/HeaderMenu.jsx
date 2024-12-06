import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveItem } from "../../../slice/leftMenuSlice.js";
import "../css/headerMenu.css";

const HeaderMenu = ({ section }) => {
  const [language, setLanguage] = useState("vi");
  const dispatch = useDispatch();
  const activeItemPath = useSelector((state) => state.menu.activeItemPath);
  const Name = localStorage.getItem('Name')

  const getGreetingMessage = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 6 && currentHour < 12) {
      return "Chào buổi sáng ${Name}";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Chào buổi chiều ${Name}";
    } else {
      return "Buổi tối tốt lành ${Name}";
    }
  };

  return (
    <div id="menu-container">
      <div className="menu-container1">
        <div className="menu-container1-content"  >
          {getGreetingMessage()}
        </div>
        <div className="menu-container1-content-2"  >
          Đây là tổng quan của bạn
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;