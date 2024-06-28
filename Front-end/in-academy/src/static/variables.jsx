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

export const progressCourses = [
  {
    title: 'Docker Completo',
    author: 'Alexandre Moraes',
    progress: 29,
    img: 'https://img-c.udemycdn.com/course/240x135/4821926_131f.jpg',
    totalUsers: 492,
    totalHours: 42
  },
  {
    title: 'Cloud Practitioner',
    author: 'Luis Gustavo',
    progress: 86,
    img: 'https://img-c.udemycdn.com/course/240x135/3142166_a637_3.jpg',
    totalUsers: 312,
    totalHours: 42
  },
  {
    title: 'TypeScript na raça',
    author: 'Roberto Benner',
    progress: 100,
    img: 'https://img-c.udemycdn.com/course/240x135/947098_02ec_2.jpg',
    totalUsers: 419,
    totalHours: 42
  }
] 