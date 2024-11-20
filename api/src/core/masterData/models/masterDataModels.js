import mongoose from 'mongoose';
import DATATYPE from '../../core/constants/dataTypeConstants/datatypeConstants';

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  firstName: {
    type: DATATYPE.STRING,
    required: true
  },
  lastName: {
    type: DATATYPE.STRING,
    required: true
  },
  email: {
    type: DATATYPE.STRING,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: DATATYPE.STRING,
    required: true,
    unique: true
  },
  address: {
    type: DATATYPE.STRING,
    required: true
  },
  dateOfBirth: {
    type: DATATYPE.DATE,
  },
  gender: {
    type: DATATYPE.STRING,
    enum: ['Male', 'Female', 'Other'],
  },
  profilePicture: {
    type: DATATYPE.STRING,
  },
  accountStatus: {
    type: DATATYPE.STRING,
    enum: ['Active', 'Inactive', 'Banned'],
    default: 'Active'
  },
  registrationDate: {
    type: DATATYPE.DATE,
    default: Date.now
  },
  lastLogin: {
    type: DATATYPE.DATE,
  },
  loyaltyPoints: {
    type: DATATYPE.NUMBER,
    default: 0
  },
  paymentMethod: {
    type: DATATYPE.STRING,
    enum: ['Credit Card', 'PayPal', 'Bank Transfer'],
  },
  shippingAddress: {
    type: DATATYPE.STRING,
  },
  billingAddress: {
    type: DATATYPE.STRING,
  },
  preferredLanguage: {
    type: DATATYPE.STRING,
    default: 'English'
  },
  notes: {
    type: DATATYPE.STRING,
  }
}, {
  timestamps: true
});

const customerModel = mongoose.model('Customer', customerSchema);

export default customerModel;
