
import { FaTachometerAlt, FaUser, FaFileInvoice, FaFileAlt, FaCreditCard, FaWallet, FaPercentage, FaCog, FaInfoCircle } from "react-icons/fa";
import { GiLightBulb } from 'react-icons/gi';

const LeftMenuItems = [
  {
    key: 'Dashboard',
    icon: <FaTachometerAlt />,
    label: 'Dashboard',
    link: '/dashboard',
    subItems: [

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
      { key: 'confirmedTimeSheet', label: 'Xác nhận chấm công', link: '/staff/confirmedTimeSheet' },

    ],
  },
  {
    key: 'warehouse',
    icon: <FaFileInvoice />,
    label: 'Kho hàng',
    link: '/warehouse',
    subItems: [
      { key: 'warehouseDashboard', label: 'Tổng quan ', link: '/warehouse/warehouseDashboard' },
      { key: 'stockReceiving', label: 'Yêu cầu nhập kho ', link: '/warehouse/stockReceiving' },
      { key: 'stockExporting', label: 'Xuất Kho', link: '/warehouse/stockExporting' },
    ],
  },
  {
    key: 'humanResourceManagement',
    icon: <FaFileAlt />,
    label: 'Nhân sự HR',
    link: '/humanResourceManagement',
    subItems: [
      { key: 'viewAllStaff', label: 'Nhân viên công ty', link: '/humanResourceManagement/viewAllStaff' },
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
  },
  {
    key: 'intellectuality',
    icon: <GiLightBulb />,
    label: 'Tri Thức',
    link: '/intellectuality',
    subItems: [
      { key: 'Hướng dẫn chấm công', label: 'Hướng dẫn chấm công', link: '/intellectuality/timeSheetTnstruction' },
    ],
  },
  {
    key: 'Approve ',
    icon: <GiLightBulb />,
    label: 'Duyệt đơn',
    link: '/approve',
    subItems: [
      { key: 'Nghỉ phép', label: 'Duyệt đơn xin nghỉ phép', link: '/approve/leaveRequest' },
      { key: 'Tăng ca', label: 'Duyệt đơn xin tăng ca', link: '/approve/overTime' },

    ],
  }
];

export default LeftMenuItems;