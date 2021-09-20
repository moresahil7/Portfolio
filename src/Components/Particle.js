import Particles from 'react-particles-js';

import React from 'react';

function Particle() {
  return (
    <>
    <Particles width="100%" height="100vh" 
    params={{
	    "particles": {
        "number": {
            "value": 60,
            "density": {
                "enable": true,
                "value_area": 1500
            }
        },
        "line_linked": {
            "enable": true,
            "opacity": 0.1
        },
        "move": {
            "direction": "center",
            "speed": 1
        },
        "size": {
            "value": 2
        },
        "opacity": {
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 1
            }
        }
    },
    "interactivity": {
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"

            
        },
          "onclick": {
            "enable": true,
            "mode": "push"

            
        }
        
           
         
        },
        "modes": {
            "push": {
                "particles_nb": 5
            }
        }
    },
    "retina_detect": true
	}} />
    </>
  )
}

export default Particle;
