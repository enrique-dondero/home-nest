import React from 'react';

import 'react-datepicker/dist/react-datepicker.css'
import './styles/App.scss';
import {BrowserRouter as Router, Redirect, Switch} from "react-router-dom";

import UserProfilePage from "./components/UserProfile/UserProfilePage";
import DefaultLayout from "./layouts/DefaultLayout";
import DashboardPage from "./components/Dashboard/DashboardPage";
import UserManagementPage from './pages/UserManagement'
import PublicUsers from './components/UserManage/PublicUsers'
import BusinessProfilePage from "./components/BusinessProfile/BusinessProfilePage";

function App() {
  return (
      <div>
          <Router>
              <Switch>
                  <DefaultLayout path="/" component={() => (<Redirect to="/business" />)} exact />
                  <DefaultLayout path="/dashboard" component={DashboardPage} exact />
                  <DefaultLayout path="/business" component={BusinessProfilePage} exact />
                  <DefaultLayout path="/profile" component={() => (<h1>Coming soon</h1>)} exact />
                  <DefaultLayout path="/user-manage" component={UserManagementPage} exact />
                  <DefaultLayout path="/user-manage/public" component={PublicUsers} exact />
                  <DefaultLayout path="/coming-soon" component={() => (<h1>Coming soon</h1>)} exact />
              </Switch>
          </Router>
      </div>
  );
}

export default App;
