import React from 'react';
import { NavLink } from 'react-router-dom';
// import NavbarItem from './common/NavbarItem';

function BankingNavbar() {
  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-primary">
      {/* eslint-disable-next-line */}
      <a className="navbar-brand" href="#">
        NRB Bank
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/categories" className="nav-link" activeClassName="active">
              Categories
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/payees" className="nav-link" activeClassName="active">
              Payees
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/people" className="nav-link" activeClassName="active">
              People
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default BankingNavbar;
