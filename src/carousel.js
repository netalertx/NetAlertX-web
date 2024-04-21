import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Import Modal and Button from react-bootstrap
import './carousel.css'; // Import your custom styles

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClose = () => setSelectedImage(null);

  // Fetch all images from the carousel directory
  const requireAll = requireContext => requireContext.keys().map(requireContext);
  const images = requireAll(require.context('./img/carousel', false, /\.(png|jpe?g|svg)$/));

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="container">
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-md-2 mb-2">
            <div className="card">
              <img
                src={image}
                className="card-img-top clickable-image"
                alt={`Slide ${index + 1}`}
                onClick={() => handleImageClick(image)}
              />
              <div className="card-body">
                <h5 className="card-title">Click to zoom</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for image zoom */}
      <Modal show={selectedImage !== null} onHide={handleClose} centered dialogClassName="modal-fullwidth">
        <Modal.Body>
          <img src={selectedImage} className="modal-image full-width" alt="Zoomed" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Gallery;
