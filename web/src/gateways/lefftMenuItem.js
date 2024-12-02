
import { FaTachometerAlt, FaUser, FaFileInvoice, FaFileAlt, FaCreditCard, FaWallet, FaPercentage, FaCog, FaInfoCircle } from "react-icons/fa";

const LeftMenuItems = [
  {
    key: 'Dashboard',
    icon: <FaTachometerAlt />,
    label: 'Dashboard',
    link: '/dashboard',
    subItems: [
      { key: 'overview', label: 'Tổng quan', link: '/dashboard/overview' },
      { key: 'statics', label: 'Bố của tổng quan', link: '/dashboard/statics' },
    ],
  },
  {
    key: 'Staff',
    icon: <FaUser />,
    label: 'Nhân viên',
    link: '/staff',
    subItems: [
      { key: 'timeSheet', label: 'Bảng chấm công', link: '/staff/timeSheet' },
      { key: 'personalKpi', label: 'Kpi cá nhân', link: '/staff/personalKpi' },
      { key: 'leaveRequest', label: 'Đơn xin nghỉ phép', link: '/staff/leaveRequest' },
      { key: 'advancePaymentRequest', label: 'Tạm ứng', link: '/staff/advancePaymentRequest' },
      { key: 'refundPaymentRequest', label: 'Hoàn ứng', link: '/staff/refundPaymentRequest' },
      { key: 'timesheetConfirmed', label: 'Xác nhận chấm công', link: '/staff/timeSheetConfirmed' },

    ],
  },
  {
    key: 'warehouse',
    icon: <FaFileInvoice />,
    label: 'Kho hàng',
    link: '/warehouse',
    subItems: [
      { key: 'warehouseDashboard', label: 'Tổng quan ', link: '/warehouse/warehouseDashboard' },
      { key: 'warehouseInventoryManagement', label: 'Yêu cầu nhập kho ', link: '/warehouse/warehouseInventoryManagement' },
      { key: 'stockReceiving', label: 'Xuất Kho', link: '/warehouse/stockReceiving' },
    ],
  },
  {
    key: 'humanResourceManagement',
    icon: <FaFileAlt />,
    label: 'Nhân sự HR',
    link: '/humanResourceManagement',
    subItems: [
      { key: 'viewAllStaff', label: 'Nhân viên công ty', link: '/quote/viewAllStaff' },
    ],
  },
  {
    key: 'accountant',
    icon: <FaWallet />,
    label: 'Kế toán',
    link: '/accountant',
    subItems: [
      { key: 'cashFlowManagement', label: 'Quản Lý Dòng Tiền', link: '/accountant/cashFlowManagement' },
      { key: 'accountsPayable', label: 'Các Khoản Phải Trả', link: '/accountant/accountsPayable' },
      { key: 'paymentDocuments', label: 'Tài Liệu Thanh Toán', link: '/accountant/paymentDocuments' },
    ],
  }
];

export default LeftMenuItems;
