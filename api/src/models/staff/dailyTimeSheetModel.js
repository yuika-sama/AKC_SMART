import mongoose from 'mongoose';
import DATATYPE from '../../core/constants/dataTypeConstants/datatypeConstants.js';
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
  createdBy: {
    type: DATATYPE.STRING,
    require: true
  },
  employeeId: {
    type: DATATYPE.STRING,
    require: true
  },
  department: {
    type: DATATYPE.STRING,
    require: true
  },
  email: {
    type: DATATYPE.STRING,
    require: true
  },
  timeSheetId: {
    type: DATATYPE.STRING,
    require: true
  },
  date: {
    type: DATATYPE.DATE,
    required: true
  },
  checkIn: {
    type: DATATYPE.DATE,
    required: true
  },
  checkOut: {
    type: DATATYPE.DATE,
    required: true
  },
  workingHoursPerDay: {
    type: DATATYPE.NUMBER,
    required: true
  },
  status: {
    type: DATATYPE.STRING,
    enum: ['On Time', 'Late', 'Absent'],
    default: 'On Time'
  },
  approvalStatus: {
    type: DATATYPE.STRING,
    enum: ['draft', 'approved'],
    default: 'draft'
  },
  notes: {
    type: DATATYPE.STRING,
  }
}, {
  timestamps: true
});

const dailyTimeSheetModel = mongoose.model('dailyTimeSheet', attendanceSchema);

export default dailyTimeSheetModel;
