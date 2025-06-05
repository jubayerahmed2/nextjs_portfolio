import {
  EmailIcon,
  ExpressJS,
  GithubIcon,
  LinkedInIcon,
  MongoDBIcon,
  NextJS,
  ReactJS,
  TypeScriptIcon,
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
  {
    id: 2,
    href: "hire-me",
    label: "Hire Me",
  },
  {
    id: 3,
    href: "projects",
    label: "Projects",
  },
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
    id: "t1",
    label: "React",
    icon: <ReactJS />,
  },
  {
    id: "t2",
    label: "Next.js",
    icon: <NextJS />,
  },
  {
    id: "t3",
    label: "TypeScript",
    icon: <TypeScriptIcon />,
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
];

export { navLinks, socialLinks, technologies };
