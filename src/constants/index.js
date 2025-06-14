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
    title: "React & Next.js",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Block Chain",
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: ' HTML, CSS,C, and C++',
    company_name: 'Learning',
    icon: starbucks,
    iconBg: '#383E56',
    date: '',
    points: [
      'Learning and building foundational skills in HTML, CSS, C++, and C programming languages.',
      'Collaborating with peers and mentors to understand best practices in web development and programming.',
      'Creating responsive designs using HTML and CSS, ensuring cross-browser compatibility and modern UI standards.',
      'Developing programs in C++ and C, focusing on algorithms, data structures, and memory management.',
    ],
  },
  {
    title: 'JavaScript',
    company_name: 'Self-Learning',
    icon: tesla,
    iconBg: "#E6DEDD",
    date: '',
    points: [
      'Gained a strong foundation in JavaScript, understanding core concepts such as variables, functions, and object-oriented programming.',
      'Learned modern JavaScript features including ES6+ syntax, promises, async/await, and modules.',
      'Practiced DOM manipulation and event handling to create interactive web pages.',
      'Explored JavaScript frameworks and libraries to enhance front-end development capabilities.',
      'Developed small projects to implement real-world applications and strengthen problem-solving skills.',
    ],
  },
  {
    title: 'React.js & Next.js',
    company_name: 'Rising Star Infotech & Tan θ Software Studio ',
    icon: shopify,
    iconBg: "#383E56",
    date: '',
     points: [
    'Learned and practiced core React.js concepts such as components, hooks, and state management at Rising Star Infotech.',
    'Developed interactive user interfaces and worked on real-world React projects to strengthen frontend development skills.',
    'Gained hands-on experience with Next.js, including routing, server-side rendering, and API integration at Tan θ Software Studio.',
    'Acquired foundational knowledge of blockchain technology, smart contracts, and web3 fundamentals during training at Tan θ.',
    'Explored performance optimization techniques like code splitting and lazy loading to enhance application efficiency.'
  ],
  },
  {
    title: 'Node.js',
    company_name: 'Tan θ Software Studio',
    icon: meta,
    iconBg: "#E6DEDD",
    date: '',
  points: [
    'Acquired foundational knowledge of Node.js and its role in building scalable backend services.',
    'Practiced implementing RESTful APIs with Express.js, focusing on CRUD operations for real-world applications.',
    'Explored user authentication and authorization using tools like JWT and middleware handling.',
    'Understood the basics of data protection through password hashing using libraries like bcrypt.',
    'Gained exposure to database integration with MongoDB and performed basic operations using Mongoose.',
    'Learned to structure backend projects for maintainability and scalability in a full-stack environment.'
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
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
