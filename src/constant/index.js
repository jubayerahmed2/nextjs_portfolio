import {
  EmailIcon,
  ExpressJS,
  GithubIcon,
  LinkedInIcon,
  MongoDBIcon,
  NextJS,
  ReactJS,
  YoutubeIcon,
} from "@/components/icons";

const socialLinks = [
  {
    id: "l1",
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/jubayer-ahmed-7b19a82b3/",
  },
  {
    id: "l2",
    icon: <GithubIcon />,
    href: "https://github.com/mr-jubayer",
  },
  {
    id: "l3",
    icon: <YoutubeIcon />,
    href: "https://www.youtube.com/@codhex01",
  },
  {
    id: "l4",
    icon: <EmailIcon />,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=jubayerahmed.dev@gmail.com&su=SUBJECT&body=BODY",
  },
];

const navLinks = [
  {
    id: 1,
    href: "about",
    label: "About",
  },
  // {
  //   id: 2,
  //   href: "hire-me",
  //   label: "Hire Me",
  // },
  // {
  //   id: 3,
  //   href: "projects",
  //   label: "Projects",
  // },
  {
    id: 4,
    href: "contact",
    label: "Contact",
  },
  {
    id: 5,
    href: "blog",
    label: "Blog",
  },
];

const technologies = [
  {
    id: "t0",
    label: "NodeJS",
    icon: <h2 className="text-2xl">Node</h2>,
  },
  {
    id: "t4",
    label: "MongoDB",
    icon: <MongoDBIcon />,
  },
  {
    id: "t5",
    label: "Express",
    icon: <ExpressJS />,
  },
  {
    id: "t1",
    label: "React",
    icon: <ReactJS />,
  },
  {
    id: "t2",
    label: "Next.js",
    icon: <NextJS />,
  },
];

const projects = [
  {
    title: "Nexus",
    image: "https://i.ibb.co.com/fzwXPGWS/nexus.png",
    year: "2024",
    category: "WEBAPP",
    description:
      "Nexus is a platform for accessing and sharing news content. It offers dynamic articles, user reviews, and premium features for subscribers.",
    stacks: [
      "NodeJS",
      "ExpressJs",
      "ReactJS",
      "MongoDB",
      "Firebase",
      "Stripe",
      "React Router",
    ],
    liveSite: "https://nexus-3e632.web.app/",
  },
  {
    title: "WhereIsIt",
    image: "https://i.ibb.co.com/xKyxbWvb/whereisit.png",
    year: "2024",
    category: "WEBAPP",
    description:
      "A lost and found platform that helps users report lost items, browse found items, and connect with others to recover belongings.",
    stacks: [
      "NodeJS",
      "ExpressJs",
      "Firebase",
      "MongoDB",
      "ReactJs",
      "React Router",
    ],
    liveSite: "https://whereisit-84e04.web.app/",
  },
  {
    title: "Synapse",
    image: "https://i.ibb.co.com/WW7Sfwbq/synapse.png",
    year: "2025",
    category: "WEBAPP",
    description:
      "Synapse is a AI integrated modern application with subscription features",
    stacks: ["NodeJS", "ExpressJs", "Stripe", "MongoDB", "ReactJs"],
    liveSite: "https://synapse-776a2.web.app/",
  },
];

const blogs = [
  {
    title: "Declarative vs Imperative Programming Paradigm",
    excerpt:
      "Understand the deferent between Declarative and Imperative Programming with coding examples",
    coverImage:
      "https://xbsoftware.com/wp-content/uploads/2023/05/declarative-and-imperative-programming-min.jpg",
    publishedAt: "Jul 20, 2025",

    link: "https://medium.com/@jubayer1/declarative-vs-imperative-programming-paradigm-4aabbc20d552",
  },
  {
    title: "Explained IP address - how to find your current IP",
    excerpt:
      "Explained Internet Protocol (IP) address and showed how to find own IP address using a tool",
    coverImage:
      "https://content.nordlayer.com/uploads/How_to_use_static_IP_address_blog_cover_1400x800_77a85d0af4.webp",
    publishedAt: "Jul 8, 2025",

    link: "https://medium.com/@jubayer1/what-is-ip-address-b291a28efd17",
  },
];

export { blogs, navLinks, projects, socialLinks, technologies };
