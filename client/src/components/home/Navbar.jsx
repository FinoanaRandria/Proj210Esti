import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
function Navbar({validationLogin}) {
  console.log("prof : ",validationLogin)
  return (
    <nav>
      <ul>
        <Link to='/home'> <li>Aceuille</li> </Link>
        <Link to='/home/planing'> <li>Planing</li> </Link>
        {validationLogin[0].status == 1 && <Link to='/home/gestioProf'> <li>Gestion Des Profs </li> </Link>}
        {validationLogin[0].status == 1 && <Link to='/home/gestioSalle'> <li>Gestion Des Salles</li> </Link>}
        {validationLogin[0].status == 0 && <Link to='/home/gestioSalle'> <li>Facture</li> </Link>}
        <Link to='/home/ProfAttest'> <li>Prof Attestation</li> </Link>
        
      </ul>
    </nav>
  )
}

export default Navbar