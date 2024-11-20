import dailyTimeSheetModel from "../../models/staff/dailyTimeSheetModel.js";
import statusController from "../../utils/statusController.js";

const createDailyTimeSheet = async (req, res) => {
  try {
    if (
      !req.body.createdBy ||
      !req.body.department ||
      !req.body.email ||
      !req.body.timeSheetId ||
      !req.body.employeeId ||
      !req.body.date ||
      !req.body.checkIn ||
      !req.body.checkOut ||
      !req.body.workingHoursPerDay ||
      !req.body.status ||
      !req.body.approvalStatus
    ) {
      return res.status(400).send({
        message: 'Send all required fields',
      });
    }
    if (req.body.employeeId) {
      const existingTimeSheet = await dailyTimeSheetModel.findOne({
        employeeId: req.body.employeeId,
      });
      if (existingTimeSheet) {
        return res.status(400).send({ message: 'TimeSheet already exists' });
      }
    }
    const newTimeSheet = {


      createedBy: req.body.createdBy,
      employeeId: req.body.employeeId,
      department: req.body.department,
      email: req.body.email,
      timeSheetId: req.body.timeSheetId,
      date: req.body.date,
      checkIn: req.body.checkIn,
      checkOut: req.body.checkOut,
      workingHoursPerDay: req.body.workingHoursPerDay,
      status: req.body.status,
      approvalStatus: req.body.approvalStatus,
      notes: req.body.notes,
    }
    const timeSheet = await dailyTimeSheetModel.create(newTimeSheet);
    return res.status(201).send({
      state: statusController.CREATED,
      data: timeSheet
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
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
      return res.status(404).json({
        message: 'Time sheet not found',
        error: error.message
      });
    }

    return updatedTimeSheet;
  } catch (error) {
    console.error('Error updating dailyTimeSheet', error);
    return res.status(400).json({
      message: 'Could not update dailyTimeSheet'
    });
  }
};

const getDailyTimeSheetById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await dailyTimeSheetModel.findById(id);
    if (!result) {
      return res.status(404).json({
        message: 'Not found'
      });
    }
    return res.status(200).json({
      message: statusController.FOUNDED,
      data: result
    });
  } catch (error) {
    console.error('Error finding dailyTimeSheetModel', error);
    return res.status(500).json({
      error: error.message
    });
  }
};

const getAllDailyTimeSheet = async (req, res) => {
  try {
    const count = await dailyTimeSheetModel.countDocuments();
    const result = await dailyTimeSheetModel.find();
    if (!result || result.length === 0) {
      return res.status(404).json({
        message: 'No daily time sheets found'
      });
    }

    return res.status(200).json({
      count: count,
      state: statusController.FOUNDED,
      data: result
    });
  } catch (error) {
    console.error('Error finding dailyTimeSheetModel:', error);
    return res.status(500).json({
      message: 'Could not find daily time sheets',
      error: error.message
    });
  }
};

const getLast30DaysTimeSheets = async (req, res) => {
  try {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 30);

    const result = await dailyTimeSheetModel.find({
      date: { $gte: startDate }
    });

    if (!result || result.length === 0) {
      return res.status(404).json({
        message: 'No time sheets found in the last 30 days',
      });
    }

    return res.status(200).json({
      state: statusController.FOUNDED,
      data: result
    });
  } catch (error) {
    console.error('Error finding dailyTimeSheetModel for last 30 days:', error);
    return res.status(500).json({
      message: 'Could not retrieve daily time sheets in the last 30 days',
      error: error.message
    });
  }
};


const deletedDailyTimeSheet = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await dailyTimeSheetModel.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: 'Staff not found' });
    }
    return res.status(200).send({ message: 'Deleted successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const getPaginatedTimeSheets = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const result = await dailyTimeSheetModel.find()
      .skip(skip)
      .limit(limit);

    const totalRecords = await dailyTimeSheetModel.countDocuments();

    const totalPages = Math.ceil(totalRecords / limit);

    return res.status(200).json({
      state: statusController.FOUNDED,
      page: page,
      totalPages: totalPages,
      totalRecords: totalRecords,
      data: result
    });
  } catch (error) {
    console.error('Error finding dailyTimeSheetModel with pagination:', error);
    return res.status(500).json({
      message: 'Could not retrieve paginated daily time sheets',
      error: error.message
    });
  }
};


