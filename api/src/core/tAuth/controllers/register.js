import bcrypt from 'bcryptjs';
import staffModels from '../models/staffModels.js';
import adminModels from '../models/adminModels.js';
import { STATUS_CODE_CONSTANT } from '../../constants/statusConstants/statusConstant.js';


const register = async (req, res) => {
  try {
    const { email, password, name, surname, role } = req.body;

    let existingUser;
    if (role === 'admin') {
      existingUser = await adminModels.findOne({ email });
    } else {
      existingUser = await staffModels.findOne({ email });
    }

    if (existingUser) {
      return res.status(STATUS_CODE_CONSTANT.FORBIDDEN).json({
        success: false,
        statusCode: STATUS_CODE_CONSTANT.FORBIDDEN,
        statusMessage: 'Email is already registered.',
      });
    }

    // Mã hóa mật khẩu
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Tạo người dùng mới
    let newUser;
    if (role === 'admin' || role === 'owner') {
      newUser = new adminModels({
        email,
        password: hashedPassword,
        name,
        surname,
        role,
      });
    } else {
      newUser = new staffModels({
        email,
        password: hashedPassword,
        name,
        surname,
        role,
      });
    }

    // Lưu người dùng mới vào cơ sở dữ liệu
    await newUser.save();

    res.status(STATUS_CODE_CONSTANT.CREATED).json({
      success: true,
      statusCode: STATUS_CODE_CONSTANT.CREATED,
      statusMessage: 'User created successfully.',
      user: {
        email: newUser.email,
        name: newUser.name,
        surname: newUser.surname,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(STATUS_CODE_CONSTANT.SERVER_ERROR).json({
      success: false,
      statusCode: STATUS_CODE_CONSTANT.SERVER_ERROR,
      statusMessage: 'Server error',
    });
  }
};

export default register;
