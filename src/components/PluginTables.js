import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faNetworkWired, faBell, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const PluginTables = () => {
    return (
        <div className="container">
            <div className="row">
                {/* Monitoring Plugins (♻️) */}
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-header">
                            <h4><FontAwesomeIcon icon={faSyncAlt} /> Monitoring</h4>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">DHCP servers</li>
                            <li className="list-group-item">Internet speed test</li>
                            <li className="list-group-item">Nmap port scanning & discovery</li>
                            <li className="list-group-item">NSLookup name resolution</li>
                            <li className="list-group-item">Pholus name resolution</li>
                            <li className="list-group-item">Website down monitoring</li>
                        </ul>
                    </div>
                </div>
                

                {/* Discovery/Import Plugins (🔍/📥) */}
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-header">
                            <h4><FontAwesomeIcon icon={faNetworkWired} /> Discovery/Import</h4>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Import devices from DHCP leases</li>
                            <li className="list-group-item">Pi-hole device import & sync</li>
                            <li className="list-group-item">Sync & import from other NetAlertX instances</li>
                            <li className="list-group-item">Create dummy devices</li>
                            <li className="list-group-item">UniFi device import & sync</li>
                            <li className="list-group-item">Nmap dev scan on current network</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row">
               

                
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-header">
                            <h4><FontAwesomeIcon icon={faBell} /> Notifications</h4>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Apprise notification proxy</li>
                            <li className="list-group-item">Email notifications</li>
                            <li className="list-group-item">Webhook notifications</li>
                            <li className="list-group-item">NTFY notifications</li>
                            <li className="list-group-item">Pushsafer notifications</li>
                            <li className="list-group-item">Pushover notifications</li>
                            <li className="list-group-item">MQTT for syncing to Home Assistant</li>
                        </ul>
                    </div>
                </div>

                {/* Script Plugins (⚙️) */}
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-header">
                            <h4><FontAwesomeIcon icon={faCog} /> System</h4>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">CSV devices backup</li>
                            <li className="list-group-item">Database cleanup</li>
                            <li className="list-group-item">DDNS update</li>
                            <li className="list-group-item">Maintenance of logs, etc.</li>
                            <li className="list-group-item">Set password</li>
                            <li className="list-group-item">Vendor database update</li>
                            <li className="list-group-item">New device template</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PluginTables;
