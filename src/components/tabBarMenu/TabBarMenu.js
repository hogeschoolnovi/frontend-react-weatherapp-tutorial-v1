import React from 'react';
import './TabBarMenu.css';

function TabBarMenu() {
  return (
    <nav className="tab-bar">
      <ul>
        <li>
          <a href="#">
            Vandaag
          </a>
        </li>
        <li>
          <a className="active" href="#">
            Komende week
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default TabBarMenu;
