import customerModel from "../models/masterDataModels.js";

const createCustomer = async (data) => {
  try {
    // const existingTimeSheet = await customerModel.findOne({ date: data.date, employeeId: data.employeeId });
    // if (existingTimeSheet) {
    //   throw new Error('A timesheet for this date already exists');
    // }
    const newTimeSheet = new customerModel(data);
    const savedTimeSheet = await newTimeSheet.save();
    return savedTimeSheet;

  } catch (error) {
    console.error('Error creating Customer', error);
    throw new Error('Could not create Customer');
  }
};


const updateCustomer = async (id, updateData) => {
  try {
    const updatedTimeSheet = await customerModel.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true  // Chạy các validator nếu có
      }
    );

    if (!updatedTimeSheet) {
      throw new Error('Customer not found');
    }

    return updatedTimeSheet;
  } catch (error) {
    console.error('Error updating Customer', error);
    throw new Error('Could not update Customer');
  }
};

const getCustomer = async (id) => {
  try {
    const result = await customerModel.findById(id);
    if (!result) {
      throw new Error('not found');
    }
    return result;
  } catch (error) {
    console.error('Error finding customerModel', error);
    throw new Error('Could not finding customerModel');
  }
}

const deletedCustomer = async (id) => {
  try {
    const result = await customerModel.findByIdAndDelete(id);
    if (!result) {
      throw new Error(' not found');
    }
    return result;
  } catch (error) {
    console.error('Error deleting ', error);
    throw new Error('Could not delete');
  }
};

export {
  createCustomer,
  deletedCustomer,
  getCustomer,
  updateCustomer
}
