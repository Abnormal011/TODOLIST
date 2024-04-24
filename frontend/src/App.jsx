/* eslint-disable no-unused-vars */
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateTask from './pages/CreatTask'
import DeleteTask from './pages/DeleteTask'
import EditTask from './pages/EditTask'
import ShowTask from './pages/ShowTask'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/tasks/create' element={<CreateTask />}/>
      <Route path='/tasks/details/:id' element={<ShowTask />}/>
      <Route path='/tasks/edit/:id' element={<EditTask />}/>
      <Route path='/tasks/delete/:id' element={<DeleteTask />}/>
    </Routes>
  )
}

export default App