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
import FooterText from '../FooterText/FooterText';
const AsideMenu = (props) => {
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
    <>
      <img src={logo} alt="Logo" className="logo ml-5" />
      <div
        className="d-flex justify-content-between flex-column"
        style={{ minHeight: '83%' }}
      >
        <div>
          {imgSrc.map((item, idx) => {
            return (
              <div key={idx}>
                <Link
                  to={item.link}
                  onClick={() => {
                    props.setCurrentPage(item.link);
                  }}
                >
                  <div
                    className={
                      props.currentPage == item.link
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
        </div>
        <div>
          <FooterText />
        </div>
      </div>
    </>
  );
};
export default AsideMenu;
