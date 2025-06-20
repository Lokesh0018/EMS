import React, { useEffect, useState } from 'react';
import './App.css';
import Navigate from './Navigate';

import { Route, Routes } from 'react-router-dom';
import AddEmp from './operations/AddEmp';
import ViewEmp from './operations/ViewEmp';
import UpdateEmp from './operations/UpdateEmp';
import DeleteEmp from './operations/DeleteEmp';
import Table from './operations/Table';


function App() {

  return (
    <div className="App">
        <Navigate />
        <Routes>
          <Route path='/employees' element={<Table />} />
          <Route path='/employee/add' element={<AddEmp />} />
          <Route path='/employee/view' element={<ViewEmp />} />
          <Route path='/employee/edit' element={<UpdateEmp />} />
          <Route path='/employee/delete' element={<DeleteEmp />} />
        </Routes>

    </div>
  );
}

export default App;
