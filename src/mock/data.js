import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "Hello, my name is Michael Eclavea. I'm a full stack Software Developer.",
  paragraphTwo:
    'I have completed a rigorous boot-camp at CodeFellows while simultaneously completing other certificates in the process.',
  paragraphThree:
    "I have over a decade of experience working on computers, which includes repairing hardware, debugging software related issues and even building them from the ground up. I have also worked in the healthcare industry for the past 10 years. During this time, I've worked with dynamic teams consisting of diverse backgrounds, cultures and views. I work extremely well in team settings, but I'm also a strong independent worker. I am very self driven and love to let my work represent me.",
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: './videos/InspiredFitnessProject.mp4',
    title: 'Inspired Fitness & Training Facility',
    info:
      'This site was created for a clients fitness shop. An online e-commerce site made with React, Redux, MongoDB, JavaScript, HTML & CSS.',
    info2: '',
    url: 'https://inspiredfitness.herokuapp.com/',
    repo: 'https://github.com/MichaelEclavea/InspiredFitnessShop', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: './videos/CodeQuestProject.mp4',
    title: 'Code Heroes Quest',
    info:
      'A full story text-based web game. Code Fellows 401 JavaScript Final Project. Built using React, JavaScript, Socket.io, Express, chalk, jest, HTML, CSS, Inquirer and Inkarnate.',
    info2: '',
    url: 'https://codeheroesquest.herokuapp.com/',
    repo: 'https://github.com/code-heros-quest/codeHerosQuest', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: './videos/MyQuickPickProject.mp4',
    title: 'My Quick Pick',
    info:
      'A application that is designed to allow people to better tailor their lotto quick picks to a more specified range. Built with React.js, JavaScript, HTML, CSS, Node.js and node-sass.',
    info2: '',
    url: 'https://my-quick-pick.herokuapp.com/',
    repo: 'https://github.com/MichaelEclavea/QuickPick', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'mreyes671@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/michaeleclavea206/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/MichaelEclavea',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
