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
import CreateLeaveRequestPage from './pages/CreateLeaveRequestPage.jsx';
import CreateAdvancePaymentRequest from './pages/CreateAdvancePaymentRequest.jsx';
import CreateRefundRequest from './pages/CreateRefundRequestPage.jsx';
import StockReceiveRequestPage from './pages/StockReceiveDashBoardPage.jsx';
import CreateStockReceiveRequest from './pages/CreateStockReceiveRequest.jsx';
import CreateStockExportRequest from './pages/CreateStockExportRequest.jsx';
import StockExportDashBoardPage from './pages/StockExportDashBoardPage.jsx';
import HumanResourceManagementDashBoardPage from './pages/HumanResourceManagementDashBoardPage.jsx';
import HumanResourceManagementCreateStaffPage from './pages/HumanResourceManagementCreateStaffPage.jsx';
import AccountsPayableDashboardPage from './pages/AccountsPayableDashboardPage.jsx';
import CashFlowManagementDashboard from './pages/CashFlowManagementDashboard.jsx';
import PaymentDocumentsDashBoardPage from './pages/PaymentDocumentsDashBoardPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ApproveLeaveRequestPage from './pages/ApproveLeaveRequestPage.jsx';
import ApproveStockExportDashBoardPage from './pages/ApproveStockExportDashBoardPage.jsx';
import ApproveStockReceiveDashBoardPage from './pages/ApproveStockReceiveDashBoardPage.jsx';
import PrivateRoute from './core/role/PrivateRoute.jsx';
import Tutorial from './pages/Tutorial.jsx';

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
          <Route path="dashboard/" element={<OverviewPage />} />
          <Route path="/" element={<LoginPage />} />

          <Route path="staff/createPersonalKPI" element={<CreatePersonalKPIPage />} />
          <Route path="staff/timeSheet" element={<TimeSheetDashBoardPage />} />
          <Route path="staff/personalKpi" element={<PersonalKPIDashBoardPage />} />
          <Route path="staff/leaveRequest" element={<LeaveRequestPage />} />
          <Route path="staff/advancePaymentRequest" element={<AdvancePaymentRequestPage />} />
          <Route path="staff/RefundPaymentRequest" element={<RefundPaymentRequestPage />} />
          <Route path="humanResourceManagement/viewAllStaff" element={<HumanResourceManagementDashBoardPage />} />
          <Route path="warehouse/stockExporting" element={<StockExportDashBoardPage />} />
          <Route path="accountant/paymentDocuments" element={<PaymentDocumentsDashBoardPage />} />
          <Route path="accountant/accountsPayable" element={<AccountsPayableDashboardPage />} />

          <Route path="staff/createTimeSheet" element={<CreateTimeSheetRequestPage />} />
          <Route path="staff/createLeaveRequest" element={<CreateLeaveRequestPage />} />
          <Route path="staff/createAdvancePaymentRequest" element={<CreateAdvancePaymentRequest />} />
          <Route path="staff/createRefundPaymentRequest" element={<CreateRefundRequest />} />
          <Route path="staff/createStockReceiveRequest" element={<CreateStockReceiveRequest />} />
          <Route path="staff/createStockExportRequest" element={<CreateStockExportRequest />} />

          <Route path="warehouse/warehouseDashboard" element={<WareHouseOverviewPage />} />
          <Route path="warehouse/stockReceiving" element={<StockReceiveRequestPage />} />

          <Route path="humanResourceManagement/createStaff" element={<HumanResourceManagementCreateStaffPage />} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="staff/confirmedTimeSheet" element={<TimeKeeping />} />
          <Route path="accountant/cashFlowManagement" element={<CashFlowManagementDashboard />} />

          <Route path="intellectuality/timeSheetTnstruction" element={<Tutorial />} />

          {/* Các route có yêu cầu quyền admin */}
          <Route path="approve/leaveRequest" element={<PrivateRoute element={<ApproveLeaveRequestPage />} requiredRole="admin" />} />
          <Route path="approve/stockExported" element={<PrivateRoute element={<ApproveStockExportDashBoardPage />} requiredRole="admin" />} />
          <Route path="approve/stockRecieved" element={<PrivateRoute element={<ApproveStockReceiveDashBoardPage />} requiredRole="admin" />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
