import React, {useState} from 'react';
import DashboardNavbar from './DashboardNavbar';

function Loan () {
  //eslint-disable-next-line
  const [date, setDate] = useState (Date ());
  return (
    <div className="container">
      <DashboardNavbar />
      <div className="custom-margin">
        <h3 className="font-weight-bold mb-3">LOAN APPLICATION</h3>
        <div className="row">
          <div className="col-xl-6">
            <div className=" p-3">
              <form className="form-control-group">
                <label>To:</label>
                <input
                  type="text"
                  className="form-control"
                  autoComplete="true"
                  placeholder="Customer Care"
                  disabled
                />

                <label>Amount</label>
                <input
                  type="text"
                  className="form-control"
                  autoComplete="true"
                  placeholder="Type your  loan amount"
                />
                

                <label>Loan Reason</label>
                <textarea type="text" className="form-control" />

                <button className="btn btn-red btn-block mt-3 text-white small">
                  <small> Request Loan </small>
                </button>
              </form>
            </div>
          </div>
          <div className="col-xl-6">
            <h3 className="font-weight-bold mb-3">QUICK VIEWS & LINK</h3>

            <div className="card p-3 mb-3">
              <p className="h5 font-weight-bold">{date}</p>
            </div>
            <div className="card p-3">
              <p className="card-title font-weight-bold">ATM CARD DETAILS</p>
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
  );
}

export default Loan;
