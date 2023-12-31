// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './auth/login';
import Dashboard from './dashboard/dashboard';
import Today from './dashboard/today';
import Records from './dashboard/records';
import RecordEdit from './dashboard/recordedit';


function App() {
  return (
    <>
       <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/records" element={<Records/>} />

      <Route path="/today" element={<Today/>} />

      <Route path="/edit" element={<RecordEdit/>} />


    

      
        
    </Routes>
  </BrowserRouter>


    </>
     
  );
}

export default App;
