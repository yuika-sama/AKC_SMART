import { FaRegClock, FaCalendarAlt, FaChartLine, FaFileSignature, FaPlusCircle, FaMoneyBillAlt, FaHandHoldingUsd, FaUndo, FaTimes } from "react-icons/fa";

const SideBarItems = [
  {
    key: 'timekeeping',
    icon: <FaRegClock />,
    label: 'Bảng chấm công',
    link: '/timekeeping',
  },
  {
    key: 'dailyTasks',
    icon: <FaCalendarAlt />,
    label: 'Công việc hằng ngày',
    link: '/daily-tasks', 
  },
  {
    key: 'kpi',
    icon: <FaChartLine />,
    label: 'KPI cá nhân',
    link: '/kpi',
  },
  {
    key: 'leaveRequest',
    icon: <FaFileSignature />,
    label: 'Đơn xin nghỉ phép',
    link: '/leave-request',
  },
  {
    key: 'overtimeRequest',
    icon: <FaPlusCircle />,
    label: 'Đơn xin tăng ca',
    link: '/overtime-request', 
  },
  {
    key: 'paymentRequest',
    icon: <FaMoneyBillAlt />, 
    label: 'Đề nghị thanh toán',
    link: '/payment-request',
  },
  {
    key: 'advancePayment',
    icon: <FaHandHoldingUsd />,
    label: 'Tạm ứng',
    link: '/advance-payment',
  },
  {
    key: 'refund',
    icon: <FaUndo />,
    label: 'Hoàn ứng',
    link: '/refund',
  },
];

export default SideBarItems;
