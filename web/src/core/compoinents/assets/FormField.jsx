import React from "react";
import "../css/formField.css";

const FormField = ({ style, children }) => {
  return (
    <div className="grid-item" style={style}>
      {children}
    </div>
  );
};


export default FormField;
