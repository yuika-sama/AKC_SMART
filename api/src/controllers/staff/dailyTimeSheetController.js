import dailyTimeSheetModel from "../../models/staff/dailyTimeSheetModel.js";

export const createDailyTimeSheet = async (req, res) => {
  try {
    const { employeeCode, creator, phoneNumber, gender, department, position, taskList } = req.body;

    const newDailyTimeSheet = new dailyTimeSheetModel({
      employeeCode,
      creator,
      phoneNumber,
      gender,
      department,
      position,
      taskList,
    });

    const savedDailyTimeSheet = await newDailyTimeSheet.save();
    return res.status(201).json({
      success: true,
      data: savedDailyTimeSheet,
    });
  } catch (error) {
    console.error('Error creating daily time sheet:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to create daily time sheet',
    });
  }
};

export const getAllDailyTimeSheets = async (req, res) => {
  try {
    const dailyTimeSheets = await dailyTimeSheetModel.find();
    return res.status(200).json({
      success: true,
      data: dailyTimeSheets,
    });
  } catch (error) {
    console.error('Error fetching daily time sheets:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch daily time sheets',
    });
  }
};

export const getDailyTimeSheetByEmployeeCode = async (req, res) => {
  const { employeeCode } = req.params;
  try {
    const dailyTimeSheet = await dailyTimeSheetModel.findOne({ employeeCode });
    if (!dailyTimeSheet) {
      return res.status(404).json({
        success: false,
        message: 'Daily time sheet not found',
      });
    }
    return res.status(200).json({
      success: true,
      data: dailyTimeSheet,
    });
  } catch (error) {
    console.error('Error fetching daily time sheet by employee code:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch daily time sheet',
    });
  }
};

export const updateDailyTimeSheet = async (req, res) => {
  const { employeeCode } = req.params;
  const updateData = req.body;
  try {
    const updatedDailyTimeSheet = await dailyTimeSheetModel.findOneAndUpdate(
      { employeeCode },
      { $set: updateData },
      { new: true }
    );
    if (!updatedDailyTimeSheet) {
      return res.status(404).json({
        success: false,
        message: 'Daily time sheet not found',
      });
    }
    return res.status(200).json({
      success: true,
      data: updatedDailyTimeSheet,
    });
  } catch (error) {
    console.error('Error updating daily time sheet:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to update daily time sheet',
    });
  }
};

export const deleteDailyTimeSheet = async (req, res) => {
  const { employeeCode } = req.params;
  try {
    const deletedDailyTimeSheet = await dailyTimeSheetModel.findOneAndDelete({ employeeCode });
    if (!deletedDailyTimeSheet) {
      return res.status(404).json({
        success: false,
        message: 'Daily time sheet not found',
      });
    }
    return res.status(200).json({
      success: true,
      message: 'Daily time sheet deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting daily time sheet:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete daily time sheet',
    });
  }
};


// Hàm lấy tất cả các bản ghi có chung mã nhân viên
export const getDailyTimeSheetsByEmployeeCode = async (req, res) => {
  const { employeeCode } = req.params; // Lấy employeeCode từ URL params
  try {
    const dailyTimeSheets = await dailyTimeSheetModel.find({ employeeCode });

    // Kiểm tra xem có bản ghi nào không
    if (dailyTimeSheets.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No daily time sheets found for this employee',
      });
    }

    return res.status(200).json({
      success: true,
      data: dailyTimeSheets,
    });
  } catch (error) {
    console.error('Error fetching daily time sheets by employee code:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch daily time sheets',
    });
  }
};
