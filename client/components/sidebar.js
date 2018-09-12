import React from 'react'
import AllTasks from './tasks/AllTasks'
import KiwiClient from './irc/KiwiClient'

const SideBar = () => {
  return (
    <div className="sidenav">
      <AllTasks />
    </div>
  )
}
export default SideBar
