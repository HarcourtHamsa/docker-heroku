import React from 'react';
import './main.css';
import {
  RiCalculatorLine,
  RiCoinsLine,
  RiFundsBoxLine,
  RiCheckLine,
  RiShieldKeyholeLine,
} from 'react-icons/ri';

const Main = () => {
  return (
    <div className="mt-0">
      <div className="">
        <div className="p-3 pt-5" style={{backgroundColor: '#c5cbe3'}}>
          <h3 className="text-blue text-center">
            Three steps to financial freedom
          </h3>
          <div className="row text-justify ">
            <div className="col-xl-4">
              <div className="card shadow">
                <div className="card-body color-b">
                  <RiCalculatorLine size="50" color="#2f2fa2" />
                  <h5 className="text-blue">Plan Money</h5>
                  <small>
                    The future can be even brighter but a goal without
                    a plan is just a wish. Use our tools to plan ahead
                    for housing, education, retirement, family & a lot more.
                  </small>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card shadow">
                <div className="card-body color-b">
                  <RiCoinsLine size="50" color="#2f2fa2" />
                  <h5 className="text-blue">Save Money</h5>
                  <small>
                    You deserve good things. Grow your savings on your
                    own terms with our completely automated process
                    & plans.
                  </small>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card shadow">
                <div className="card-body color-b">
                  <RiFundsBoxLine size="50" color="#2f2fa2" />
                  <h5 className="text-blue">Invest Money</h5>
                  <small>
                    We make investment simpler than it sounds.
                    Invest in mutual funds tailored to you and your financial
                    position,
                    and watch the returns keep rolling in.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="" style={{backgroundColor: 'whitesmoke'}}>
          <div className="p-5 color-b">
            <div className="row small text-justify">
              <div className="col-xl-6">
                <h3 className="mb-4 text-blue">
                  Your money is well protected <RiShieldKeyholeLine />
                </h3>
                <div className="mb-5">
                  <h5 className="text-blue">
                    <RiCheckLine color="green" /> Bank-grade Security
                  </h5>
                  <p>
                    Our payment processors are PCIDSS compliant to ensure optimum security of your data electronically.

                    Best-In-Class Investments
                    We invest in low risk fixed income securities which include treasury bills, government bonds, and professionally managed mutual funds.

                    Asset Under Secure Watch
                    We invest your savings in low risk financial instruments held on behalf of our customers by Meristem Trustees, registered with the Securities and Exchange Commission (SEC).

                  </p>
                </div>

                <div className="mb-5">
                  <h5 className="text-blue">
                    <RiCheckLine color="green" /> Best-In-Class Investments
                  </h5>
                  <p>
                    We invest in low risk fixed income securities which include treasury
                    bills, government bonds, and professionally managed mutual funds.
                  </p>
                </div>

                <div className="mb-5">
                  <h5 className="text-blue">
                    <RiCheckLine color="green" /> Best-In-Class Investments
                  </h5>
                  <p>
                    We invest your savings in low risk financial instruments held on behalf of our customers
                    {' '}
                    by Meristem Trustees, registered with the Securities and Exchange Commission (SEC).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
