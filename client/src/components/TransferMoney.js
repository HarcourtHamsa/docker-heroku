import React, {useState} from 'react';
import {RiServerLine, RiArrowRightLine} from 'react-icons/ri';
import Modal from './layouts/Modal';
import DashboardNavbar from './DashboardNavbar';
import IdleTimerContainer from './IdleTimerContainer';

export default function TransferMoney () {
  const [modalIsOpen, setModalIsOpen] = useState (true);
  //eslint-disable-next-line
  const [date, setDate] = useState (Date ());

  const handleSubmit = e => {
    e.preventDefault ();
    console.log ('submitted form');
    setModalIsOpen (true);
  };

  return (
    <div className="container custom-margin">
      {modalIsOpen
        ? <Modal
            className="center text-center"
            onClose={setModalIsOpen (false)}
          >
            <RiServerLine size="30" color="#2f2fa2" />
            <h5 className="mt-3">Server Temporarily Down</h5>
            <p className="text-muted">Please try again later</p>
          </Modal>
        : null}

      <IdleTimerContainer />
      <DashboardNavbar />
      <div className="row mt-5">
        <div className="col-xl-5  p-3">
          <h3 className="font-weight-bold mb-3">TRANSFER FORM</h3>
          <form className="form-control-group" onSubmit={handleSubmit}>
            <label>Amount</label>
            <input type="text" className="form-control" required />

            <label>Beneficiary Account Name</label>
            <input type="text" className="form-control" required />

            <label>Beneficiary Account Number</label>
            <input type="text" className="form-control" required />

            <label>Bank Name</label>
            <input type="text" className="form-control" required />

            <label>Routing Number</label>
            <input type="text" className="form-control" required />

            <label>Swift Code</label>
            <input type="text" className="form-control" required />

            <label>Desc</label>
            <textarea type="text" className="form-control" required />

            <button
              type="submit"
              className="btn btn-red btn-block mt-3 text-white small"
            >
              <small> continue <RiArrowRightLine /></small>
            </button>
          </form>
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
  );
}
