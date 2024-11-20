import adminModels from "../models/adminModels.js";
import staffModels from "../models/staffModels.js";

const deleteAdminById = async (id) => {
  try {
    const result = await adminModels.findByIdAndDelete(id);
    if (!result) {
      throw new Error('Admin not found');
    }
    return result; // Trả về thông tin admin đã xóa
  } catch (error) {
    console.error('Error deleting admin:', error);
    throw new Error('Could not delete admin');
  }
};

const deleteStaffById = async (id) => {
  try {
    const result = await staffModels.findByIdAndDelete(id);
    if (!result) {
      throw new Error('staff not found');
    }
    return result;
  } catch (error) {
    console.error('Error deleting staff:', error);
    throw new Error('Could not delete staff');
  }
};

export {
  deleteAdminById,
  deleteStaffById
}
