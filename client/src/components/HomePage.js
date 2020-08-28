import React from "react";
import NavBar from "./NavBar";
import Main from "./Main";
import Footer from "./Footer";
import { RiArrowRightLine } from "react-icons/ri";

export default function HomePage() {
  return (
    <div className="">
      <NavBar />
      <div className="bg-secondary p-3 jumbotron-fluid">
        <div className="container">
          <h1 className="text-blue font-weight-bold">FINANCIAL <br /> SOLUTIONS</h1>
          <p className="pb-3 small text-white">
            Orb bank helps you achieve financial freedom by enabling you save{" "}
            <br />
            responsibly and invest on the go.
          </p>
          <p className="pb-3 small text-white">
            Earn 10% - 15.5% interests on savings. <br />
            Earn over 25% return on investments.
          </p>
          <a href="/login" className="btn btn-blue">
            <small>sign up now </small><RiArrowRightLine />
          </a>
        </div>
      </div>
      <Main />
      <Footer />
    </div>
  );
}
