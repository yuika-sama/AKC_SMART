import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import adminModels from '../models/adminModels.js';
import staffModels from '../models/staffModels.js';
import messageHandlersConstants from '../../../utils/statusMessageHandlers.js';
import { STATUS_CODE_CONSTANT, STATUS_MESSAGE_CONSTANT } from '../../constants/statusConstants/statusConstant.js';

dotenv.config();

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Tìm người dùng trong cơ sở dữ liệu
    let user;
    user = await adminModels.findOne({ email });
    if (!user) {
      user = await staffModels.findOne({ email });
    }

    if (!user) {
      res.status(STATUS_CODE_CONSTANT.NOT_FOUND).json({
        success: false,
        statusCode: STATUS_CODE_CONSTANT.NOT_FOUND,
        statusMessage: 'Not found your email',
      });
    }

    // Kiểm tra mật khẩu
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(STATUS_CODE_CONSTANT.FORBIDDEN).json({
        success: false,
        statusMessage: 'Invalid credentials (Thông tin xác thực ko hợp lệ).',
      });
    }


    // Tạo token JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '15d' }
    );

    res.status(STATUS_CODE_CONSTANT.SUCCESS).json({
      success: true,
      statusMessage: 'Successfully logged in.',
      user: {
        _id: user._id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        role: user.role,
        token,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(STATUS_CODE_CONSTANT.SERVER_ERROR).json({
      success: false,
      statusMessage: 'Server error',
    });
  }
};

export default login;
