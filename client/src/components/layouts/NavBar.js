import React from "react";
// eslint-disable-next-line
import { Link } from "react-router-dom";
import "./navbar.css"

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm"> <a href="/" className="navbar-brand font-weight-bold d-block d-lg-none">Nation wide</a> <button type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"> <span className="navbar-toggler-icon"></span> </button>
        <div id="navbarContent" className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item dropdown megamenu"><a id="megamneu" href="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle font-weight-bold text-uppercase">Services</a>
              <div aria-labelledby="megamneu" className="dropdown-menu border-0 p-0 m-0">
                <div className="container">
                  <div className="row bg-white rounded-0 m-0 shadow-sm">
                    <div className="col-lg-7 col-xl-8">
                      <div className="p-4">
                        <div className="row">
                          <div className="col-lg-6 mb-4">
                            <h6 className="font-weight-bold text-uppercase">Credit cards</h6>
                            <ul className="list-unstyled">
                              <li className="nav-item"><a href="/" className="nav-link text-small pb-0">Lost and stolen cards</a></li>
                              <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Using my card abroad</a></li>
                              <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Paying my bills</a></li>
                              <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">ATM disputes</a></li>
                            </ul>
                          </div>
                          <div className="col-lg-6 mb-4">
                            <h6 className="font-weight-bold text-uppercase">Loans</h6>
                            <ul className="list-unstyled">
                              <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Top up your loan</a></li>
                              <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Help with your loan</a></li>
                              <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Apply for a loan</a></li>
                              <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Loans calculator</a></li>
                            </ul>
                          </div>
                          <div className="col-lg-6 mb-4">
                            <h6 className="font-weight-bold text-uppercase">Insurance</h6>
                            <ul className="list-unstyled">
                              <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Travel insurance support and claims</a></li>
                              <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Apply for a Home insurance</a></li>
                              <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Apply for life insurance</a></li>
                              <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Apply for car insurance</a></li>
                            </ul>
                          </div>
                          <div className="col-lg-6 mb-4">
                            <h6 className="font-weight-bold text-uppercase">Mortages</h6>
                            <ul className="list-unstyled">
                              <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Mortage rates</a></li>
                              <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Mortage calculators</a></li>
                              <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">First time buyers</a></li>
                              <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Moving home</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-xl-4 px-0 d-none d-lg-block" style={{background: "center center url(https://images.unsplash.com/photo-1533637267520-4dfd6aa7ee93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80)no-repeat", backgroundSize: "cover"}}></div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item"><a href="/" className="nav-link font-weight-bold text-uppercase">Nectar</a></li>
            <li className="nav-item"><a href="/" className="nav-link font-weight-bold text-uppercase">Help & support</a></li>
            <li className="nav-item"><a href="/login" className="nav-link font-weight-bold text-uppercase">Log in</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
