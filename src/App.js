import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AsideMenu from './components/AsideMenu/AsideMenu';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Settings from './pages/Settings/Settings';
import Merchants from './pages/Merchants/Merchants';
import Users from './pages/Users/Users';
import Notifications from './pages/Notifications/Notifications';
import { createBrowserHistory } from 'history';
import LoginPage from './pages/Login/Login';
import ResetPassword from './pages/ForgotPassword/ForgotPassword';
import EmailSent from './pages/ForgotPasswordEmailSent/ForgotPasswordEmailSent';
import SettingsBtw from './pages/SettingsBtw/SettingsBtw';
const App = (props) => {
  const history = createBrowserHistory();
  const [currentPage, setCurrentPage] = useState(history.location.pathname);
  const [token, setToken] = useState(
    localStorage.getItem('token') ? localStorage.getItem('token') : ''
  );
  const [user, setUser] = useState(
    localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}
  );
  return (
    <Router>
      {history.location.pathname == '/login' ||
      history.location.pathname == '/reset_password' ||
      history.location.pathname == '/email_sent' ? (
        <Switch>
          <Route path="/login">
            <LoginPage
              token={token}
              setToken={setToken}
              user={user}
              setUser={setUser}
            />
          </Route>
          <Route path="/merchants">
            <Merchants token={token} setToken={setToken} />
          </Route>
          <Route path="/users">
            <Users token={token} setToken={setToken} />
          </Route>
          <Route path="/notifications">
            <Notifications token={token} setToken={setToken} />
          </Route>
          <Route path="/settings">
            <Settings token={token} setToken={setToken} />
          </Route>
          <Route path="/reset_password">
            <ResetPassword token={token} setToken={setToken} />
          </Route>
          <Route path="/email_sent">
            <EmailSent token={token} setToken={setToken} />
          </Route>
          <Route path="/settingsbtw">
            <SettingsBtw token={token} setToken={setToken} />
          </Route>
          <Route path="/">
            <HomePage token={token} setToken={setToken} />
          </Route>
        </Switch>
      ) : (
        <div>
          <div
            className="row"
            style={{ maxWidth: '100%', margin: '0px', padding: '0px' }}
          >
            <div className="col-2">
              <AsideMenu
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
            <div className="col-10" style={{ paddingRight: '0px' }}>
              <Header
                user={user}
                setUser={setUser}
                token={token}
                setToken={setToken}
              />
              <div className="row" style={{ maxWidth: '100%' }}>
                <div className="col-12">
                  <Switch>
                    <Route path="/login">
                      <LoginPage token={token} setToken={setToken} />
                    </Route>
                    <Route path="/merchants">
                      <Merchants token={token} setToken={setToken} />
                    </Route>
                    <Route path="/users">
                      <Users token={token} setToken={setToken} />
                    </Route>
                    <Route path="/notifications">
                      <Notifications token={token} setToken={setToken} />
                    </Route>
                    <Route path="/settings">
                      <Settings token={token} setToken={setToken} />
                    </Route>
                    <Route path="/reset_password">
                      <ResetPassword token={token} setToken={setToken} />
                    </Route>
                    <Route path="/email_sent">
                      <EmailSent token={token} setToken={setToken} />
                    </Route>
                    <Route path="/settingsbtw">
                      <SettingsBtw token={token} setToken={setToken} />
                    </Route>
                    <Route path="/">
                      <HomePage token={token} setToken={setToken} />
                    </Route>
                  </Switch>
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>
      )}
    </Router>
  );
};
export default App;
