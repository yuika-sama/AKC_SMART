import React, { useState } from "react";
import { Menu, Image } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveItem } from "../../../slice/leftMenuSlice.js";
import { SpeechBubble } from "react-kawaii";

const HeaderMenu = ({ section }) => {
  const [language, setLanguage] = useState("vi");
  const dispatch = useDispatch();
  const activeItemPath = useSelector((state) => state.menu.activeItemPath);
  const Name = localStorage.getItem("Name") || "Hiệp ";
  const icon = "🚀";

  const getGreetingMessage = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 6 && currentHour < 12) {
      return `${icon} Chào buổi sáng ${Name} `;
    } else if (currentHour >= 12 && currentHour < 18) {
      return `${icon} Chào buổi chiều ${Name}`;
    } else {
      return `${icon} Buổi tối tốt lành ${Name}`;
    }
  };

  const styles = {
    menuContainer: {
      position: "fixed",
      top: "0.5vh",
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#e6f4ff",
      padding: "1vh",
      width: "82.5%",
      height: "10%",
      marginLeft: "35vh",
    },
    menuContainer1: {
      display: "flex",
      flexDirection: "column",
      flexBasis: "40%",
      maxHeight: "100%",
      overflow: "visible",
    },
    greetingMessage: {
      paddingTop: "1vh",
      paddingLeft: "10px",
      fontFamily: "'OpenSans_SemiCondensed-Bold', sans-serif",
      fontSize: "40px",
      color: "#0f1b33",
    },
    menuContainer2: {
      paddingTop: "2vh",
      paddingLeft: "13px",
      fontFamily: "'Nunito-ExtraLight', sans-serif",
      fontSize: "22px",
      color: "#000000",
      opacity: "70%",
    },
    rightItems: {
      display: "flex",
      alignItems: "center",
      gap: "1em",
      marginLeft: "auto",
    },
    notificationIcon: {
      fontSize: "1.5em",
      color: "purple",
    },
  };

  return (
    <div style={styles.menuContainer}>
      <div style={styles.menuContainer1}>
        <div style={styles.greetingMessage}>{getGreetingMessage()}</div>
        <div style={styles.menuContainer2}>Đây là tổng quan tháng này của bạn</div>
      </div>
      <div style={styles.rightItems}>
        <div style={styles.notificationIcon}>
          <i className="bell outline icon"></i>
        </div>
        <div className="user-profile">
          <Image
            src="https://react.semantic-ui.com/images/avatar/small/matthew.png"
            avatar
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
