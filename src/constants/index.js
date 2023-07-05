import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  kiai,
  house3d,
  samsung,
  gamepiupiu,
  logo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Android Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "3D Web Internship",
    company_name: "House3D",
    icon: house3d,
    iconBg: "#383E56",
    date: "Jun 2020 - Aug 2020",
    points: [
      "3D Web Developer",
    ],
  },
  {
    title: "Python Django Developer",
    company_name: "KiaiSoft",
    icon: kiai,
    iconBg: "#E6DEDD",
    date: "May 2022 - Aug 2022",
    points: [
      "Developing and maintaining web applications using Python and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Android Developer",
    company_name: "SamsungVietnam RnD",
    icon: samsung,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Present",
    points: [
      "Developing and maintaining Android applications using Java and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "The journey to becoming a developer",
    name: "Mai Hoang",
    image: logo,
  },
  {
    testimonial:
      "My choice",
    name: "Mai Hoang",
    image: logo,
  },
  {
    testimonial:
      "first trip",
    name: "Mai Hoang",
    image: logo,
  },
];

const projects = [
  {
    name: "GALLERY 3D MODEL",
    description:
      "Website to show 3D files",
    tags: [
      {
        name: "ThreeJs",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "CHANGE TEXTURE 3D",
    description:
      "Website for changing textures for 3D models",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/maih1/Change-texture-3D",
  },
  {
    name: "GAME NINJA PIU-PIU",
    description:
      "A game ninja",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pygame",
        color: "green-text-gradient",
      },
    ],
    image: gamepiupiu,
    source_code_link: "https://github.com/maih1/Piu-Piu",
  },
];

export { services, technologies, experiences, testimonials, projects };
