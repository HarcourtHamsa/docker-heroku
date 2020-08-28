import React, {useContext, useState, useEffect} from 'react';
import publicIp from 'public-ip';
import visa_img from '../images/visa.png';
import {RiCoinsLine, RiGlobalLine} from 'react-icons/ri';
import './dashboard.css';
import {Link} from 'react-router-dom';
import {AppContext} from '../contexts/context';
import DashboardNavbar from './DashboardNavbar';
import IdleTimerContainer from './IdleTimerContainer';
import FloatingBtn from './layouts/FloatingBtn';

export default function Dashboard () {
  const [ip, setIp] = useState ('');
  const [isAuthenticated, setIsAuthenticated, userDetails] = useContext (
    AppContext
  );

  const getIp = () => {
    publicIp.v4 ().then (data => {
      setIp (data);
    });
  };

  useEffect (
    () => {
      getIp ();
      const stateFromLocalState = localStorage.getItem ('is-authenticated');
      if (stateFromLocalState) {
        setIsAuthenticated (JSON.parse (stateFromLocalState));
        console.log ('Getting local storage');
      }
    },
    [isAuthenticated, setIsAuthenticated]
  );

  useEffect (() => {
    localStorage.setItem ('is-authenticated', JSON.stringify (isAuthenticated));
    console.log ('Setting Local Storage');
  });

  return (
    <div className="">
      <DashboardNavbar />
      <IdleTimerContainer />
      <FloatingBtn />

      <div className="container mt-5">
        <h3 className="font-weight-bold h3 custom-margin">
          Hi, {userDetails.firstname} {userDetails.lastname} , welcome back!
        </h3>
        <small className="text-muted mb-3">Banking Like Never Before</small>
        <div className="row text-center">
          <div className="col-xl-6">
            <div className="card p-3">
              <div className="card-body text-justify">
                <p className="text-muted mb-4">AVAILABLE BALANCE</p>
                <img
                  src={visa_img}
                  alt="visa_logo"
                  className="float-right"
                  width="50px"
                  height="50px"
                />

                <RiCoinsLine size="30px" />
                <p className="h3 font-weight-bold mb-4">
                  <b className="text-muted">$</b>{userDetails.balance}
                </p>

                <p className="text-muted mb-4">YOUR ACCOUNT NUMBER</p>

                <p className="font-weight-bold h3 mb-4">00223234020</p>

                <div className="row">
                  <div className="col">
                    <p className="text-muted small">ACCOUNT HOLDER</p>
                    <p>{userDetails.firstname} {userDetails.lastname}</p>
                  </div>
                  <div className="col">
                    <p className="text-muted small">ACCOUNT TYPE</p>
                    <p>Savings</p>
                  </div>
                  <div className="col">
                    <p className="text-muted small">ACCOUNT STATUS</p>
                    <p>Active</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="row">
              <div className="col">
                <div className="card p-3">
                  <p className="font-weight-bold mb-3">ACCOUNT LOGGED FROM</p>

                  <p className="text-muted">This computer ip</p>
                  <RiGlobalLine size="30px" />
                  <p className="h3">{ip}</p>
                </div>
              </div>

              <div className="col">
                <div className="card  p-3">
                  <div className="">
                    <p className="font-weight-bold mb-3">TOTAL BOOK BALANCE</p>
                    <RiCoinsLine size="50" />
                    <p className="text-muted ">
                      Balance: ${userDetails.balance}
                    </p>
                    <Link
                      to="/dashboard/transfer"
                      className="btn btn-red text-white small"
                    >
                      <small>Fund Account</small>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className="card p-3">
                  <p className="card-title font-weight-bold">
                    ATM CARD DETAILS
                  </p>
                  <div className="card-body">
                    <form>
                      <label className="text-success font-weight-bold">
                        Card Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="4257 9845 7609 XXXX"
                        disabled
                      />

                      <div className="form-row">
                        <div className="col">
                          {' '}
                          <label className="text-success font-weight-bold">
                            Ex.Date
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="06/26"
                            disabled
                          />
                        </div>
                        <div className="col">
                          {' '}
                          <label className="text-success font-weight-bold">
                            Csv
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="268"
                            disabled
                          />
                        </div>
                        <div className="col">
                          {' '}
                          <label className="text-success font-weight-bold">
                            Pin
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="0804"
                            disabled
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="font-weight-bold">YOUR FINANCIAL STATEMENT</p>
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
