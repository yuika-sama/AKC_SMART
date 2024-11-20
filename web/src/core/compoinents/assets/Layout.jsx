import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Grid, Menu } from "semantic-ui-react";
import "../css/layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      {children}
    </div>
  );
};


export default Layout;
