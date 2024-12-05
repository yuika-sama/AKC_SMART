import { FaTachometerAlt, FaTasks, FaChartLine, FaFileAlt, FaFileInvoice, FaCreditCard, FaWallet } from "react-icons/fa";

const LeftMenuItems = [
  {
    key: 'Dashboard',
    icon: <FaTachometerAlt />,
    label: 'Dashboard',
    link: '/dashboard',
    subItems: [],
  },
  {
    key: 'TaskList',
    icon: <FaTasks />,
    label: 'Danh sách công việc',
    link: '/taskList',
    subItems: [],
  },
  {
    key: 'KPI',
    icon: <FaChartLine />,
    label: 'KPI',
    link: '/kpi',
    subItems: [],
  },
  {
    key: 'LeaveRequest',
    icon: <FaFileAlt />,
    label: 'Đơn xin nghỉ phép',
    link: '/leaveRequest',
    subItems: [],
  },
  {
    key: 'OvertimeRequest',
    icon: <FaFileAlt />,
    label: 'Đơn xin tăng ca',
    link: '/overtimeRequest',
    subItems: [],
  },
  {
    key: 'PaymentRequests',
    icon: <FaCreditCard />,
    label: 'Đề nghị thanh toán',
    link: '/paymentRequests',
    subItems: [
      { key: 'advancePayment', label: 'Đơn xin tạm ứng', link: '/paymentRequests/advancePayment' },
      { key: 'refundPayment', label: 'Đơn xin hoàn ứng', link: '/paymentRequests/refundPayment' },
    ],
  },
  {
    key: 'Warehouse',
    icon: <FaFileInvoice />,
    label: 'Kho hàng',
    link: '/warehouse',
    subItems: [
      { key: 'stockEntry', label: 'Nhập kho', link: '/warehouse/stockEntry' },
      { key: 'stockExit', label: 'Xuất kho', link: '/warehouse/stockExit' },
    ],
  },
];

export default LeftMenuItems;
