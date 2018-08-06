import React from 'react'
import AllTasks from './tasks/AllTasks'
import KiwiClient from './irc/KiwiClient'

const SideBar = () => {
  return (
    <div>
      <AllTasks />
      <KiwiClient />
    </div>
  )
}
export default SideBar
