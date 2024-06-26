import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <div className="Header">     
        <div className='shield'>        
            <a href='https://github.com/jokob-sk/NetAlertX' target='_blank'>    
                <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/jokob-sk/NetAlertX?label=Stars&style=flat-square&logo=github&color=0aa8d2&logoColor=fff" />
            </a>
        </div>
        <div className='shield'>  
            <a href='(https://hub.docker.com/r/jokobsk/netalertx' target='_blank'>    
                <img alt="GitHub Repo stars" src="https://img.shields.io/docker/pulls/jokobsk/netalertx?label=Pulls&logo=docker&color=0aa8d2&logoColor=fff" />
            </a>
        </div>  
    </div>
  );
}

export default Header;
