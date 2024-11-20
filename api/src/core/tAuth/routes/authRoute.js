import express from 'express';
import { getAllAdmins, getAllStaffs } from '../controllers/get.js';
import { deleteAdminById, deleteStaffById } from '../controllers/delete.js';
import { updateStaffById, updateAdminById } from '../controllers/update.js';
import register from "../controllers/register.js";
import login from "../controllers/login.js";
import adminRoleMiddleware from '../../../middlewares/admin/adminRoleMiddleware.js';
import staffRoleMiddleware from '../../../middlewares/staff/staffRoleMiddleware.js';

const authRouters = express.Router();

authRouters.delete('/deleteAdminById', adminRoleMiddleware, deleteAdminById);
authRouters.delete('/deleteStaffById', adminRoleMiddleware, deleteStaffById);

authRouters.get('/getAllAdmins', adminRoleMiddleware, getAllAdmins);
authRouters.get('/getAllStaffs', staffRoleMiddleware, getAllStaffs);

authRouters.post('/login', login);
authRouters.post('/register', register);

authRouters.put('/updateAdminById', adminRoleMiddleware, updateAdminById);
authRouters.put('/updateStaffById', staffRoleMiddleware, updateStaffById);

export default authRouters;