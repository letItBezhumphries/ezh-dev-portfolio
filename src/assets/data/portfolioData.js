// icons for skills
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faJs, faReact, faHtml5, faDev, faCss3, faSass, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { SiMysql, SiMongodb, SiRedux, SiTerraform, SiPacker, SiAnsible, SiDocker, SiAmazonaws, SiWebpack, SiRedis } from 'react-icons/si';

// audio tracks
import doomsday from './02 Doomsday.m4a';
import watermelon from './2-06 Watermelon in Easter Hay.mp3';
import intoTheSun from './03 Fell in the Sun.m4a';
import darkestDim from './06 Darkest (Dim) [feat. Gavin Turek].m4a';

// track thumbnails
import mfdoom from './mfdoom.jpg';
import fz from './fz.jpg';
import tokimonsta from './tokimonsta.jpg';
import biggrams from './biggrams.jpg';

// project images
import BrokenTableMainImage from '../img/brokentable-restaurant-page-main.jpg';
import PhotogalleryImage from '../img/brokentable-photogalleryandmap.jpg';
import PhotoScrollerImage from '../img/brokentable-photoscroller.jpg';
import ReclarkerMainImage from '../img/reclarker-main.jpg';
import ReclarkerArtworkPageImage from '../img/reclarker-artworkpage.jpg';
import CinemaMainPageImage from '../img/cinema-app.jpg';
import CinemaMoviePageImage from '../img/cinema-app-movie-info.jpg';
import GetTixHomePageImage from '../img/getTixHomePage.jpg';
import GetTixPaymentPageImage from '../img/getTixPaymentComponent.jpg';

