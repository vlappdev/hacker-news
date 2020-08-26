import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom'

function Navbar() {

  const { pathname } = useLocation();
  const [isOPen, setIsOPen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <Link to="/" className="navbar-brand mr-auto mr-lg-0 mr-lg-5">Hacker News</Link>
      <button onClick={() => setIsOPen(!isOPen)} className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`navbar-collapse offcanvas-collapse ${ isOPen ? " ": "hide-dd"}`} id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className={`nav-item ${ pathname === '/' && "active" }`}>
            <NavLink to="/topstories" className="nav-link">Top Stories</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/newstories" className="nav-link">New Stories</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/beststories" className="nav-link">Best Stories</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
