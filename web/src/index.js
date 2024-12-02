import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes, Route từ react-router-dom
import { Provider } from 'react-redux';  // Import Provider
import { leftMenustore } from './store/leftMenuStore.js';
import CreateTimeSheetPage from './pages/CreateTimeSheetPage.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={leftMenustore}>
      <Router>
        <Routes>


          <Route path="staff/createTimeSheet" element={<CreateTimeSheetPage />} />


        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
