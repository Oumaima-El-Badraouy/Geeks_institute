import React from 'react'

export default function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">My Website</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#cards">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
