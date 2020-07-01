import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AsideMenu from "./components/AsideMenu/AsideMenu";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Settings from "./pages/Settings/Settings";
import Merchants from "./pages/Merchants/Merchants";
import Users from "./pages/Users/Users";
import Notifications from "./pages/Notifications/Notifications";
import { createBrowserHistory } from "history";
import Login from "./pages/Login/Login";
const App = (props) => {
  const history = createBrowserHistory();
  return (
    <Router>
      <div>
        <div className="row">
          {history.location.pathname == "/login" ? (
            ""
          ) : (
            <div className="col-2">
              <AsideMenu />
            </div>
          )}
          <div className="col-10">
            {history.location.pathname == "/login" ? "" : <Header />}
            <div className="row">
              <div className="col-12">
                <Switch>
                  <Route exact={true} path="/" component={HomePage} />{" "}
                  <Route path="/merchants" component={Merchants} />{" "}
                  <Route path="/users" component={Users} />{" "}
                  <Route path="/notifications" component={Notifications} />{" "}
                  <Route path="/settings" component={Settings} />
                  <Route path="/login" component={Login} />
                  {/* <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} /> */}{" "}
                </Switch>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </Router>
  );
};

export default App;