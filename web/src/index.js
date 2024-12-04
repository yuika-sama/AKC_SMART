import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes, Route từ react-router-dom
import { Provider } from 'react-redux';  // Import Provider
import { leftMenustore } from './store/leftMenuStore.js';
import CreatePersonalKPIPage from './pages/CreatePersonalKPIPage.jsx';
import TimeSheetDashBoardPage from './pages/TimeSheetDashBoardPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import Overview from "./pages/Overview.jsx"
import TaskList from './pages/TaskList.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={leftMenustore}>
      <Router>
        <Routes>
          <Route path = "/dashboard" element = {<Overview/>}/>
          {/* <Route path = "dashboard/statics" element = {<TaskList/>}/> */}

          <Route path = "/taskList" element = {<TaskList/>}/>

          <Route path="staff/createPersonalKPI" element={<CreatePersonalKPIPage />} />
          <Route path="staff/timeSheet" element={<TimeSheetDashBoardPage />} />
          <Route path="/*" element={<NotFoundPage />} />


        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
