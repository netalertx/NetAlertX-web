import React from 'react';
import { SiUnraid } from "react-icons/si";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNetworkWired,
  faBell,
  faPlug,
  faPuzzlePiece,
  faArrowAltCircleRight,
  faGroupArrowsRotate,
  faCalendar,
  faChevronDown,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare as faGithub, faDocker } from '@fortawesome/free-brands-svg-icons';

import logo from '../favicon.ico';
import '../App.css';
import Carousel from '../carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';
import SectionSlice from './SectionSlice';


function LandingPage() {
  return (
    <div className="LandingPage">
      <Header></Header>
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
        <p>Stay Informed, Stay in the Known: Visualize Your Networks, Get Real-Time Alerts, and Seamlessly Integrate with Your Smart Home. Get notified of new devices, disconnections of select devices, important devices down state, or their reconnection.</p>
      </section>

      <section className="Features section-padding">

        <SectionSlice
            icon={faSearch}
            title="Scheduled and Ad-hoc Network Scans"
            description="Scan your network for new devices, port, IP changes, disconnections, reconnections, important devices going down and more."
            backgroundImage="img/section_slices/scanners_settings_ad_hoc_run.gif"
        />
        <SectionSlice
            icon={faBell}
            title="80+ Notification Services"
            description="Receive alerts in-app, via email, Telegram, Pushover, and more than 80+ services via Apprise for detected changes."
            backgroundImage="img/section_slices/in_app_notifications.gif"
            imagePosition="right"
        />       
        <SectionSlice
            icon={faNetworkWired} 
            title="Network Visualization and UI customization"
            description="Receive alerts in-app, via email, Telegram, Pushover, and more than 80+ services via Apprise for detected changes."
            backgroundImage="img/section_slices/network_ui.gif"
            imagePosition="left"
        />       
        <SectionSlice
            icon={faGroupArrowsRotate}
            title="Multi-Network Unification"
            description="Synchronize multiple network instances and gain cross-network visibility of devices."
            backgroundImage="img/section_slices/sync_hub.png"
            imagePosition="right"
        />       
        <SectionSlice
            icon={faPlug}
            title="Integrate into your Smart Home"
            description="Synchronize device status and attributes to your Home Assistant instance for advanced automation workflows."
            backgroundImage="img/section_slices/home_Assistant.gif"
            imagePosition="left"
        />       
        
        
        

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
          target="_blank"
          rel="noreferrer"
        >
          <span><FontAwesomeIcon icon={faDocker} /> Install On Docker</span>
          <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
        </a>
        <a
          className="App-link"
          href="https://unraid.net/community/apps?q=netalertx#r"
          target="_blank"
          rel="noreferrer"
        >
          <span><SiUnraid /> Install On Unraid</span>
          <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
        </a>
      </section>
      <Footer/>
    </div>
  );
}

export default LandingPage;
