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
        {validationLogin[0].status == 1 && <Link to='/home/gestioSalle'> <li> Salles</li> </Link>}
        <Link to='/home/Module'> <li> Module </li> </Link>
        {validationLogin[0].status == 1 && <Link to='/home/gestioProf'> <li> Profs </li> </Link>}
        <Link to='/home/Etudiant'> <li> Etudiant </li> </Link>
        {validationLogin[0].status == 0 && <Link to='/home/gestioSalle'> <li>Facture</li> </Link>}
        <Link to='/home/ProfAttest'> <li> Attestation</li> </Link>
        <Link to='/home/Facture'> <li> Facture </li> </Link>
      </ul>
    </nav>
  )
}

export default Navbar