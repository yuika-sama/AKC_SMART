import express from "express";
import dailyTimeSheetController from "../../controllers/staff/dailyTimeSheetController.js";
import dashboardController from "../../controllers/staff/dashBoardController.js";
const dailyTimeSheetRouter = express.Router();


dailyTimeSheetRouter.get('/getDailyTimeSheetByID/:id', dailyTimeSheetController.getDailyTimeSheetById);
dailyTimeSheetRouter.get('/getDailyTimeSheet', dailyTimeSheetController.getAllDailyTimeSheet);
dailyTimeSheetRouter.get('/getLast30DaysTimeSheets', dailyTimeSheetController.getLast30DaysTimeSheets);
dailyTimeSheetRouter.get('/getPaginatedTimeSheets', dailyTimeSheetController.getPaginatedTimeSheets);
dailyTimeSheetRouter.get('/getEmployeeWorkingHours/:employeeId', dashboardController.getMonthlyWorkingHours);

dailyTimeSheetRouter.post('/createDailyTimeSheet', dailyTimeSheetController.createDailyTimeSheet);
// dailyTimeSheetRouter.post('/createMultipleTimeSheets', dailyTimeSheetController.createMultipleTimeSheets);

dailyTimeSheetRouter.put('/updateDailyTimeSheet/:id', dailyTimeSheetController.updateDailyTimeSheet);

dailyTimeSheetRouter.delete('/deleteDailyTimeSheet/:id', dailyTimeSheetController.deletedDailyTimeSheet);


export default dailyTimeSheetRouter;