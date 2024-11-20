import dailyTimeSheetModel from "../../models/staff/dailyTimeSheet";

const createDailyTimeSheet = async (data) => {
  try {
    const existingTimeSheet = await dailyTimeSheetModel.findOne({ date: data.date, employeeId: data.employeeId });
    if (existingTimeSheet) {
      throw new Error('A timesheet for this date already exists');
    }
    const newTimeSheet = new dailyTimeSheetModel(data);
    const savedTimeSheet = await newTimeSheet.save();
    return savedTimeSheet;

  } catch (error) {
    console.error('Error creating dailyTimeSheet', error);
    throw new Error('Could not create dailyTimeSheet');
  }
};


const updateDailyTimeSheet = async (id, updateData) => {
  try {
    const updatedTimeSheet = await dailyTimeSheetModel.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true  // Chạy các validator nếu có
      }
    );

    if (!updatedTimeSheet) {
      throw new Error('Time sheet not found');
    }

    return updatedTimeSheet;
  } catch (error) {
    console.error('Error updating dailyTimeSheet', error);
    throw new Error('Could not update dailyTimeSheet');
  }
};

const getDailyTimeSheet = async (id) => {
  try {
    const result = await dailyTimeSheetModel.findById(id);
    if (!result) {
      throw new Error('not found');
    }
    return result;
  } catch (error) {
    console.error('Error finding dailyTimeSheetModel', error);
    throw new Error('Could not finding dailyTimeSheetModel');
  }
}

const deletedDailyTimeSheet = async (id) => {
  try {
    const result = await dailyTimeSheetModel.findByIdAndDelete(id);
    if (!result) {
      throw new Error(' not found');
    }
    return result;
  } catch (error) {
    console.error('Error deleting ', error);
    throw new Error('Could not delete ');
  }
};

export {
  createDailyTimeSheet,
  deletedDailyTimeSheet,
  getDailyTimeSheet,
  updateDailyTimeSheet
}
