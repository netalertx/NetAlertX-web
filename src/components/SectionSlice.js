import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function SectionSlice({ icon, title, description, backgroundImage, imagePosition = 'left' }) {
  const isImageLeft = imagePosition === 'left';
  const image = <div className="col-md-6">
                  <div className="card-img height-300" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}></div>
                </div>

  return (
    <div className="col height-300 slice">
      <div className="card  border-0 ">
        <div className="row no-gutters height-300">
          {isImageLeft && (
            image
          )}
          <div className="col-md-6 ">
            <div className="card-body height-250">
              <h3 className="card-title">
                <FontAwesomeIcon icon={icon} /> {title}
              </h3>
              <p className="card-text">{description}</p>
            </div>
          </div>
          {!isImageLeft && (
            image
          )}
        </div>
      </div>
    </div>
  );
}

export default SectionSlice;
