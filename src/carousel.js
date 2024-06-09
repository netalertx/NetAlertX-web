import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Import Modal and Button from react-bootstrap
import './carousel.css'; // Import your custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMagnifyingGlassPlus
} from '@fortawesome/free-solid-svg-icons';

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
    <div className="container dark-theme">
      <div className="Gallery">
        {images.map((image, index) => (
          <div key={index} className="GalleryItem">
            <div className="image-container">
              <img
                src={image}
                className="clickable-image"
                alt={`Slide ${index + 1}`}
                onClick={() => handleImageClick(image)}
              />
              <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="magnifying-icon" />
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
