import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, requiredRole }) => {
  const userRole = localStorage.getItem('role'); // Giả sử role được lưu trong localStorage
  if (userRole !== requiredRole) {
    return <Navigate to="/notfound" />; // Nếu không phải admin, chuyển hướng đến NotFoundPage
  }
  return element; // Nếu là admin, hiển thị route tương ứng
};

export default PrivateRoute;
