

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { leftMenustore } from './store/leftMenuStore.js';
import CreatePersonalKPIPage from './pages/CreatePersonalKPIPage.jsx';
import TimeSheetDashBoardPage from './pages/TimeSheetDashBoardPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import PersonalKPIDashBoardPage from './pages/PersonalKPIDashBoardPage.jsx';
import LeaveRequestPage from './pages/LeaveRequestPage.jsx';
import AdvancePaymentRequestPage from './pages/AdvancePaymentRequestPage.jsx';
import RefundPaymentRequestPage from './pages/RefundPaymentRequestPage.jsx';
import OverviewPage from './pages/OverviewPage.jsx';
import WareHouseOverviewPage from './pages/WareHouseOverviewPage.jsx';
import CreateTimeSheetRequestPage from './pages/CreateTimeSheetRequestPage.jsx';
import TimeKeeping from './pages/TimeKeeping.jsx';


if (process.env.NODE_ENV === 'development') {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (args[0] && args[0].includes('findDOMNode is deprecated')) {
      return;
    }
    originalWarn(...args);
  };
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={leftMenustore}>

      <Router>
        <Routes>
          {/* <Route path = "dashboard/statics" element = {<TaskList/>}/> */}
          <Route path="dashboard/" element={<OverviewPage />} />

          <Route path="staff/createPersonalKPI" element={<CreatePersonalKPIPage />} />
          <Route path="staff/timeSheet" element={<TimeSheetDashBoardPage />} />
          <Route path="staff/personalKpi" element={<PersonalKPIDashBoardPage />} />
          <Route path="staff/leaveRequest" element={<LeaveRequestPage />} />
          <Route path="staff/advancePaymentRequest" element={<AdvancePaymentRequestPage />} />
          <Route path="staff/RefundPaymentRequest" element={<RefundPaymentRequestPage />} />

          <Route path="staff/confirmedTimeSheet" element={<TimeKeeping />} />


          <Route path="staff/createTimeSheet" element={<CreateTimeSheetRequestPage />} />

          <Route path="warehouse/warehouseDashboard" element={<WareHouseOverviewPage />} />

          <Route path="/*" element={<NotFoundPage />} />


        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();