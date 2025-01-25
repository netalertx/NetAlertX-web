import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlassPlus
} from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function SectionSlice({ icon, title, description, backgroundImage, imagePosition = 'left', gif }) {
  const [showModal, setShowModal] = useState(false);

  const isImageLeft = imagePosition === 'left';
  const image = (
    <div className="col-md-6 height-300 pointer">
      <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="magnifying-icon-slice" />
      <div 
        className="card-img height-300" 
        style={{ 
          backgroundImage: `url(${backgroundImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          height: '100%' 
        }}
        onClick={() => setShowModal(true)}
      ></div>
    </div>
  );

  return (
    <div className="col height-300 slice">
      <div className="card border-0 card-row">
        <div className="row no-gutters height-300">
          {isImageLeft && image}
          <div className="col-md-6 height-300">
            <div className="card-body height-300">
              <FontAwesomeIcon icon={icon} className='background-icon' />
              <h3 className="card-title">{title}</h3>
              <p className="card-text">{description}</p>
            </div>
          </div>
          {!isImageLeft && image}
        </div>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered dialogClassName="modal-fullwidth">
        <Modal.Body>
          <img src={backgroundImage} className="modal-image full-width" alt="Full Screen" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SectionSlice;
