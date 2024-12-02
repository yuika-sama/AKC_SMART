import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSubMenu } from "../../../slice/leftMenuSlice";
import "semantic-ui-css/semantic.min.css";
import { Grid, Menu } from "semantic-ui-react";
import LeftMenuItems from "../../../gateways/lefftMenuItem";
import "../css/leftMenu.css";

const LeftMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const openMenu = useSelector((state) => state.menu);
  const currentPath = location.pathname;

  const [activeItems, setActiveItems] = useState([]);

  useEffect(() => {
    const newActiveItems = [];
    LeftMenuItems.forEach((item) => {
      if (currentPath.startsWith(item.link)) {
        newActiveItems.push(item.key);
        item.subItems.forEach((subItem) => {
          if (currentPath.startsWith(subItem.link)) {
            newActiveItems.push(subItem.key);
          }
        });
      }
    });
    setActiveItems(newActiveItems);
  }, [currentPath]);

  return (
    <Grid.Column id="sidebar">
      <Link to="/dashboard" style={{ display: 'block' }}>
        <div id="software-name">
          <div style={{ marginTop: "2px", color: "#355FB3", fontSize: "35px" }}>AKC</div>
          <div style={{ marginTop: "2px", marginBottom: "15px", color: "#122240", opacity: "70%", fontSize: "20px" }}>Total Management</div>
          <div className="bottom-line"></div>
        </div>
      </Link>
      <Menu vertical borderless fluid text>
        {LeftMenuItems.map((item) => (
          <div key={item.key}>
            <Menu.Item
              style={{
                backgroundColor: activeItems.includes(item.key) ? '#90bcf6' : '#ffffff',
                fontWeight: "600",
                borderRadius: "5px",
                marginLeft: '5px',
                marginRight: '5px',
                marginBottom: '15px',
                marginTop: '15px',
                color: '#152648',
                transition: 'background-color 0.4s ease, color 0.4s ease',
              }}
              onClick={() => dispatch(toggleSubMenu(item.key))}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#90bcf6')} // Chuyển màu khi hover
              onMouseLeave={(e) => (e.target.style.backgroundColor = activeItems.includes(item.key) ? '#90bcf6' : '#ffffff')} // Quay lại màu ban đầu khi rời chuột
            >
              {item.icon} {item.label}
            </Menu.Item>
            {openMenu[item.key] && (
              <Menu.Menu
                style={{
                  maxHeight: openMenu[item.key] ? '500px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease-out', // Thêm hiệu ứng mượt mà cho sub-menu
                }}
              >
                {item.subItems.map((subItem) => (
                  <Link to={subItem.link} key={subItem.key}>
                    <Menu.Item
                      style={{
                        backgroundColor: activeItems.includes(subItem.key) ? 'rgba(144, 188, 246, 0.8)' : '#ffffff',
                        fontWeight: activeItems.includes(subItem.key) ? '900' : 'normal',
                        borderRadius: "10px",
                        color: '#152648',
                        fontSize: "15px",
                        marginLeft: "26px",
                        transition: 'color 1s ease',
                      }}
                      onClick={(e) => {

                        e.preventDefault();
                        navigate(subItem.link);
                      }}
                      onMouseEnter={(e) => e.target.style.fontWeight = 900}  // Chuyển màu khi hover
                      onMouseLeave={(e) => e.target.style.fontWeight = 'normal'}  // Quay lại màu ban đầu khi rời chuột
                    >
                      {subItem.label}
                    </Menu.Item>
                  </Link>
                ))}
              </Menu.Menu>
            )}
          </div>
        ))}
      </Menu>
    </Grid.Column>
  );
};

export default LeftMenu;
