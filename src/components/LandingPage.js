import React from 'react';
import { SiUnraid } from "react-icons/si";
import YouTube from 'react-youtube';
import { Icon } from '@mdi/react';
import { mdiHomeAssistant } from '@mdi/js';
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
  faSearch,
  faArrowsSplitUpAndLeft
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
        <h1>Net<b>Alert</b><sup>x</sup></h1>
        <p className='pitch'>Centralized network visibility and continuous asset discovery.</p>
        <p className='sub-pitch'>
          Monitor devices, detect change, and stay aware across distributed networks.
        </p>
          <a
            className="App-link d-block mx-auto mb-4"
            href="#Features"
            style={{ display: 'inline-block', width: 'fit-content' }}
          >
            Learn More
          </a>
          <Row className="sub-buttons justify-content-center g-4">
            <Col md="auto">
              <Button
                variant="secondary"
                href="https://docs.netalertx.com/DOCKER_INSTALLATION/"
                className="App-link-small"
              >
                <FontAwesomeIcon icon={faDocker} /> Docker
              </Button>
            </Col>
            <Col md="auto">
              <Button
                variant="secondary"
                href="https://unraid.net/community/apps?q=netalertx#r"
                className="App-link-small"
              >
                <SiUnraid /> Unraid
              </Button>
            </Col>
            <Col md="auto">
              <Button
                variant="secondary"
                href="https://github.com/alexbelgium/hassio-addons/blob/master/netalertx/README.md"
                className="App-link-small"
              >
                <Icon path={mdiHomeAssistant} size={1} color="white" /> Home Assistant
              </Button>
            </Col>
          </Row>
        </Container>
      </header>



      <section id="Features" className="Features section-padding">
        <h2>Features</h2>
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
            description={
                <>
                    Advanced visualization of your {" "}
                    <a
                        href="https://docs.netalertx.com/NETWORK_TREE/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        network
                    </a>{" "}and detailed UI configuration options.
                </>
            }
            backgroundImage="img/section_slices/network_ui.gif"
            imagePosition="left"
        />
        <SectionSlice
            icon={faGroupArrowsRotate}
            title="Multi-Network Visibility"
            description={
                <>
                    Synchronize multiple networks and gain cross-network visibility of devices across a range of network device manufacturers with the{" "}
                    <a
                        href="https://docs.netalertx.com/REMOTE_NETWORKS/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Sync plugin
                    </a>.
                </>
            }
            backgroundImage="img/section_slices/sync_hub.png"
            imagePosition="right"
        />
        <SectionSlice
            icon={faHouseSignal}
            title="Integrate with Leading Automation Platforms"
            description={
                <>
                    Synchronize device status and attributes to your{" "}
                    <a
                        href="https://docs.netalertx.com/HOME_ASSISTANT/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        leading automation platforms
                    </a> for advanced workflow automation.
                </>
            }
            backgroundImage="img/section_slices/home_Assistant.gif"
            imagePosition="left"
        />
        <SectionSlice
            icon={faArrowsSplitUpAndLeft}
            title="Automate Device Management"
            description={
                <>
                    Automate device management in NetAlertX with live presence detection, simple{" "}
                    <a
                        href="https://docs.netalertx.com/WORKFLOWS/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        workflows and business rules
                    </a>.
                </>
            }
            backgroundImage="img/section_slices/workflows.gif"
            imagePosition="right"
        />


      </section>

      <section className="CarouselSection section-padding">
        <h2>Screenshots</h2>
        <Carousel />
      </section>

      <section className="WhyUse section-padding">
        <h2>Real-World Network Solutions</h2>
        <p>Net<b>Alert</b><sup>x</sup> delivers a scalable and secure solution for comprehensive network monitoring, ensuring compliance, security, and operational efficiency.</p>

        <p>Net<b>Alert</b><sup>x</sup> is a powerful network management tool for businesses. Proactively detect unauthorized devices, connectivity issues, and critical changes with automated scans and robust alerting via 80+ integrated notification services, including email and messaging platforms.</p>


        <p>Gain full visibility into your network infrastructure with customizable dashboards and seamless multi-network synchronization. Integrate with leading automation and management systems for streamlined workflows. Whether managing campus-wide or global networks, Net<b>Alert</b><sup>x</sup> provides the insights and control needed for proactive network governance.</p>
      </section>
      <section className="Integrations section-padding">
        <h2>Available Plugins</h2>
        <p>Net<b>Alert</b><sup>x</sup> features a robust plugin system that allows third-party scripts to feed events into the UI and send notifications, with functionalities like dynamic UI creation, value filtering, and importing objects into the database. </p>
        <a
          className="App-link-small btn btn-secondary"
          href="https://docs.netalertx.com/PLUGINS_DEV"
          target="_blank"
          rel="noreferrer"
        >
          <span><FontAwesomeIcon icon={faCode} /> Plugin missing? Create one</span>

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
        <h2>Get Started on:</h2>
        <a
          className="App-link"
          href="https://docs.netalertx.com/DOCKER_INSTALLATION/"
          target="_blank"
          rel="noreferrer"
        >
          <span><FontAwesomeIcon icon={faDocker} /> Docker</span>
        </a>
        <a
          className="App-link"
          href="https://unraid.net/community/apps?q=netalertx#r"
          target="_blank"
          rel="noreferrer"
        >
          <span><SiUnraid /> Unraid</span>
        </a>
        <a
          className="App-link"
          href="https://github.com/alexbelgium/hassio-addons/blob/master/netalertx/README.md"
          target="_blank"
          rel="noreferrer"
        >
          <span> <Icon path={mdiHomeAssistant} size={1} color="white" /> Home Assistant</span>
        </a>
      </section>
      <Footer/>
    </div>
  );
}

export default LandingPage;
