import React, {useContext, useState, useEffect} from 'react';
import publicIp from 'public-ip';
import {AppContext} from '../contexts/context';
import DashboardNavbar from './DashboardNavbar';
import IdleTimerContainer from './IdleTimerContainer';

import {RiGlobalLine} from 'react-icons/ri';

export default function Transactions () {
  const [, , userDetails] = useContext (AppContext);

  const [ip, setIp] = useState ('');

  const getIp = () => {
    publicIp.v4 ().then (data => {
      setIp (data);
    });
  };

  useEffect (() => {
    getIp ();
  }, []);

  return (
    <div>
      <DashboardNavbar />
      <IdleTimerContainer />
      <div className="custom-margin container">
        <p className="text-muted mb-4">
          WELCOME TO YOUR ONLINE BANKING STATEMENT
        </p>

        <div className="row">
          <div className="col">
            <div className="card p-3">
              <p className="text-muted">BOOK BALANCE</p>
              <p className="font-weight-bold text-warning">
                ${userDetails.balance}
              </p>
            </div>
          </div>
          <div className="col">
            <div className="card p-3">
              <p className="text-muted">AVAILABLE BALANCE</p>
              <p className="font-weight-bold text-success">
                ${userDetails.balance}
              </p>
            </div>
          </div>
          <div className="col">
            <div className="card p-3">
              <p className="text-muted">ACCOUT LOGGED IN FROM</p>
              <p className="font-weight-bold text-success">{ip}</p>
            </div>
          </div>
        </div>

        <p className="text-muted mb-4">RECENT TRANSFER STATEMENT</p>
        <div className="text-center">
          <h1 className="h1 text-warning"><RiGlobalLine /> Nation wide</h1>
          <p
          >{`Account (00223234020) with name (${userDetails.firstname} ${userDetails.lastname}) statement`}</p>
        </div>

        <div className="card p-3">
          <table class="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">TYPE</th>
                <th scope="col">AMOUNT</th>
                <th scope="col">TO/FROM</th>
                <th scope="col">DESCRIPTION</th>
                <th scope="col">DATE/TIME</th>
                <th scope="col">STATUS</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Credit</td>
                <td>$40</td>
                <td>Jacob Banks</td>
                <td>Mortage</td>
                <td>08-04-20</td>
                <td>Success</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
