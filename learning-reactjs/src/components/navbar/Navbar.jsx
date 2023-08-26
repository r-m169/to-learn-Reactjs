import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../Auth/Login/Login';
import Register from '../Auth/register/Register';
import './navbar.css';

const Navbar = () => {
  const location = useLocation();
  const routesWithNavbar = [
    '/products',
    '/product/',
    '/contact',
    '/about',
    '/info',
  ];

  const showNavbar = routesWithNavbar.some(route => location.pathname.startsWith(route));

  useEffect(() => {
    if (showNavbar) {
      // Perform any additional actions when Navbar is shown
    }
  }, [showNavbar]);

  return (
    showNavbar && (
      <div className="colored-navbar">
        <nav className="navbar navbar-expand-lg navbar-light p-5">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/products">
             
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ color: 'rgb(255, 255, 255)', backgroundColor: '#F7F1E4' }}
            >
              <span className="navbar-toggler-icon" style={{ color: 'rgb(255, 255, 255)' }}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <div className="ms-auto">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/products">
                      Home
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                     
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/info">
                      Info
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  );
};

export default Navbar;
