import React from 'react';
import { SiUnraid } from "react-icons/si";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faNetworkWired, 
  faBell, 
  faPlug, 
  faPuzzlePiece,
  faArrowAltCircleRight,
  faEnvelope,
  faX,
  faGroupArrowsRotate,
  faCalendar,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare as faGithub, faDocker } from '@fortawesome/free-brands-svg-icons';



import logo from './favicon.ico';
import './App.css';
import Carousel from './carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Button, Container, Row, Col } from 'react-bootstrap';

function LandingPage() {
  return (
    <div className="LandingPage">
      <header className="App-header text-center">
      <Container>
        <a
          className="App-link d-block mx-auto mb-4"
          href="#features"
          style={{ display: 'inline-block', width: 'fit-content' }}
        >
          Learn More <FontAwesomeIcon icon={faChevronDown} />
        </a>
        <Row className="sub-buttons justify-content-center g-4">
          <Col md="auto">
            <Button
              variant="secondary"
              href="https://github.com/jokob-sk/NetAlertX/tree/main/dockerfiles#-basic-usage"
              className="App-link-small"
            >
              <FontAwesomeIcon icon={faDocker} /> Install On Docker
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            </Button>
          </Col>
          <Col md="auto">
            <Button
              variant="secondary"
              href="https://unraid.net/community/apps?q=netalertx#r"
              className="App-link-small"
            >
              <SiUnraid /> Install On Unraid
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            </Button>
          </Col>
        </Row>
      </Container>
    </header>


      <section id="features" className="Intro section-padding">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Net<b>Alert</b><sup>X</sup></h1>
        <p>Get visibility of what's going on on your WIFI/LAN network. Get notified of new devices, disconnections of select devices, important devices down state, or their reconnection.</p>
      </section>

      <section  className="Features section-padding">
        <h2>Key Features</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card h-100 border-0">
              <div className="card-body">
                <h3 className="card-title"><FontAwesomeIcon icon={faNetworkWired} /> Network Scanning</h3>
                <p className="card-text">Scan your network for new devices, port changes, disconnections, and more.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0">
              <div className="card-body">
                <h3 className="card-title"><FontAwesomeIcon icon={faBell} /> Notifications</h3>
                <p className="card-text">Receive alerts via email, Telegram, Pushover, and more for detected changes.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0">
              <div className="card-body">
                <h3 className="card-title"><FontAwesomeIcon icon={faPlug} /> Integration</h3>
                <p className="card-text">Integrate with Home Assistant, Webhooks, and APIs for custom automation.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0">
              <div className="card-body">
                <h3 className="card-title"><FontAwesomeIcon icon={faPuzzlePiece} /> Extension</h3>
                <p className="card-text">Extend functionality with custom plugins for specialized scanning.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0">
              <div className="card-body">
                <h3 className="card-title"><FontAwesomeIcon icon={faGroupArrowsRotate} /> Sync Hub</h3>
                <p className="card-text">Synchronize multiple Net<b>Alert</b><sup>X</sup> instances and gain cross-network visibility of devices.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0">
              <div className="card-body">
                <h3 className="card-title"><FontAwesomeIcon icon={faCalendar} /> Presence History</h3>
                <p className="card-text">Historical data capture and visibility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="CarouselSection section-padding">
        
        <Carousel />
      </section>
      
      <section className="WhyUse section-padding">
        <h2>Why Use Net<b>Alert</b><sup>X</sup>?</h2>
        <p>Net<b>Alert</b><sup>X</sup> provides a user-friendly solution to monitor your network, ensuring peace of mind and enhanced security.</p>
        {/* Add more information about why users should choose NetAlertX */}
      </section>
      <section className="CTA section-padding">
        <h2>Get Started</h2>
        <a
          className="App-link"
          href="https://github.com/jokob-sk/NetAlertX/tree/main/dockerfiles#-basic-usage"
        >
          <span><FontAwesomeIcon icon={faDocker} /> Install On Docker</span>
          <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
        </a>
        <a
          className="App-link"
          href="https://unraid.net/community/apps?q=netalertx#r"
        >
          <span><SiUnraid /> Install On Unraid</span>
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

export default LandingPage;
