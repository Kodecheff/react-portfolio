import React from 'react'

function Nav({setPage}) {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">

      <h2 className="navbar-brand" onClick={() => setPage('home')}>{`{Kodecheff}`}</h2>

      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" 
        aria-expanded="false" aria-label="Toggle navigation">
        &#9776;
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item" onClick={() => setPage('home')}>Home</li>
          <li className="nav-item" onClick={() => setPage('about')}>About</li>
          <li className="nav-item" onClick={() => setPage('projects')}>Projects</li>
          <li className="nav-item" onClick={() => setPage('blog')}>Blog</li>
          <li className="nav-item" onClick={() => setPage('contact')}>Contact</li>
        </ul>
      </div>

      <button className="hireMe" type="button" onClick={() => setPage('contact')}>Hire Me</button>
    </nav>
  )
}

export default Nav;
