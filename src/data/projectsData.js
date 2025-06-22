// Images
import TodoList from "/public/assets/Projects/todoList.png";
import TerminalPortfolio from "/public/assets/Projects/vuePortfolio.png";
import StrideImg from "/public/assets/Projects/stride-image.jpg";
import Snacz from "/public/assets/Projects/snacz.png";
import EduSparkPH from "/public/assets/Projects/edusparkph.png";
import Codeit from "/public/assets/Projects/codeit.png";

import Convex from "/public/assets/convex-svg.svg";
import TanstackStart from "/public/assets/tanstackstart.svg";
import RedditImage from "/public/assets/reddit-image.jpg";
import ChikiYouTube from "/public/assets/chiki-youtube.jpg";
import ChikiSlack from "/public/assets/chiki-slack.jpg";

const projectsData = [
  {
    id: 1,
    title: "Stride",
    image: StrideImg,
    description:
      "A Project Management Tool for teams to collaborate and handle tasks and projects.",
    url: "https://chikiteams.netlify.app/",
    tech: ["Convex", "Tanstack", "TailwindCSS"],
  },
  {
    id: 2,
    title: "Reddit Clone",
    image: RedditImage,
    description: "A Reddit Inspired Application built using React and Convex.",
    url: "https://chikireddit.netlify.app/",
    tech: ["ReactJS", "Convex"],
  },
  {
    id: 3,
    title: "ChikiTube",
    image: ChikiYouTube,
    // date: "May 2023",
    description:
      "My Youtube Clone built using Typescript, TanstackStart and TailwindCss .I built this using the Youtube API.",
    url: "https://chiki-youtube.netlify.app/",
    tech: ["ReactJS", "TailwindCSS"],
  },
  {
    id: 4,
    title: "Slack Clone",
    image: ChikiSlack,
    // date: "Apr 2025",
    description: "An attempt to Clone the Slack Application ",
    url: "https://chiki-slack-clone.vercel.app/",
    tech: ["ReactJS", "NextJS", "TailwindCSS", "Convex"],
  },
];

export const techIcons = {
  HTML: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  CSS: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  ReactJS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  TailwindCSS:
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  NextJS: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",

  Tanstack: TanstackStart,
  Convex: Convex,
  Supabase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",

  // VueJS:
  //   "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
  // Laravel: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
  Bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  // MySQL:
  //   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Figma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  // AdobeXD:
  //   "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
  // Notion:
  //   "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
  FramerMotion: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  // Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
};

export default projectsData;
