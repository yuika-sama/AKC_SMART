// // server.js
// import tAuthAPP from './core/tAuth/index.js';
// import SERVICE_PORT from './utils/servicePort.js';

// const apps = [
//   { createApp: tAuthAPP, port: SERVICE_PORT.AUTH },
//   // { createApp: createAuthApp2, port: SERVICE_PORT.AUTH2 },
// ];

// apps.reduce((promise, { createApp, port }, index) => {
//   return promise.then(() => {
//     return createApp().then((app) => {
//       app.listen(port, () => {
//         console.log(`PORT AUTH${index + 1} ======${port}====== IS RUNNING`);
//       });
//     });
//   });
// }, Promise.resolve())
//   .catch((error) => {
//     console.log('Error starting apps:', error);
//   });


import express from 'express';
// import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/index.js';
import dotenv from 'dotenv';
dotenv.config();

const App = express();

App.use(express.json());
App.use(cors());

App.get('/App', function (req, res) {
  res.send('HELLO IM HIEP!');
});


routes(App);
const PORT = 3001
mongoose
  .connect(process.env.MONGGODB_URL)
  .then(() => {
    console.log('App connected to database');
    App.listen(PORT, () => {
      console.log(`App is listening to port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
