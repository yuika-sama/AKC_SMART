import express from 'express';
import {
  createDailyTimeSheet,
  getAllDailyTimeSheets,
  getDailyTimeSheetByEmployeeCode,
  updateDailyTimeSheet,
  deleteDailyTimeSheet, getDailyTimeSheetsByEmployeeCode
} from '../../controllers/staff/dailyTimeSheetController.js';


const dailyTimeSheetRouter = express.Router();

dailyTimeSheetRouter.post('/daily-time-sheet', createDailyTimeSheet);

dailyTimeSheetRouter.get('/daily-time-sheets', getAllDailyTimeSheets);

dailyTimeSheetRouter.get('/daily-time-sheet/:employeeCode', getDailyTimeSheetByEmployeeCode);

dailyTimeSheetRouter.get('/daily-time-sheets/employee/:employeeCode', getDailyTimeSheetsByEmployeeCode);

dailyTimeSheetRouter.put('/daily-time-sheet/:employeeCode', updateDailyTimeSheet);

dailyTimeSheetRouter.delete('/daily-time-sheet/:employeeCode', deleteDailyTimeSheet);

export default dailyTimeSheetRouter;