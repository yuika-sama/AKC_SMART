import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes, Route từ react-router-dom
import { Provider } from 'react-redux';  // Import Provider
import { leftMenustore } from './store/leftMenuStore.js';
import CreatePersonalKPIPage from './pages/CreatePersonalKPIPage.jsx';
import TimeSheetPage from './pages/TimeSheetPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={leftMenustore}>
      <Router>
        <Routes>


          <Route path="staff/createPersonalKPI" element={<CreatePersonalKPIPage />} />
          <Route path="staff/timeSheet" element={<TimeSheetPage />} />
          <Route path="/*" element={<NotFoundPage />} />


        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
