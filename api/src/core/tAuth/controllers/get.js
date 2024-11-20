import adminModels from "../models/adminModels.js";
import staffModels from "../models/staffModels.js";

// Hàm lấy tất cả admin
const getAllAdmins = async (req, res) => {
  try {
    const admins = await adminModels.find({ removed: false }); // Lấy tất cả admin chưa bị xóa
    res.status(200).json(admins);
  } catch (error) {
    console.error('Error fetching admins:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllStaffs = async (req, res) => {
  try {
    const staffs = await staffModels.find({ removed: false });
    res.status(200).json(staffs);
  } catch (error) {
    console.error('Error fetching staffs:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export {
  getAllAdmins,
  getAllStaffs
}
