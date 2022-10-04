import React from 'react'
import Section from './section'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
function Content({validationLogin}) {
  return (
      
        <div>
            <Navbar validationLogin={validationLogin} />
            <Outlet />
        </div>
   
    
  )
}

export default Content
