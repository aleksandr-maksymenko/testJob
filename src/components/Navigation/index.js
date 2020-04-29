import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from 'config';

import './Navigation.scss';

import Logo from 'assets/images/logo.svg';

export const Navigation = () => (
  <div className="header-wrapper">
    <header className="header-item">
      <Link to={routes.home} className="react-link">
        <img className="logo" src={Logo} alt="React" />
      </Link>
      <nav>
        <ul className="site-navigation">
          <li>
            <Link to={routes.home}>Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
);
