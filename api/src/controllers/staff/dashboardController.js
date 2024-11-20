import mongoose from 'mongoose';
import dailyTimeSheetModel from '../../models/staff/dailyTimeSheetModel.js'; // Đường dẫn model chính xác

const getMonthlyWorkingHours = async (req, res) => {
  try {
    const { employeeId } = req.params; // Lấy employeeId từ URL
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    const result = await dailyTimeSheetModel.aggregate([
      {
        $match: {
          employeeId: employeeId,
          date: { $gte: firstDayOfMonth, $lte: today }
        }
      },
      {
        $group: {
          _id: "$employeeId",
          totalWorkingHours: { $sum: "$workingHoursPerDay" }
        }
      }
    ]);

    if (result.length > 0) {
      return res.status(200).json({
        employeeId: result[0]._id,
        totalWorkingHours: result[0].totalWorkingHours
      });
    } else {
      return res.status(404).json({
        message: `No records found for employeeId: ${employeeId} in this month.`
      });
    }
  } catch (error) {
    console.error("Error in getMonthlyWorkingHours:", error);
    return res.status(500).json({
      message: "Error retrieving monthly working hours.",
      error: error.message
    });
  }
};

const dashboardController = {
  getMonthlyWorkingHours
}


export default dashboardController;
