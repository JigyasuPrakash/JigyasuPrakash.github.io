import React, { Component } from 'react'
import Particles from 'react-particles-js';

const particleOptions = {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": false
            }
        },
        "color": {
            "value": "#ff0000"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 1,
                "color": "#ff1111"
            }
        },
        "opacity": {
            "value": 1,
            "random": false,
            "anim": {
                "enable": false
            }
        },
        "size": {
            "value": 4,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.5,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 110,
            "color": "#fff",
            "opacity": 0.5,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
                "enable": false,
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 150,
                "line_linked": {
                    "opacity": 0.8
                }
            }
        }
    }
}

class Particle extends Component {

    render() {
        return (
            <Particles className="particles-js"
                params={particleOptions}
            />

        )
    }

}

export default Particle