const portfolioData = {
  tracks: [
    {
      title: 'Doomsday',
      src: doomsday,
      author: 'MF DOOM',
      thumbnail: mfdoom
    },
    {
      title: 'Watermelon In Easter Hay',
      src: watermelon,
      author: 'Frank Zappa',
      thumbnail: fz
    },
    {
      title: 'Fell into the Sun',
      src: intoTheSun,
      author: 'Big Grams',
      thumbnail: biggrams
    },
    {
      title: 'Darkest Dim',
      src: darkestDim,
      author: 'Tokimonsta',
      thumbnail: tokimonsta
    }
  ],
  about: [
    "I'm a creative, detail oriented software engineer who is passionate about writing efficient and performant code that solves design problems and meets project needs.",
    'Eric',
    "In 2019 upon graduating from Hack Reactor's software engineering immersive, I have continued building upon my experience developing and designing software for the web, from simple landing pages to Full Stack web applications. I strive to create software that not only functions efficiently under the hood, but also provides intuitive and clean user experiences.",
    "I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code. I consider work an ongoing education, and I'm always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn. At the end of the day, my primary goal is to create something beautiful with people that bring out the best in me.",
    'Before changing careers, I followed my passion for creative problem solving as a professional film, stage, and Shakespearean actor. Figuring out how to bring all of myself to a character has now, over the past few years, morphed into an enjoyment of problem solving in the realm of software engineering and web development.',
    "When I'm not in front of a computer screen, I'm probably somewhere hiking, playing basketball (trying to stay young), or learning a new part."
  ],
  skills: {
    intro:
      'While most of my experience is in Web Development utilizing JavaScript, I also have experience working with DevOps / infrastructure building technologies like Terraform, Packer, Ansible, Docker.',
    skillgroups: [
      {
        type: 'Web Development',
        gpIcon: faCode,
        skills: [
          {
            skill: 'Javascript',
            tooltip: 'I have over 4 years experience in JS and Node building upon my training at Hack Reactor the top coding Bootcamp in the US.',
            id: 'javascript-skill',
            level: 'Expert',
            percentage: '90%',
            icon: faJs
          },
          {
            skill: 'NodeJs',
            tooltip: '',
            id: 'nodejs-skill',
            level: 'Pro',
            percentage: '80%',
            icon: faNodeJs
          },
          {
            skill: 'React',
            tooltip:
              'With over 4 years of experience working with React, most of all my projects have been built from scratch with React frontend applications with Redux for state management, and webpack for bundling.',
            id: 'frontend-skill',
            level: 'Pro',
            percentage: '85%',
            icon: faReact
          },
          {
            skill: 'Redux',
            tooltip: '',
            id: 'frontend-skill',
            level: 'Pro',
            percentage: '80%',
            icon: SiRedux
          },
          {
            skill: 'Webpack',
            tooltip: '',
            id: 'frontend-skill',
            level: 'Pro',
            percentage: '80%',
            icon: SiWebpack
          },
          {
            skill: 'HTML5',
            tooltip:
              'I have over 4 years experience developing web applications relying on my knowledge of HTML, CSS and SASS, and have incorporated responsive breakpoints to ensure the projects are tailored for multiple screen sizes.',
            id: 'html-css-skill',
            level: 'Pro',
            percentage: '85%',
            icon: faHtml5
          },
          {
            skill: 'CSS3',
            tooltip: '',
            id: 'html-css-skill',
            level: 'Pro',
            percentage: '85%',
            icon: faCss3
          },
          {
            skill: 'Sass',
            tooltip: '',
            id: 'html-css-skill',
            level: 'Pro',
            percentage: '75%',
            icon: faSass
          },
          {
            skill: 'AWS',
            tooltip: 'I have 3 years experience deploying application code on Amazon ec2 and ecs services.',
            id: 'aws-skill',
            level: 'Intermediate',
            percentage: '75%',
            icon: SiAmazonaws
          }
        ]
      },
      {
        type: 'Back End',
        gpIcon: faDatabase,
        skills: [
          {
            skill: 'MongoDB',
            tooltip:
              'With over 4 years experience working with MongoDB/MySQL databases,most of the applications I have built were Fullstack or Mernstack, in which I built out both frontend and backend systems.',
            id: 'backend-skill',
            level: 'Pro',
            percentage: '85%',
            icon: SiMongodb
          },
          {
            skill: 'MySql',
            tooltip: '',
            id: 'backend-skill',
            level: 'Pro',
            percentage: '80%',
            icon: SiMysql
          },
          {
            skill: 'Redis',
            tooltip: '',
            id: 'backend-skill',
            level: 'Intermediate',
            percentage: '50%',
            icon: SiRedis
          }
        ]
      },
      {
        type: 'DevOps',
        gpIcon: faDev,
        skills: [
          {
            skill: 'Terraform',
            tooltip:
              'Over past 2 years, I sought to learn everything I could about the DevOps side of building applications and utilizing Docker, Jenkins, Terraform, Ansible and Packer, in order to build out infrastructure on hosting platforms like Amazon, configure Linux based OS systems to run my application and automate the deployment process.',
            id: 'devop-skills',
            level: 'Intermediate',
            percentage: '75%',
            icon: SiTerraform
          },
          {
            skill: 'Ansible',
            tooltip: '',
            id: 'devop-skills',
            level: 'Intermediate',
            percentage: '60%',
            icon: SiAnsible
          },
          {
            skill: 'Packer',
            tooltip: '',
            id: 'devop-skills',
            level: 'Intermediate',
            percentage: '65%',
            icon: SiPacker
          },
          {
            skill: 'Docker',
            tooltip: '',
            id: 'devops-skills',
            level: 'Intermediate',
            percentage: '70%',
            icon: SiDocker
          }
        ]
      }
    ]
  },
  projects: [
    {
      featured: true,
      type: 'Fullstack React w/ Express Frontend & NoSql Backend',
      title: 'Brokentable Photogallery & Menu Service',
      description: 'Brokentable Photogallery & Menu Service - Similar to OpenTable',
      summary:
        'The Brokentable Photogallery & Menu Service was built in an Agile environment with myself being in charge of the Photo gallery, and Menus service. Developed utilizing Service Oriented Architecture this project gave me the chance to utilize my knowledge of React & Redux while learning the vast bundling capabilities of Webpack, like Module Federation, as a means of incorporating and bundling each team members application code into a singular Fullstack application deployed on AWS infrastructure via Terraform and Packer',
      specs: 'Node, Express, React, Redux, MongoDB, Mongoose, Nginx, Webpack, Sass, Terraform, Packer.',
      details: [
        'Designed frontend microservice for a cloned version of opentable a restaurant reservation application',
        'Developed photogallery and photoscrolling components & client UI with React, Redux, Bootstrap, CSS Grid, and Sass.',
        'Designed responsive UI/UX with HTML, CSS and react-bootstrap for a flexible and seamless experience across a multitude of device sizes.',
        'Implemented proxy server in a service-oriented architecture design that incorporated the other services provided by my team members, including Restaurant details service and User reviews service.',
        'Deployed proxy server on AWS ec2 using Terraform, bash scripts, and Packer installing necessary software to run the application code for each service on an Amazon Linux machine image.'
      ],
      githublink: 'https://github.com/letItBezhumphries/micro-brokentable',
      url: '',
      images: [
        { src: BrokenTableMainImage, alt: 'brokentable site restaurant page' },
        {
          src: PhotogalleryImage,
          alt: 'brokentable site restaurant photogallery component'
        },
        {
          src: PhotoScrollerImage,
          alt: 'brokentable site restaurant photoscroller component'
        }
      ],
      background: 'rgb(0, 33, 52)'
    },
    {
      featured: false,
      type: 'E-Commerce MERN Stack Application',
      title: 'ReClarker Gallery App',
      description: 'Online platform for promoting artshows and selling artwork',
      summary: '',
      specs: 'Built with Node, Express, React, Redux for Frontend, with MongoDB for backend, AWS s3 for storing images and Webpack for bundling.',
      details: [
        'Built custom eCommerce platform and modular front-end views with React and Redux.',
        'Designed document-based schemas with MongoDB and Mongoose for flexibility in data modeling.',
        'Created extensive backend RESTful API with Node and Express for scalability and maintainability.',
        'Implemented authentication with Bcrypt and JWT for proven security and encryption.'
      ],
      githublink: 'https://github.com/letItBezhumphries/reclarker-gallery',
      url: '',
      images: [
        {
          src: ReclarkerArtworkPageImage,
          alt: 'home page for reclarker gallery site'
        },
        {
          src: ReclarkerMainImage,
          alt: 'artwork page for reclarker gallery site'
        }
      ],
      background: 'rgb(0, 33, 52)'
    },
    {
      featured: false,
      type: 'Web Application',
      title: 'Cinema App',
      description: 'React client side application that incorporates RESTful Movie Database',
      summary: '',
      specs: 'React, Redux, CircleCI, AWS S3, CloudFront, Slack, GitHub, Docker, Heroku',
      details: [
        'Built responsive and custom Header, Carousel slideshow, Pagination, Search and Error components with React and Redux.',
        'Created AWS infrastructure with Terraform code which was integrated into CircleCi build job steps in a CI/CD pipeline.',
        'Utilized AWS S3 and Cloudfront for storing, distributing, and hosting frontend code for React App.',
        'Setup online Development, Staging, and Production Environments in Github integrated with CircleCi for automatic deployments.',
        'Integrated Slack messaging and notifications into CircleCi build job steps in CI/CD pipeline.',
        'Setup Sentry for Application error monitoring.'
      ],
      githublink: 'https://github.com/letItBezhumphries/cinema-react-app',
      url: '',
      images: [
        {
          src: CinemaMainPageImage,
          alt: 'landing page for cinema movie info app'
        },
        {
          src: CinemaMoviePageImage,
          alt: 'movie info page for cinema app'
        }
      ],
      background: 'rgb(110, 62, 83)'
    },
    {
      featured: false,
      type: 'E-Commerce Application',
      title: 'GetTix',
      description: 'Online store for buying and selling tickets',
      summary: '',
      specs:
        'Built utilizing a Microservices architecture with Node, TypeScript, and React for Frontend, MongoDB for backend, Redis caching and Docker, Kubernetes for development and deployment on DigitalOcean.',
      details: [
        'Constructed each service with Node and Express with a MongoDB backend and Redis for caching.',
        'Incorporated Ingress-Nginx, Docker, Kubernetes and Github actions to deploy micro-service architecture to DigitalOcean infrastructure.',
        'Built Server-side-Rendered React App using React Hooks and NextJS.',
        'Limited access to APIs using JWT-based authentication.',
        'Wired communication of data between services using an eventbus.',
        'Published and built custom NPM package in NPM registry for sharing reusable packages and code between services and speeding up load times and development.',
        'Wrote small test suite for testing that CRUD operations of each service returned the expected results.'
      ],
      githublink: 'https://github.com/letItBezhumphries/getTix',
      url: '',
      images: [
        { src: GetTixHomePageImage, alt: 'landing page for getTix app' },
        {
          src: GetTixPaymentPageImage,
          alt: 'payment page for getTix app'
        }
      ],
      background: 'rgb(21, 67, 121)'
    }
  ]
};

export default portfolioData;
