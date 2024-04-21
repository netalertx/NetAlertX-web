import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faNetworkWired, 
  faBell, 
  faPlug, 
  faPuzzlePiece,
  faArrowAltCircleRight,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare as faGithub, faDocker } from '@fortawesome/free-brands-svg-icons';



import logo from './logo.svg';
import './App.css';
import Carousel from './carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function LandingPage() {
  return (
    <div className="LandingPage">
      <header className="App-header">
        <a
          className="App-link"
          href="#features"
        >
          Learn More
        </a>
      </header>

      <section id="features" className="Features section-padding">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Net <b>Alert</b><sup>X</sup></h1>
        <p>Get visibility of what's going on on your WIFI/LAN network.</p>
      </section>

      <section id="features" className="Features section-padding">
        <h2>Key Features</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title"><FontAwesomeIcon icon={faNetworkWired} /> Network Scanning</h3>
                <p className="card-text">Scan your network for new devices, port changes, disconnections, and more.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title"><FontAwesomeIcon icon={faBell} /> Notifications</h3>
                <p className="card-text">Receive alerts via email, Telegram, Pushover, and more for detected changes.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title"><FontAwesomeIcon icon={faPlug} /> Integration</h3>
                <p className="card-text">Integrate with Home Assistant, Webhooks, and APIs for custom automation.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title"><FontAwesomeIcon icon={faPuzzlePiece} /> Extension</h3>
                <p className="card-text">Extend functionality with custom plugins for specialized scanning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="CarouselSection section-padding">
        <div className="card h-100 center">
          <h2>Screenshots</h2>
        </div>
        <Carousel />
      </section>
      
      <section className="WhyUse section-padding">
        <h2>Why Use NetAlertX?</h2>
        <p>NetAlertX provides a user-friendly solution to monitor your home network, ensuring peace of mind and enhanced security.</p>
        {/* Add more information about why users should choose NetAlertX */}
      </section>
      <section className="CTA section-padding">
        <h2>Get Started</h2>
        <p>Ready to take control of your network's security?</p>
        <a
          className="App-link"
          href="https://github.com/jokob-sk/NetAlertX/tree/main/dockerfiles#-basic-usage"
        >
          <span>Install Now</span>
          <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
        </a>
      </section>
      <footer className="Footer">
        <div>
          <a href="https://github.com/jokob-sk/NetAlertX" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:jokob@duck.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://hub.docker.com/r/jokobsk/netalertx" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDocker} />
          </a>
        </div>
        <p>
          Copyright © {new Date().getFullYear()} NetAlertX. All rights reserved.
        </p>
        {/* Add links to legal information, terms of service, privacy policy, etc. */}
    </footer>
    </div>
  );
}

export default LandingPage;
