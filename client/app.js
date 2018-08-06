import React from 'react'

import {Navbar, SideBar, Footer} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <SideBar />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
