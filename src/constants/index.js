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
  accounts,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  nextjs,
  fastapi,
  python,
  langchain,
  openai,
  netflix
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
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Accounting & Finance",
    icon: web,
  },
  {
    title: "Full Stack NextJS Developer",
    icon: mobile,
  },
  {
    title: "Backend FastAPI Developer",
    icon: backend,
  },
  {
    title: "Generative AI Developer",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  {
    name: "TypeScript",
    icon: typescript,
  },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "fastapi",
    icon: fastapi,
  },
  {
    name: "langchain",
    icon: langchain,
  },
  {
    name: "openai",
    icon: openai,
  },
];

const experiences = [
  {
    title: "Cashier, Asst. Accountant, Import Asst.",
    company_name: "Brilliant Process & Jubilee Corporation - Karachi, Pakistan",
    icon: accounts,
    iconBg: "#383E56",
    date: "Dec 2008 - March 2013",
    points: [
      "Starting Jobs where I handled manual & computerized accounting, Cash Handling and Other Various Documentations.",
    ],
  },
  {
    title: "Accountant Plus Other Back Office Works",
    company_name: "Kamkool Trading Co & Hot N Spicy Restaurant - Dubai, UAE",
    icon: accounts,
    iconBg: "#E6DEDD",
    date: "Jul 2013 - Dec 2018",
    points: [
      "Manage Accounts, Import/Export Documentation, Procurement and Admin Work by implementing Quickbook Accounting System and MS-Office.",
    ],
  },
  {
    title: "Accounts Executive",
    company_name: "APAG Oil & M&N Impex - Karachi, Pakistan",
    icon: accounts,
    iconBg: "#383E56",
    date: "Jun 2019 - PRESENT",
    points: [
      "Managing Accounts and Tax Related Matters.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    // follow: "COURSE FOLLOWED FROM: ",
    // follow_link: "https://youtube.com/",
    git: "GITHUB REPO: ",
    source_code_link: "https://github.com/",
    video: "Video: ",
    video_link: "https://google.com/",
    image: carrent,
    
  },
  {
    name: "Netflix Clone",
    follow: "COURSE FOLLOWED FROM: ",
    follow_link: "https://www.youtube.com/watch?v=mqUN4N2q4qY",
    git: "GITHUB REPO: ",
    source_code_link: "https://github.com/Shahnawaz1990/netflix-clone",
    video: "Video: ",
    video_link: "https://drive.google.com/file/d/1uMjnRVCs26vREiEniynd8INqVR1_ay_T/view?usp=sharing",
    image: netflix,
    deploy: "Deployed at: ",
    dep_link: "https://netflix-clone-beta-liart-44.vercel.app/auth",
    
  },
  {
    name: "Trip Guide",
    follow: "COURSE FOLLOWED FROM: ",
    follow_link: "https://youtube.com/",
    git: "GITHUB REPO: ",
    source_code_link: "https://github.com/",
    video: "Video: ",
    video_link: "https://google.com/",
    image: tripguide,
    deploy: "Deployed at: ",
    dep_link: "https://vercel.com/",
  },
  {
    name: "Trip Guide",
    follow: "COURSE FOLLOWED FROM: ",
    follow_link: "https://youtube.com/",
    git: "GITHUB REPO: ",
    source_code_link: "https://github.com/",
    video: "Video: ",
    video_link: "https://google.com/",
    image: tripguide,
    deploy: "Deployed at: ",
    dep_link: "https://vercel.com/",
  },
  {
    name: "Job IT",
    follow: "COURSE FOLLOWED FROM: ",
    follow_link: "https://youtube.com/",
    git: "GITHUB REPO: ",
    source_code_link: "https://github.com/",
    video: "Video: ",
    video_link: "https://google.com/",
    image: jobit,
    
  },
  {
    name: "Job IT",
    follow: "COURSE FOLLOWED FROM: ",
    follow_link: "https://youtube.com/",
    git: "GITHUB REPO: ",
    source_code_link: "https://github.com/",
    video: "Video: ",
    video_link: "https://google.com/",
    image: jobit,
    
  },
  {
    name: "Trip Guide",
    follow: "COURSE FOLLOWED FROM: ",
    follow_link: "https://youtube.com/",
    git: "GITHUB REPO: ",
    source_code_link: "https://github.com/",
    video: "Video: ",
    video_link: "https://google.com/",
    image: tripguide,
    deploy: "Deployed at: ",
    dep_link: "https://vercel.com/",
  },
  {
    name: "Job IT",
    follow: "COURSE FOLLOWED FROM: ",
    follow_link: "https://youtube.com/",
    git: "GITHUB REPO: ",
    source_code_link: "https://github.com/",
    video: "Video: ",
    video_link: "https://google.com/",
    image: jobit,
    
  },
];

export { services, technologies, experiences, testimonials, projects };
