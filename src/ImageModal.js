import React from 'react';
import './ImageModal.css'; // Create this CSS file for custom styling if needed

function ImageModal({ image, closeModal }) {
  return (
    <div className="ImageModalBackdrop" onClick={closeModal}>
      <div className="ImageModalContent">
        <img src={image} alt="Zoomed Image" />
      </div>
    </div>
  );
}

export default ImageModal;
