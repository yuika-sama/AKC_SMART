import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';  // Import Provider
import { leftMenustore } from './store/leftMenuStore.js';
import DashboardPage from './pages/DashboardPage.jsx';
import NewDashboardPage from './pages/NewDashboardPage.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={leftMenustore}>

      <Router>
        <NewDashboardPage/>
      </Router>


    </Provider>
  </React.StrictMode>
);

reportWebVitals();
