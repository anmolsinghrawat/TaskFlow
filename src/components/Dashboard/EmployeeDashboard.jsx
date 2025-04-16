import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListsNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        {/* Passing firstName directly from data prop */}
        <Header 
          changeUser={props.changeUser} 
          firstName={props.data?.firstName} 
        />
        <TaskListNumbers data={props.data} />
        <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard
