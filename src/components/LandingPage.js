import React from 'react';
import { SiUnraid } from "react-icons/si";
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNetworkWired,
  faBell,
  faCode,
  faPlug,
  faPuzzlePiece,
  faArrowAltCircleRight,
  faGroupArrowsRotate,
  faCalendar,
  faHouseSignal,
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
import PluginTables from './PluginTables';
import YouTubePlayer from './YouTube';

const videoId = 'cdbxlwiWhv8';



function LandingPage() {
  return (
    <div className="LandingPage">
      <Header></Header>
      <header className="App-header text-center">
        <Container>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Net<b>Alert</b><sup>X</sup></h1>
        <p className='pitch'>Easily visualize all your networks in one place, enhance security with real-time alerts, and enjoy seamless integration with your smart home—no matter what hardware you use.</p>
          <a
            className="App-link d-block mx-auto mb-4"
            href="#Features"
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
                <FontAwesomeIcon icon={faDocker} /> Get for Docker
                <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              </Button>
            </Col>
            <Col md="auto">
              <Button
                variant="secondary"
                href="https://unraid.net/community/apps?q=netalertx#r"
                className="App-link-small"
              >
                <SiUnraid /> Get for Unraid
                <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
              </Button>
            </Col>
          </Row>
        </Container>
      </header>



      <section id="Features" className="Features section-padding">

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
            title="Network Visualization and UI Customization"
            description="User friendly visualization of your network and detailed UI configuartion options."
            backgroundImage="img/section_slices/network_ui.gif"
            imagePosition="left"
        />       
        <SectionSlice
            icon={faGroupArrowsRotate}
            title="Multi-Network Visibility"
            description="Synchronize multiple network instances and gain cross-network visibility of devices across a range of network device manufacturers."
            backgroundImage="img/section_slices/sync_hub.png"
            imagePosition="right"
        />       
        <SectionSlice
            icon={faHouseSignal}
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
        <h2>Why Net<b>Alert</b><sup>X</sup>?</h2>
        <p>Net<b>Alert</b><sup>X</sup> provides a user-friendly solution to monitor your network, ensuring peace of mind and enhanced security.</p>

        <p>Net<b>Alert</b><sup>X</sup> is your ultimate network management companion. Stay ahead with real-time alerts for new devices, disconnections, and critical changes. With scheduled scans and seamless integration with over 80 notification services, including email and Telegram, Net<b>Alert</b><sup>X</sup> keeps you informed anywhere. </p>
        
        
        <p>Visualize your network with intuitive UI customization and unify multiple networks effortlessly. Plus, integrate with Home Assistant for advanced automation. Whether you're monitoring your home or office network, Net<b>Alert</b><sup>X</sup> empowers you with deep insights and proactive management. </p>
      </section>
      <section className="Integrations section-padding">
        <h2>Available Plugins</h2>
        <p>Net<b>Alert</b><sup>X</sup> features a robust plugin system that allows third-party scripts to feed events into the UI and send notifications, with functionalities like dynamic UI creation, value filtering, and importing objects into the database. </p>
        <a
          className="App-link-small btn btn-secondary"
          href="https://github.com/jokob-sk/NetAlertX/blob/main/docs/PLUGINS_DEV.md"
          target="_blank"
          rel="noreferrer"
        >
          <span><FontAwesomeIcon icon={faCode} /> Plugin missing? Create one</span>          
          <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
        </a>
        <br/>
        <br/>
        <YouTubePlayer videoId={videoId} />
        {/* <YouTube videoId={videoId} opts={opts}/> */}
        <br/>
        <br/>
        
        <PluginTables/>  

      </section>
      <section className="CTA section-padding">
        <h2>Get Started</h2>
        <a
          className="App-link"
          href="https://github.com/jokob-sk/NetAlertX/tree/main/dockerfiles#-basic-usage"
          target="_blank"
          rel="noreferrer"
        >
          <span><FontAwesomeIcon icon={faDocker} /> Get for Docker</span>
          <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
        </a>
        <a
          className="App-link"
          href="https://unraid.net/community/apps?q=netalertx#r"
          target="_blank"
          rel="noreferrer"
        >
          <span><SiUnraid /> Get for Unraid</span>
          <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
        </a>
      </section>
      <Footer/>
    </div>
  );
}

export default LandingPage;
