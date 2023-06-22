import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Profile from './Profile/profile';
// import './Dashboard/components/design'
// import Dashboard from './Dashboard/dashboard';
import LoginPage from './Login/login'
import Menu from './Dashboard/components/Menu';
import Navbar from './Dashboard/components/Navbar';
import Dashboard1 from './pages/Dashboard1';
import './Dashboard/design.css'
// import User1 from './Dashboard/components/User1';
import Content from './Dashboard/components/Content';
import { Box } from '@mui/joy';
import DashboardLayout from './Dashboard/DashboardLayout';
import User1 from './pages/User1'
import TabPanel from '../src/Profile/Tabs/tabs';
import Profile from './Profile/profile';


function App() {
  return (
    <div >
     

        
      <div>
        <Routes>
          {/* <Route path="/" element={<LoginPage />} />
          <Route path="/dash" element={<DashboardLayout />} />
          <Route path='/user' element={<User1/>}/> */}
       
          <Route path="/" element={<Profile />} />
        </Routes>
      </div>
      </div>
         );
        }

 
    

         export default App;    

 