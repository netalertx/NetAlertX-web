import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <div className="Header">     
        <div className='shield'>        
            <a href='https://github.com/jokob-sk/NetAlertX' target='_blank' rel="noreferrer">    
                <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/jokob-sk/NetAlertX?label=Stars&logo=github&color=0aa8d2&logoColor=fff&style=for-the-badge" />
            </a>
        </div>
        <div className='shield'>  
            <a href='https://hub.docker.com/r/jokobsk/netalertx' target='_blank' rel="noreferrer">    
                <img alt="GitHub Repo stars" src="https://img.shields.io/docker/pulls/jokobsk/netalertx?label=Pulls&logo=docker&color=0aa8d2&logoColor=fff&style=for-the-badge" />
            </a>
        </div>  
        <div className='shield'>  
            <a href='https://discord.gg/UQnnHNYV' target='_blank' rel="noreferrer">    
                <img alt="Discord" src="https://img.shields.io/discord/1274490466481602755?color=0aa8d2&logoColor=fff&logo=Discord&style=for-the-badge" />
            </a>
        </div>  
    </div>
  );
}

export default Header;
