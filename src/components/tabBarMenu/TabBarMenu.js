import React from 'react';
import { NavLink } from 'react-router-dom';
import './TabBarMenu.css';

function TabBarMenu() {
  return (
    <nav className="tab-bar">
      <ul>
        <li>
          <NavLink activeClassName="active" to="/" exact>
            Vandaag
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/komende-week">
            Komende week
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default TabBarMenu;
