import dailyTimeSheetRouter from "./staff/dailyTimeSheetRoute.js";

const routes = (app) => {
  app.use('/api/v1/staff', dailyTimeSheetRouter);
}
export default routes
