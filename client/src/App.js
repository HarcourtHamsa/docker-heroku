import React, {useContext} from 'react';
import {AppContext} from './contexts/context';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Login from './components/auth/Login';
import Dashboard from './components/Dashboard';
import TransferMoney from './components/TransferMoney';
import RegisterPage from './components/RegisterPage';
import Error404 from './components/Error404';
import UserProfile from './components/UserProfile';
import Transactions from './components/Transactions';
import AdminDashboard from './components/AdminDashboard';
import AdminEditUserProfile from './components/AdminEditUserProfile';
import Landing from './components/Landing';
import Loan from './components/Loan';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute
          exact
          path="/dashboard/transfer"
          component={TransferMoney}
        />
        <PrivateRoute exact path="/dashboard/profile" component={UserProfile} />
        <PrivateRoute exact path="/dashboard/loan" component={Loan} />
        <PrivateRoute
          exact
          path="/dashboard/transactions"
          component={Transactions}
        />
        <PrivateRoute exact path="/admin" component={AdminDashboard} />
        <PrivateRoute exact path="/admin/user/add" component={RegisterPage} />
        <PrivateRoute
          exact
          path="/admin/profile/:id"
          component={AdminEditUserProfile}
        />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route component={Error404} />
        
      </Switch>
    </Router>
  );
};

const PrivateRoute = ({component: Component, ...rest}) => {
  const [isAuthenticated] = useContext (AppContext);
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated
          ? <Component {...props} />
          : <Redirect
              to={{
                pathname: '/login',
              }}
            />}
    />
  );
};

export default App;
