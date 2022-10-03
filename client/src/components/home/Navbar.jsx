import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav>
      <ul>
        <Link to='/home'> <li>Aceuille</li> </Link>
        <Link to='/home/planing'> <li>Planing</li> </Link>
        <Link to='/home/gestioProf'> <li>Gestion Des Profs </li> </Link>
        <Link to='/home/gestioSalle'> <li>Gestion Des Salles</li> </Link>
        <Link to='/home/ProfAttest'> <li>Prof Attestation</li> </Link>
        
      </ul>
    </nav>
  )
}

export default Navbar