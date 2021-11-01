import React  from 'react';

import Particles from 'react-particles-js';

import { Component } from "react";

class Part2 extends Component{
  
    render(){
        return (
            <Particles
            params={{
                "particles": {
                    "number": {
                        "value": 50
                    },
                    "size": {
                        "value": 3
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
export default Part2;
