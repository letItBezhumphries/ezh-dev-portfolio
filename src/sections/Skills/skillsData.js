import {
  faGaugeHigh,
  faCubes,
  faLightbulb,
  faCode,
  faDatabase,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';

import {
  faJs,
  faReact,
  faHtml5,
  faDev,
  faCss3,
  faSass,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import {
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiRedux,
  SiTerraform,
  SiPacker,
  SiAnsible,
  SiDocker,
  SiAmazonaws,
  SiWebpack,
  SiGithub,
  SiGit,
  SiDigitalocean,
  SiGnubash,
  SiJest,
  SiRedis,
  SiLinux,
} from 'react-icons/si';
import {
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3,
  FaSass,
  FaSquareJs,
} from 'react-icons/fa6';

const skillsData = {
  intro:
    'While most of my experience is in Web Development utilizing JavaScript, I also have experience working with DevOps / infrastructure building technologies like Terraform, Packer, Ansible, Docker.',
  skillgroups: [
    {
      type: 'Web Development',
      gpIcon: faCode,
      skills: [
        {
          skill: 'Javascript',
          tooltip:
            'I have over 4 years experience in JS and Node building upon my training at Hack Reactor the top coding Bootcamp in the US.',
          id: 'javascript-skill',
          level: 'Expert',
          percentage: '90%',
          icon: faJs,
        },
        {
          skill: 'NodeJs',
          tooltip: '',
          id: 'nodejs-skill',
          level: 'Pro',
          percentage: '80%',
          icon: faNodeJs,
        },
        {
          skill: 'React',
          tooltip:
            'With over 4 years of experience working with React, most of all my projects have been built from scratch with React frontend applications with Redux for state management, and webpack for bundling.',
          id: 'frontend-skill',
          level: 'Pro',
          percentage: '85%',
          icon: faReact,
        },
        {
          skill: 'Redux',
          tooltip: '',
          id: 'frontend-skill',
          level: 'Pro',
          percentage: '80%',
          icon: SiRedux,
        },
        {
          skill: 'Webpack',
          tooltip: '',
          id: 'frontend-skill',
          level: 'Pro',
          percentage: '80%',
          icon: SiWebpack,
        },
        {
          skill: 'HTML5',
          tooltip:
            'I have over 4 years experience developing web applications relying on my knowledge of HTML, CSS and SASS, and have incorporated responsive breakpoints to ensure the projects are tailored for multiple screen sizes.',
          id: 'html-css-skill',
          level: 'Pro',
          percentage: '85%',
          icon: faHtml5,
        },
        {
          skill: 'CSS3',
          tooltip: '',
          id: 'html-css-skill',
          level: 'Pro',
          percentage: '85%',
          icon: faCss3,
        },
        {
          skill: 'Sass',
          tooltip: '',
          id: 'html-css-skill',
          level: 'Pro',
          percentage: '75%',
          icon: faSass,
        },
        {
          skill: 'AWS',
          tooltip:
            'I have 3 years experience deploying application code on Amazon ec2 and ecs services.',
          id: 'aws-skill',
          level: 'Intermediate',
          percentage: '75%',
          icon: SiAmazonaws,
        },
      ],
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
          icon: SiMongodb,
        },
        {
          skill: 'MySql',
          tooltip: '',
          id: 'backend-skill',
          level: 'Pro',
          percentage: '80%',
          icon: SiMysql,
        },
        {
          skill: 'Redis',
          tooltip: '',
          id: 'backend-skill',
          level: 'Intermediate',
          percentage: '50%',
          icon: SiRedis,
        },
      ],
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
          icon: SiTerraform,
        },
        {
          skill: 'Ansible',
          tooltip: '',
          id: 'devop-skills',
          level: 'Intermediate',
          percentage: '60%',
          icon: SiAnsible,
        },
        {
          skill: 'Packer',
          tooltip: '',
          id: 'devop-skills',
          level: 'Intermediate',
          percentage: '65%',
          icon: SiPacker,
        },
        {
          skill: 'Docker',
          tooltip: '',
          id: 'devops-skills',
          level: 'Intermediate',
          percentage: '70%',
          icon: SiDocker,
        },
      ],
    },
  ],
  other: [
    {
      type: 'TDD',
      skills: ['Jest', 'Chai', 'Mocha'],
    },
    {
      type: 'Benchmarking',
      skills: ['Artillery', 'NewRelic'],
    },
  ],
  standards: [
    {
      message: 'Strong preference for easy to use, intuitive UX/UI.',
      heading: 'Intuitive',
      icon: faLightbulb,
    },
    {
      message: 'Fast load times and lag free interaction, my highest priority.',
      heading: 'Performant',
      icon: faGaugeHigh,
    },
    {
      message:
        "Websites don't have to be static, I love making pages come to life.",
      heading: 'Dynamic',
      icon: faLaptopCode,
    },
    {
      message: 'My layouts will work on any device, big or small.',
      heading: 'Scalable',
      icon: faCubes,
    },
  ],
};

export default skillsData;
