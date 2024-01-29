import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import TaskForm from '../Components/TaskForm'
// import TaskEditForm from './Components/TaskEditForm'
import TasksLists from '../Components/TasksLists'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<TaskForm />}/>
        <Route path='/todos' element={<TasksLists />}/>
    </Routes>
  )
}

export default AllRoutes