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

const App = () => {
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <AsideMenu />
        </div>{" "}
        <div className="col-10">
          <Header />
          <div className="row">
            <div className="col-12">
              <Router>
                <Switch>
                  <Route exact={true} path="/" component={HomePage} />{" "}
                  <Route path="/merchants" component={Merchants} />{" "}
                  <Route path="/users" component={Users} />{" "}
                  <Route path="/notifications" component={Notifications} />{" "}
                  <Route path="/settings" component={Settings} />
                  {/* <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} /> */}{" "}
                </Switch>{" "}
              </Router>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default App;
