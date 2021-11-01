import React  from 'react';

import Particles from 'react-particles-js';

import { Component } from "react";

class Part extends Component{
  
    render(){
        return (
            <Particles
            params={{
                "particles": {
                    "number": {
                        "value": 100
                    },
                    "size": {
                        "value": 5
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }} />
      
        );
    };

}
export default Part;
