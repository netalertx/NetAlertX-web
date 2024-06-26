import React from 'react';
import { SiUnraid } from "react-icons/si";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faX
} from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare as faGithub, faDocker } from '@fortawesome/free-brands-svg-icons';

import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
  return (
    <div className="LandingPage">      
      <footer className="Footer">
        <div>
          <a href="https://github.com/jokob-sk/NetAlertX" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:netalertx@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://hub.docker.com/r/jokobsk/netalertx" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDocker} />
          </a>
          <a href="https://unraid.net/community/apps?q=netalertx#r" target="_blank" rel="noopener noreferrer">
            <SiUnraid /> 
          </a>
          <a href="https://x.com/@NetAlertX" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faX} />
          </a>
        </div>
        <p>
          Copyright © {new Date().getFullYear()} Net<b>Alert</b><sup>X</sup>. All rights reserved.
        </p>
        {/* Add links to legal information, terms of service, privacy policy, etc. */}
      </footer>
    </div>
  );
}

export default Footer;
