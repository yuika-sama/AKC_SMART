import mongoose from 'mongoose';
import DATATYPE from '../../constants/dataTypeConstants/datatypeConstants.js';

const Schema = mongoose.Schema;

const staffSchema = new Schema({
  removed: {
    type: DATATYPE.BOOLEAN,
    default: false,
  },
  email: {
    type: DATATYPE.STRING,
    lowercase: true,
    trim: true,
    required: true,
  },
  password: {
    type: DATATYPE.STRING,
    required: true
  },
  name: {
    type: DATATYPE.STRING,
    required: true
  },
  surname: {
    type: DATATYPE.STRING,
  },
  photo: {
    type: DATATYPE.STRING,
    trim: true,
  },
  created: {
    type: DATATYPE.DATE,
    default: Date.now,
  },
  role: {
    type: DATATYPE.STRING,
    default: 'staff',
    required: true
  },
});
const staffModels = mongoose.model('Staff', staffSchema);
export default staffModels;