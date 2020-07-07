import React from 'react';
import './AsideMenu.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';
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
  let history = useHistory();
  console.log('the path location is', history.location.pathname);
  return (
    <div>
      <img src={logo} alt="Logo" className="logo ml-5" />
      {imgSrc.map((item, idx) => {
        return (
          <div key={idx} className="menu-text">
            <Link to={item.link}>
              <div
                className={
                  history.location.pathname == item.link
                    ? 'menu-text active'
                    : 'menu-text'
                }
              >
                <img src={item.source} alt={item.name} className="mr-3" />
                <div className="menu-items-text"> {item.name}</div>
              </div>
            </Link>
          </div>
        );
      })}
      <div className="bottom-sidebar solid">
        <div className="menu-footer-text">© 2020 IT’S READY</div>
      </div>
    </div>
  );
};
export default AsideMenu;
