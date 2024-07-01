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
    rating: 5,
    img: 'https://img-c.udemycdn.com/course/240x135/4821926_131f.jpg',
    totalUsers: 492,
    totalHours: 42
  },
  {
    title: 'Cloud Practitioner',
    author: 'Luis Gustavo',
    progress: 86,
    rating: 4,
    img: 'https://img-c.udemycdn.com/course/240x135/3142166_a637_3.jpg',
    totalUsers: 312,
    totalHours: 42
  },
  {
    title: 'TypeScript na raça',
    author: 'Roberto Benner',
    progress: 100,
    rating: 3.4,
    img: 'https://img-c.udemycdn.com/course/240x135/947098_02ec_2.jpg',
    totalUsers: 419,
    totalHours: 42
  }, {
    title: 'Docker Completo',
    author: 'Alexandre Moraes',
    progress: 29,
    rating: 5,
    img: 'https://img-c.udemycdn.com/course/240x135/4821926_131f.jpg',
    totalUsers: 492,
    totalHours: 42
  },
  {
    title: 'Cloud Practitioner',
    author: 'Luis Gustavo',
    progress: 86,
    rating: 4,
    img: 'https://img-c.udemycdn.com/course/240x135/3142166_a637_3.jpg',
    totalUsers: 312,
    totalHours: 42
  },
  {
    title: 'TypeScript na raça',
    author: 'Roberto Benner',
    progress: 100,
    rating: 3.4,
    img: 'https://img-c.udemycdn.com/course/240x135/947098_02ec_2.jpg',
    totalUsers: 419,
    totalHours: 42
  }, {
    title: 'Docker Completo',
    author: 'Alexandre Moraes',
    progress: 29,
    rating: 5,
    img: 'https://img-c.udemycdn.com/course/240x135/4821926_131f.jpg',
    totalUsers: 492,
    totalHours: 42
  },
  {
    title: 'Cloud Practitioner',
    author: 'Luis Gustavo',
    progress: 86,
    rating: 4,
    img: 'https://img-c.udemycdn.com/course/240x135/3142166_a637_3.jpg',
    totalUsers: 312,
    totalHours: 42
  },
  {
    title: 'TypeScript na raça',
    author: 'Roberto Benner',
    progress: 100,
    rating: 3.4,
    img: 'https://img-c.udemycdn.com/course/240x135/947098_02ec_2.jpg',
    totalUsers: 419,
    totalHours: 42
  }, {
    title: 'Docker Completo',
    author: 'Alexandre Moraes',
    progress: 29,
    rating: 5,
    img: 'https://img-c.udemycdn.com/course/240x135/4821926_131f.jpg',
    totalUsers: 492,
    totalHours: 42
  },
  {
    title: 'Cloud Practitioner',
    author: 'Luis Gustavo',
    progress: 86,
    rating: 4,
    img: 'https://img-c.udemycdn.com/course/240x135/3142166_a637_3.jpg',
    totalUsers: 312,
    totalHours: 42
  },
  {
    title: 'TypeScript na raça',
    author: 'Roberto Benner',
    progress: 100,
    rating: 3.4,
    img: 'https://img-c.udemycdn.com/course/240x135/947098_02ec_2.jpg',
    totalUsers: 419,
    totalHours: 42
  }
] 

export const courses = [
  {
    title: 'Docker Completo',
    author: 'Alexandre Moraes',
    img: 'https://img-c.udemycdn.com/course/240x135/4821926_131f.jpg',
    totalUsers: 492,
    totalHours: 42,
    rating: 4.5
  },
  {
    title: 'Cloud Practitioner',
    author: 'Luis Gustavo',
    img: 'https://img-c.udemycdn.com/course/240x135/3142166_a637_3.jpg',
    totalUsers: 332,
    totalHours: 75,
    rating: 3.2
  },
  {
    title: 'TypeScript na raça',
    author: 'Roberto Benner',
    img: 'https://img-c.udemycdn.com/course/240x135/947098_02ec_2.jpg',
    totalUsers: 788,
    totalHours: 35,
    rating: 5
  },
  {
    title: 'SCRUM Master',
    author: 'Gustavo Farias',
    img: 'https://img-c.udemycdn.com/course/240x135/3581057_cbb9_3.jpg',
    totalUsers: 55,
    totalHours: 42,
    rating: 3
  },
  {
    title: 'SallesForce AI',
    author: 'Igor Gomes',
    img: 'https://img-c.udemycdn.com/course/240x135/5590492_c3e9.jpg',
    totalUsers: 549,
    totalHours: 64,
    rating: 4.4

  },
  {
    title: 'Angular Completo',
    author: 'Matheus Serafim',
    img: 'https://img-c.udemycdn.com/course/240x135/3902998_5691_4.jpg',
    totalUsers: 1032,
    totalHours: 88,
    rating: 5
  },
  {
    title: 'Excel to Job',
    author: 'Ricardo Augusto',
    img: 'https://img-c.udemycdn.com/course/240x135/566284_7465_2.jpg',
    totalUsers: 285,
    totalHours: 24,
    rating: 4.7
  },
  {
    title: 'Inglês básico',
    author: 'Paulo Andrade',
    img: 'https://img-c.udemycdn.com/course/240x135/4464776_6071_2.jpg',
    totalUsers: 488,
    totalHours: 48,
    rating: 2.3
  }
]