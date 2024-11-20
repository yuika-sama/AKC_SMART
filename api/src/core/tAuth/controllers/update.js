import adminModels from "../models/adminModels.js";
import staffModels from "../models/staffModels.js";

const updateAdminById = async (id, updateData) => {
  try {
    const updatedAdmin = await adminModels.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true
    });
    if (!updatedAdmin) {
      throw new Error('Admin not found');
    }
    return updatedAdmin;
  } catch (error) {
    console.error('Error updating admin:', error);
    throw new Error('Could not update admin');
  }
};

const updateStaffById = async (id, updateData) => {
  try {
    const updatedAdmin = await staffModels.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true
    });
    if (!updatedAdmin) {
      throw new Error('Staff not found');
    }
    return updatedAdmin;
  } catch (error) {
    console.error('Error updating staff:', error);
    throw new Error('Could not update staff');
  }
};

export {
  updateAdminById,
  updateStaffById
}
