import mongoose from 'mongoose';
import DATATYPE from '../../core/constants/dataTypeConstants/datatypeConstants';
const Schema = mongoose.Schema;

const orderPurchaseSchema = new Schema({
  orderID: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  },
  customerID: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  productID: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  productName: {
    type: DATATYPE.STRING,
    required: true
  },
  quantity: {
    type: DATATYPE.NUMBER,
    required: true
  },
  pricePerUnit: {
    type: DATATYPE.NUMBER,
    required: true
  },
  totalPrice: {
    type: DATATYPE.NUMBER,
    required: true
  },
  orderDate: {
    type: DATATYPE.DATE,
    required: true
  },
  shippingAddress: {
    type: DATATYPE.STRING,
    required: true
  },
  paymentMethod: {
    type: DATATYPE.STRING,
    enum: ['Credit Card', 'Bank Transfer', 'E-Wallet'],
    required: true
  },
  paymentStatus: {
    type: DATATYPE.STRING,
    enum: ['Paid', 'Pending', 'Failed'],
    default: 'Pending'
  },
  orderStatus: {
    type: DATATYPE.STRING,
    enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
    default: 'Pending'
  },
  shippingStatus: {
    type: DATATYPE.STRING,
    enum: ['In Transit', 'Delivered', 'Returned'],
    default: 'In Transit'
  },
  trackingNumber: {
    type: DATATYPE.STRING,
  },
  discount: {
    type: DATATYPE.NUMBER,
    default: 0
  },
  tax: {
    type: DATATYPE.NUMBER,
    required: true
  },
  totalAfterDiscount: {
    type: DATATYPE.NUMBER,
    required: true
  },
  notes: {
    type: DATATYPE.STRING,
  }
}, {
  timestamps: true
});

const orderPurchaseModel = mongoose.model('OrderPurchase', orderPurchaseSchema);

export default orderPurchaseModel;
