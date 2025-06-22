import FCC from "/public/assets/About/fcc.png";
import GoogleUX from "/public/assets/About/google-ux.png";
import IT from "/public/assets/About/it-specialist.png";
import Sololearn from "/public/assets/About/sololearn.png";
import {
  RiSearchLine,
  RiPencilLine,
  RiBrushLine,
  RiCodeLine,
  RiShieldCheckLine,
} from "react-icons/ri";

import Convex from "/public/assets/convex-svg.svg";
import TanstackStart from "/public/assets/tanstackstart.svg";

const aboutData = {
  techStack: {
    content: [
      { name: "Typescript", icon: "/public/assets/typescript-image.png" },
      //   { name: "Figma", icon: "/images/figma.png" },
      // add more
    ],
  },
  //   experience: {
  //     content: [
  //       {
  //         role: "Frontend Developer ",
  //         company: "House of Representatives - Philippines",
  //         period: "Feb 2025 - May 2025",
  //       },
  //     ],
  //   },
  education: {
    content: [
      {
        degree: "Bachelor of Technology in Software Engineering",
        institution: "Federal University of Technology,Owerri",
        period: "Aug 2020 - Aug 2025",
      },
    ],
  },
  //   certifications: {
  //     content: [
  //       {
  //         title: "Intro to Programming Using Java",
  //         institution: "Sololearn",
  //         date: "May 2025",
  //         image: Sololearn,
  //         link: "https://www.sololearn.com/en/certificates/CC-ZWBG7VOY",
  //       },
  //       {
  //         title: "Google UX Design Certificate",
  //         institution: "Coursera",
  //         date: "Jul 2024",
  //         image: GoogleUX,
  //         link: "https://www.coursera.org/account/accomplishments/professional-cert/XU2NUEN4EBY7?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
  //       },
  //       {
  //         title: "Responsive Web Design",
  //         institution: "freeCodeCamp",
  //         date: "Apr 2025",
  //         image: FCC,
  //         link: "https://www.freecodecamp.org/certification/jenny_yin/responsive-web-design",
  //       },
  //       {
  //         title: "IT Specialist in Databases",
  //         institution: "Pearson",
  //         date: "May 2025",
  //         image: IT,
  //         link: "https://www.credly.com/badges/4d41d162-e6f4-4c26-a069-03b397cd83a7/linked_in_profile",
  //       },
  //     ],
  //   },

  //   designProcess: {
  //     steps: [
  //       {
  //         title: "Research",
  //         description:
  //           "Before creating something useful, I focus on the details. Careful planning is key.",
  //         icon: RiSearchLine,
  //       },
  //       {
  //         title: "Wireframe",
  //         description:
  //           "With the details set, ideas move onto pen and paper, shaping the website's layout.",
  //         icon: RiPencilLine,
  //       },
  //       {
  //         title: "Design",
  //         description:
  //           "The exciting part — adding style and life to the wireframes.",
  //         icon: RiBrushLine,
  //       },
  //       {
  //         title: "Development",
  //         description:
  //           "Turning designs into a fully functional, practical product.",
  //         icon: RiCodeLine,
  //       },
  //       {
  //         title: "Test",
  //         description:
  //           "Optimizing load speed, SEO, and performance for a seamless experience.",
  //         icon: RiShieldCheckLine,
  //       },
  //     ],
  //   },
};

export const techIcons = {
  HTML: {
    name: "HTML",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  CSS: {
    name: "CSS",
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  JavaScript: {
    name: "JavaScript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  Typescript: {
    name: "Typescript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  React: {
    name: "React",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  "Solid-js": {
    name: "Solid-js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidjs/solidjs-original.svg",
  },
  TailwindCSS: {
    name: "TailwindCSS",
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },

  Figma: {
    name: "Figma",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  Prisma: {
    name: "Prisma",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  },
  tRPC: {
    name: "tRPC",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trpc/trpc-original.svg",
  },
  Git: {
    name: "Git",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  Tanstack: {
    name: "Tanstack",
    url: TanstackStart,
  },
  "Next.js": {
    name: "Next.js",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  },
  Convex: {
    name: "Convex",
    url: Convex,
  },
  Supabase: {
    name: "Supabase",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
  Firebase: {
    name: "Firebase",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain-wordmark.svg",
  },
  AppWrite: {
    name: "App-write",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg",
  },
};

export default aboutData;