// const createMultipleTimeSheets = async (req, res) => {
//   try {
//     // Dữ liệu bạn muốn chèn vào cơ sở dữ liệu
//     const timeSheetsData = [
//       {
//         "createdBy": "John Doe",
//         "employeeId": "EMP-001",
//         "department": "Sales",
//         "email": "emp015@example.com", "timeSheetId": "TS-001",
//         "date": "2024-10-01",
//         "checkIn": "2024-10-01T08:00:00",
//         "checkOut": "2024-10-01T17:00:00",
//         "workingHoursPerDay": 8,
//         "status": "On Time",
//         "approvalStatus": "approved",
//         "notes": "Completed sales tasks"
//       },
//       {
//         "createdBy": "John Doe",
//         "employeeId": "EMP-001",
//         "department": "Sales",
//         "email": "emp015@example.com", "timeSheetId": "TS-002",
//         "date": "2024-10-02",
//         "checkIn": "2024-10-02T09:00:00",
//         "checkOut": "2024-10-02T18:00:00",
//         "workingHoursPerDay": 8,
//         "status": "On Time",
//         "approvalStatus": "approved",
//         "notes": "Marketing campaign work"
//       },
//       {
//         "createdBy": "John Doe",
//         "employeeId": "EMP-001",
//         "department": "Sales",
//         "email": "emp015@example.com", "timeSheetId": "TS-003",
//         "date": "2024-10-03",
//         "checkIn": "2024-10-03T08:30:00",
//         "checkOut": "2024-10-03T17:30:00",
//         "workingHoursPerDay": 8,
//         "status": "Late",
//         "approvalStatus": "draft",
//         "notes": "Bug fixing"
//       },
//       {
//         "createdBy": "John Doe",
//         "employeeId": "EMP-001",
//         "department": "Sales",
//         "email": "emp015@example.com", "timeSheetId": "TS-004",
//         "date": "2024-10-04",
//         "checkIn": "2024-10-04T09:00:00",
//         "checkOut": "2024-10-04T18:00:00",
//         "workingHoursPerDay": 8,
//         "status": "On Time",
//         "approvalStatus": "approved",
//         "notes": "Financial report generation"
//       },
//       {
//         "createdBy": "John Doe",
//         "employeeId": "EMP-001",
//         "department": "Sales",
//         "email": "emp015@example.com", "timeSheetId": "TS-005",
//         "date": "2024-10-05",
//         "checkIn": "2024-10-05T08:00:00",
//         "checkOut": "2024-10-05T17:00:00",
//         "workingHoursPerDay": 8,
//         "status": "On Time",
//         "approvalStatus": "approved",
//         "notes": "Recruitment process"
//       },
//       {
//         "createdBy": "John Doe",
//         "employeeId": "EMP-001",
//         "department": "Sales",
//         "email": "emp015@example.com", "timeSheetId": "TS-006",
//         "date": "2024-10-06",
//         "checkIn": "2024-10-06T08:30:00",
//         "checkOut": "2024-10-06T17:30:00",
//         "workingHoursPerDay": 8,
//         "status": "Absent",
//         "approvalStatus": "draft",
//         "notes": "Sick leave"
//       },
//       {
//         "createdBy": "John Doe",
//         "employeeId": "EMP-001",
//         "department": "Sales",
//         "email": "emp015@example.com", "timeSheetId": "TS-007",
//         "date": "2024-10-07",
//         "checkIn": "2024-10-07T09:00:00",
//         "checkOut": "2024-10-07T18:00:00",
//         "workingHoursPerDay": 8,
//         "status": "On Time",
//         "approvalStatus": "approved",
//         "notes": "Team meeting"
//       },
//       {
//         "createdBy": "John Doe",
//         "employeeId": "EMP-001",
//         "department": "Sales",
//         "email": "emp015@example.com", "timeSheetId": "TS-008",
//         "date": "2024-10-08",
//         "checkIn": "2024-10-08T08:00:00",
//         "checkOut": "2024-10-08T17:00:00",
//         "workingHoursPerDay": 8,
//         "status": "On Time",
//         "approvalStatus": "approved",
//         "notes": "Client calls"
//       },
//       {
//         "createdBy": "John Doe",
//         "employeeId": "EMP-001",
//         "department": "Sales",
//         "email": "emp015@example.com",
//         "timeSheetId": "TS-009",
//         "date": "2024-10-09",
//         "checkIn": "2024-10-09T09:00:00",
//         "checkOut": "2024-10-09T18:00:00",
//         "workingHoursPerDay": 8,
//         "status": "On Time",
//         "approvalStatus": "approved",
//         "notes": "Product presentation"
//       },
//       {
//         "createdBy": "John Doe",
//         "employeeId": "EMP-001",
//         "department": "Sales",
//         "email": "emp015@example.com",
//         "timeSheetId": "TS-010",
//         "date": "2024-10-10",
//         "checkIn": "2024-10-10T08:30:00",
//         "checkOut": "2024-10-10T17:30:00",
//         "workingHoursPerDay": 8,
//         "status": "Late",
//         "approvalStatus": "draft",
//         "notes": "Late arrival"
//       },
//       {
//         "createdBy": "John Doe",
//         "employeeId": "EMP-001",
//         "department": "Sales",
//         "email": "emp015@example.com",
//         "timeSheetId": "TS-011",
//         "date": "2024-10-11",
//         "checkIn": "2024-10-11T08:00:00",
//         "checkOut": "2024-10-11T17:00:00",
//         "workingHoursPerDay": 8,
//         "status": "On Time",
//         "approvalStatus": "approved",
//         "notes": "Team meeting"
//       },
//       {
//         "createdBy": "John Doe",
//         "employeeId": "EMP-001",
//         "department": "Sales",
//         "email": "emp015@example.com",
//         "timeSheetId": "TS-012",
//         "date": "2024-10-12",
//         "checkIn": "2024-10-12T09:00:00",
//         "checkOut": "2024-10-12T18:00:00",
//         "workingHoursPerDay": 8,
//         "status": "On Time",
//         "approvalStatus": "approved",
//         "notes": "Sales presentation"
//       },
//       {
//         "createdBy": "John Doe",
//         "employeeId": "EMP-001",
//         "department": "Sales",
//         "email": "emp015@example.com",
//         "timeSheetId": "TS-013",
//         "date": "2024-10-13",
//         "checkIn": "2024-10-13T08:30:00",
//         "checkOut": "2024-10-13T17:30:00",
//         "workingHoursPerDay": 8,
//         "status": "Absent",
//         "approvalStatus": "draft",
//         "notes": "Vacation"
//       },
//       {
//         "createdBy": "John Doe",
//         "employeeId": "EMP-001",
//         "department": "Sales",
//         "email": "emp015@example.com",
//         "timeSheetId": "TS-014",
//         "date": "2024-10-14",
//         "checkIn": "2024-10-14T08:00:00",
//         "checkOut": "2024-10-14T17:00:00",
//         "workingHoursPerDay": 8,
//         "status": "On Time",
//         "approvalStatus": "approved",
//         "notes": "Client meeting"
//       },
//       {
//         "createdBy": "John Doe",
//         "employeeId": "EMP-001",
//         "department": "Sales",
//         "email": "emp015@example.com",
//         "timeSheetId": "TS-015",
//         "date": "2024-10-15",
//         "checkIn": "2024-10-15T09:00:00",
//         "checkOut": "2024-10-15T18:00:00",
//         "workingHoursPerDay": 8,
//         "status": "On Time",
//         "approvalStatus": "approved",
//         "notes": "Strategy planning"
//       }
//     ]
//       ;

//     const result = await dailyTimeSheetModel.insertMany(timeSheetsData);

//     return res.status(201).json({
//       message: 'Time sheets created successfully',
//       data: result
//     });
//   } catch (error) {
//     console.error('Error creating multiple time sheets:', error);
//     return res.status(500).json({
//       message: 'Could not create daily time sheets',
//       error: error.message
//     });
//   }
// };

const dailyTimeSheetController = {
  getPaginatedTimeSheets,
  getLast30DaysTimeSheets,
  getAllDailyTimeSheet,
  createDailyTimeSheet,
  deletedDailyTimeSheet,
  getDailyTimeSheetById,
  updateDailyTimeSheet
}
export default dailyTimeSheetController;
