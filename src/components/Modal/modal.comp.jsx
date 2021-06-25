import React from 'react';
import './modal.style.scss';

const Modal = ({ hideModal, toggleModal, children }) => {
  if (hideModal) return null;

  return [
    <div className="modalOverlay" onClick={() => toggleModal()}  key={0}/>,
    <div className="modalWrap">
      <div className="modal">
        {children}
      </div>
    </div>
  ];
}

export default Modal;