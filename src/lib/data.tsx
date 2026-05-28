import { Github, Twitter, Figma, Instagram, Linkedin } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoNest from '/public/images/logos/icon-nest.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoGit from '/public/images/logos/icon-git.svg';

import ProjectAirshield from '/public/images/project-airshield.jpg';
import ProjectCrisiGuardAi from '/public/images/project-crisisguard.jpg';
import ProjectOSINT from '/public/images/project-osint.jpg';

import {
  ProjectDetails,
  TechDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/ayu-sh912',
  GITHUB_REPO: 'https://github.com/ayu-sh912',
  INSTAGRAM: 'https://www.instagram.com/engineer.ayush704/',
  FIGMA: 'https://www.figma.com/@ayu_sh912',
  FIGMA_FILE:
    'https://www.figma.com/',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/ayu-sh912',
  },
  {
    icon: Instagram,
    url: 'https://www.instagram.com/engineer.ayush704/',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/ayushagrawal0912/',
  },
];

export const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    technologies: [
      {
        label: 'Javascript',
        logo: LogoJavascript,
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        label: 'Typescript',
        logo: LogoTypescript,
        url: 'https://www.typescriptlang.org/',
      },
      {
        label: 'React',
        logo: LogoReact,
        url: 'https://react.dev/',
      },
      {
        label: 'Next.js',
        logo: LogoNextjs,
        url: 'https://nextjs.org/',
      },
      {
        label: 'Tailwindcss',
        logo: LogoTailwindcss,
        url: 'https://tailwindcss.com/',
      },
    ],
  },

  {
    title: 'Backend',
    technologies: [
      {
        label: 'Node.js',
        logo: LogoNodejs,
        url: 'https://nodejs.org/en',
      },
      {
        label: 'Express.js',
        logo: LogoExpress,
        darkModeLogo: LogoExpressLight,
        url: 'https://expressjs.com/',
      },
      {
        label: 'Socket.io',
        logo: LogoSocket,
        darkModeLogo: LogoSocketLight,
        url: 'https://socket.io/',
      },
    ],
  },

  {
    title: 'Database',
    technologies: [
      {
        label: 'PostgreSQL',
        logo: LogoPostgreSQL,
        url: 'https://www.postgresql.org/',
      },
      {
        label: 'MongoDB',
        logo: LogoMongoDB,
        url: 'https://www.mongodb.com/',
      },
    ],
  },

  {
    title: 'Tools & Design',
    technologies: [
      {
        label: 'Figma',
        logo: LogoFigma,
        url: 'https://www.figma.com/',
      },
      {
        label: 'Git',
        logo: LogoGit,
        url: 'https://git-scm.com/',
      },
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'AirShield',
    description:
      'A real-time air quality monitoring system built with React, Node.js, and Firebase. Connects to a physical IoT sensor (gas, temperature, humidity) at GLA University Mathura, calculates AQI, runs ML-based 30-minute predictions, and displays everything in a neumorphic dashboard UI.',
    url: 'https://github.com/nitin-4921/AirShield-IoT',
    previewImage: ProjectAirshield,
    technologies: [
      'React',
      'Typescript',
      'React Bootstrap',
      'Firebase',
      'Express.js',
      'PostgreSQL',
      'Styled Components',
      'Redux',
    ],
  },
  {
    name: 'OSINT_PLATFORM',
    description:
      'A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.',
    url: 'https://github.com/ayu-sh912/OSINT_PLATFORM',
    previewImage: ProjectOSINT,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Material UI',
      'Redux Toolkit',
      'React Query',
      'Express.js',
      'PostgreSQL',
      'Firebase',
      'AWS Amplify',
      'Cypress',
      'Storybook',
    ],
  },
  {
    name: 'CrisisGuard AI',
    description:
      'A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.',
    url: 'https://github.com/ayu-sh912/CrisisGuardAi',
    previewImage: ProjectCrisiGuardAi,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Redux Toolkit',
      'React Query',
      'Storybook',
    ],
  },
];
