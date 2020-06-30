import React from 'react';
import './AsideMenu.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Nav } from 'react-bootstrap';
import clockicon from '../../assets/clockicon.png';
import homeicon from '../../assets/homeicon.png';
import planeicon from '../../assets/planeicon.png';
import settingsicon from '../../assets/settingsicon.png';
import usericon from '../../assets/usericon.png';

const AsideMenu = () => {
  const imgSrc = [
    {
      source: clockicon,
      name: 'HOME',
      link: '/',
    },
    {
      source: homeicon,
      name: 'HANDELAARS',
      link: '/merchants',
    },
    {
      source: usericon,
      name: 'GEBRUIKERS',
      link: '/users',
    },
    {
      source: planeicon,
      name: 'PUSHBERICHTEN',
      link: '/notifications',
    },
    {
      source: settingsicon,
      name: 'INSTELLINGEN',
      link: '/settings',
    },
  ];

  return (
    <Router>
      <div className="container">
        <img src={logo} alt="Logo" className="logo mb-5" />

        {imgSrc.map((item, idx) => {
          return (
            <div key={idx} className="col-4 menu-text">
              <Link to={item.link}>
                <div className="menu-text">
                  <img src={item.source} alt={item.name} className="mr-3" />
                  {item.name}
                </div>
              </Link>
            </div>
          );
        })}

        <div className="bottom-sidebar solid">
          <div className="menu-footer-text">© 2020 IT’S READY</div>
        </div>
      </div>
    </Router>
  );
};

export default AsideMenu;
