import React, {useContext} from 'react';
import '../../src/index.css';
import {AppContext} from '../contexts/context';
import {
  RiUserLine,
  RiDashboardLine,
  RiUserSharedLine,
  RiWallet3Line,
  RiNewspaperLine,
  RiLockLine,
  RiGlobalLine,
} from 'react-icons/ri';

import {Link, Redirect} from 'react-router-dom';

export default function SidebarContent () {
  const [isAuthenticated, setIsAuthenticated, userDetails] = useContext (
    AppContext
  );

  const handleLogout = () => {
    setIsAuthenticated (false);
  };

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="gradient">
      <div className="text-center text-warning mt-3">
        <RiGlobalLine size="30" />
        <p>NATION WIDE </p>
      </div>
      <div className="" style={theme}>
        <div>
          <div className="text-center">
            <img
              src={userDetails.image}
              className="photo "
              alt="profile_photo"
            />
            <p className="small mb-3">ACCONT NO: 00223234040</p>
            <p className="font-weight-bold">
              ACCOUNT STATUS : <b className="text-success">Active</b>
            </p>
          </div>
          <ul>
            <li>
              <Link to="/dashboard" className="small text-white ">
                <RiDashboardLine size="25" color="white" />  {' '}
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard/transfer" className="small text-white ">
                {' '}
                <RiUserSharedLine size="25" color="white" /> {' '}
                Domestic Transfer 
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/transactions"
                className="small text-white disabled "
              >
                {' '}
                <RiNewspaperLine size="25" color="white" />  {' '}
                Transactions
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile" className="small text-white ">
                {' '}
                <RiUserLine size="25" color="white" /> {' '}
                My profile
              </Link>
            </li>
            <li>
              <Link to="/dashboard/loan" className="small text-white ">
                {' '}
                <RiWallet3Line size="25" color="white" /> {' '}
                Loan Application
              </Link>
            </li>
            <li>
              <Link to="/" onClick={handleLogout} className="small text-white ">
                {' '}
                <RiLockLine size="25" color="white" /> {' '}
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const theme = {
  lineHeight: '5em',
};
