
import { FaTachometerAlt, FaUser, FaFileInvoice, FaFileAlt, FaCreditCard, FaWallet, FaPercentage, FaCog, FaInfoCircle } from "react-icons/fa";

const LeftMenuItems = [
  {
    key: 'Dashboard',
    icon: <FaTachometerAlt />,
    label: 'Dashboard',
    link: '/dashboard',
    subItems: [
      { key: 'overview', label: 'Overview', link: '/dashboard/overview' },
      { key: 'stats', label: 'Statistics', link: '/dashboard/stats' },
    ],
  },
  {
    key: 'Staff',
    icon: <FaUser />,
    label: 'Staff',
    link: '/staff',
    subItems: [
      { key: 'timesheet', label: 'Timesheet', link: '/staff/timesheet' },
      { key: 'leaveRequest', label: 'Leave Request', link: '/staff/leaveRequest' },
      { key: 'advancePaymentRequest', label: 'Advance Payment Request', link: '/staff/advancePaymentRequest' },
      { key: 'refundPaymentRequest', label: 'Refund Payment Request', link: '/staff/refundPaymentRequest' },
      { key: 'timesheetConfirmed', label: 'Timesheet confirmed', link: '/staff/timeSheetConfirmed' },

    ],
  },
  {
    key: 'warehouse',
    icon: <FaFileInvoice />,
    label: 'Warehouse',
    link: '/warehouse',
    subItems: [
      { key: 'warehouseDashboard', label: 'Dashboard ', link: '/warehouse/warehouseDashboard' },
      { key: 'warehouseInventoryManagement', label: 'Inventory Management ', link: '/warehouse/warehouseInventoryManagement' },
      { key: 'stockReceiving', label: 'Stock Receiving', link: '/warehouse/stockReceiving' },
    ],
  },
  {
    key: 'humanResourceManagement',
    icon: <FaFileAlt />,
    label: 'HR Management',
    link: '/humanResourceManagement',
    subItems: [
      { key: 'viewAllStaff', label: 'View All Staff', link: '/quote/viewAllStaff' },
    ],
  },
  {
    key: 'accountant',
    icon: <FaWallet />,
    label: 'Accountant',
    link: '/accountant',
    subItems: [
      { key: 'cashFlowManagement', label: 'Cash Flow Management', link: '/accountant/cashFlowManagement' },
      { key: 'accountsPayable', label: 'Accounts Payable', link: '/accountant/accountsPayable' },
      { key: 'paymentDocuments', label: 'Payment Documents', link: '/accountant/paymentDocuments' },

    ],
  }
];

export default LeftMenuItems;
