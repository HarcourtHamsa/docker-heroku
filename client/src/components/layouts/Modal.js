import React from 'react';
import "./modal.css"
import { RiCloseLine } from "react-icons/ri";
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

function Modal(props) {
  return ReactDOM.createPortal(
    <>
      <div className="modal">
        <div style={{
          padding: '20px',
          background: '#fff',
          display: 'inline-block',
          minHeight: '300px',
          margin: '1rem',
          position: 'relative',
          minWidth: '300px',
          justifySelf: 'center',
          border: '3px solid black'
        }}>
          <RiCloseLine onClick={props.onClose} size="30" className=" top-right" /><br /> <br />
          {props.children}
        </div>
      </div>
    </>,
    modalRoot
  );
}

export default Modal;
