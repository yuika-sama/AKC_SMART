import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Menu, List, Sidebar } from "semantic-ui-react"; 
import SideBarItems from "../../../gateways/sideBarItems";
import "../css/sideBar.css";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;

  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const newActiveItem = SideBarItems.find(item => currentPath.startsWith(item.link))?.key || ""; 
    setActiveItem(newActiveItem);
  }, [currentPath]);

  return (
    <div id="sidebar"> 
      <Link to="/dashboard" style={{ display: 'block' }}>
        <div id="software-name">
          <div style={{ marginTop: "2px", color: "#355FB3", fontSize: "35px" }}>VLH</div>
          <div style={{ marginTop: "2px", marginBottom: "15px", color: "#122240", opacity: "70%", fontSize: "20px" }}>Total Management</div>
          <div className="bottom-line"></div>
        </div>
      </Link>
      <div className="item-bar">
        <Menu vertical borderless fluid text style={{ paddingLeft: "30px" }}>
          <List> 
            <List.Item style={{ fontWeight: "bold", color: "#152648" }}>Công việc</List.Item> 
            {SideBarItems.slice(0, 5).map((item) => ( 
              <Menu.Item
                key={item.key}
                style={{
                  color: activeItem === item.key ? '#355FB3' : '#152648', 
                  fontWeight: activeItem === item.key ? "bold" : "normal",
                  borderRadius: "5px",
                  marginLeft: '5px',
                  marginRight: '5px',
                  marginBottom: '15px',
                  marginTop: '15px',
                  transition: 'color 0.4s ease', 
                }}
                onClick={() => navigate(item.link)}
              >
                {item.icon} {item.label}
              </Menu.Item>
            ))}
          </List>

          <List>
            <List.Item style={{ fontWeight: "bold", color: "#152648" }}>Quỹ</List.Item>
            {SideBarItems.slice(5).map((item) => ( 
              <Menu.Item
                key={item.key}
                style={{
                  color: activeItem === item.key ? '#355FB3' : '#152648', 
                  fontWeight: activeItem === item.key ? "bold" : "normal",
                  borderRadius: "5px",
                  marginLeft: '5px',
                  marginRight: '5px',
                  marginBottom: '15px',
                  marginTop: '15px',
                  transition: 'color 0.4s ease', 
                }}
                onClick={() => navigate(item.link)}
              >
                {item.icon} {item.label}
              </Menu.Item>
            ))}
          </List>
        </Menu>
      </div>
    </div>
  );
};

export default SideBar;