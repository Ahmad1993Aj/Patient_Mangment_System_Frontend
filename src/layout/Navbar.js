import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>

<nav className="navbar navbar-dark bg-dark">

  <div className="container p-3 my-3 bg-dark text-white">

    <a className="navbar-brand" href="#">
      Radiological Practice
    </a>
    
    <a className="navbar-brand" href="#">
      Please provide the patient's name to send them the radiology doctor's letters..!!
    </a>

    <Link className="btn btn-outline-light" to="/adduser">
       Add patient
    </Link>


  </div>
</nav>

    </div>
  )
}
