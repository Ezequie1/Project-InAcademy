import axios from "axios"

export const particles = {
    config: {
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#b3c5d2"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 7
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 2,
            random: false,
            anim: {
              enable: false,
              speed: 0.1,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#009ce0",
            opacity: 0.8,
            width: 2
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "repulse"
            },
            onclick: {
              enable: false,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }
}

export const generateRandomColor = () => {
  const colors = [
    '#FFB6C1',
    '#ADD8E6',
    '#90EE90',
    '#FFFFE0',
    '#DDA0DD',
    '#FFD700',
    '#FFA07A',
    '#F08080',
    '#E6E6FA',
    '#FFE4B5' 
  ]

  let number = Math.floor(Math.random() * 10)

  return colors[number]
}

export const api = axios.create({
  baseURL : 'http://localhost:8080'
})

export const imagesCarrousel = [
  'https://coreui.io/react/docs/static/react-83088efde08a5dedde9f67a954cb4b5b.jpg',
  'https://coreui.io/react/docs/static/vue-8a74d93fde1a02c247304291cce46797.jpg',
  'https://coreui.io/react/docs/static/angular-2f3764e2ec8b0b47ebe68f2f80260ef1.jpg'
]