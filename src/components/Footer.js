import React, { useEffect } from 'react';
import { SiUnraid } from "react-icons/si";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faX
} from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare as faGithub, faDocker, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://widget.gurubase.io/widget.latest.min.js";
    script.setAttribute('data-widget-id', 'S7JLMl911axbTEhNp_cyrCqPtNOwbPwgHhSVIMSG5lo');
    script.setAttribute('data-text', 'Ask AI');
    script.setAttribute('data-margins', JSON.stringify({ bottom: "1rem", right: "1rem" }));
    script.setAttribute('data-light-mode', 'true');
    script.id = 'guru-widget-id';

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://discord.gg/NczTUTWyRr" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDiscord} />
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
