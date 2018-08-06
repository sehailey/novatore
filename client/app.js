import React from 'react'

import {Navbar, SideBar, Footer} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="container">
        <div className="row">
          <SideBar />
          <Routes />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
