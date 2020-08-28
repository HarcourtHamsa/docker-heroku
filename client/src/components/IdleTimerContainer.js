import React, { useState, useContext } from "react";
import { AppContext } from "../contexts/context";
import IdleTimer from "react-idle-timer";
import Modal from "react-modal";
import { Redirect } from "react-router-dom";

Modal.setAppElement("#root");

const IdleTimerContainer = () => {
  // eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useContext(AppContext);

  const closeModal = () => {
    setModalIsOpen(false);
    setIsAuthenticated(false);
  };

  const handleOnIdle = () => {
    setIsLoggedIn(false);
    setModalIsOpen(true);
  };

  return (
    <div>
      {isAuthenticated ? null : <Redirect to="/" />}
      <div>
        <Modal isOpen={modalIsOpen} className="center text-center">
          <h3>Session Timeout</h3>
          <p>You've been inactive for a while</p>
          <button className="btn-red" onClick={closeModal}>
            Logout
          </button>
        </Modal>
      </div>

      <IdleTimer ref={null} timeout={50000 * 10} onIdle={handleOnIdle}></IdleTimer>
    </div>
  );
};

export default IdleTimerContainer;
