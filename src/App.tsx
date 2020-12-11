import React from 'react';
import Login from './features/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { loginState } from './features/Login/LoginSlice';
import ProtectedRoute from './components/protectedRoute';
import EmployeesList from './features/employeesList/EmployeesList';

function App(props: any) {
  const loginStateValues = useSelector(loginState);
  return (
    <Router>
      <Switch>
        <Route
          path="/login"
          render={(props: RouteComponentProps) => (
            <Login routerProps={props} />
          )}
        />

        <ProtectedRoute
          path="/employees-list"
          render={(props: any) => {
            return < EmployeesList employeesList={loginStateValues.allEmployeesList} routerProps={props} />
          }}
          isLoggedIn={loginStateValues.isUserLoggedIn}
        />

        <Redirect to="/login" from="/" />
      </Switch>
    </Router>
  );
}

export default App;
