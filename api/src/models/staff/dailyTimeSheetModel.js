import mongoose from 'mongoose';

const dailyTimeSheetSchema = new mongoose.Schema({
  employeeCode: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  taskList: {
    type: [String],
    default: [],
  },
}, { timestamps: true });

const dailyTimeSheetModel = mongoose.model('DailyTimeSheet', dailyTimeSheetSchema);

export default dailyTimeSheetModel;
