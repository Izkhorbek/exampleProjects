import azure from "../../../public/assets/skills/azure.svg";
import bootstrap from "../../../public/assets/skills/bootstrap.svg";
import canva from "../../../public/assets/skills/canva.svg";
import css3 from "../../../public/assets/skills/css3.svg";
import expressjs from "../../../public/assets/skills/expressjs.png";
import figma from "../../../public/assets/skills/figma.svg";
import firebase from "../../../public/assets/skills/firebase.svg";
import git from "../../../public/assets/skills/git.svg";
import github from "../../../public/assets/skills/github.svg";
import html from "../../../public/assets/skills/html.svg";
import javascript from "../../../public/assets/skills/javascript.svg";
import jwt_auth from "../../../public/assets/skills/jwt_auth.svg";
import mongodb from "../../../public/assets/skills/mongodb.svg";
import mysql from "../../../public/assets/skills/mysql.svg";
import nodejs from "../../../public/assets/skills/node-js.svg";
import npm from "../../../public/assets/skills/npm.svg";
import postman from "../../../public/assets/skills/postman.svg";
import react from "../../../public/assets/skills/react.svg";
import redux from "../../../public/assets/skills/redux.svg";
import stripe from "../../../public/assets/skills/stripe.svg";
import tailwindcss from "../../../public/assets/skills/tailwindcss.svg";
import typescript from "../../../public/assets/skills/typescript.svg";
import vite from "../../../public/assets/skills/vite.svg";

interface Data {
  name: string;
  img: string;
  url?: string;
}

export const SkillData: Data[] = [
  {
    name: "HTML",
    img: html,
    url: "https://www.w3schools.com/html/"
  },
  {
    name: "CSS",
    img: css3,
    url: "https://www.w3schools.com/css/"
  },
  {
    name: "JavaScript",
    img: javascript,
    url: "https://www.w3schools.com/js/"
  },
  {
    name: "TypeScript",
    img: typescript,
    url: "https://www.typescriptlang.org/"
  },
  {
    name: "ReactJS",
    img: react,
    url: "https://react.dev/"
  },
  {
    name: "Figma",
    img: figma,
    url: "https://Figma.com"
  },
  {
    name: "Github",
    img: github,
    url: "https://Github.com"
  },
  {
    name: "Git",
    img: git,
    url: "https://git-scm.com/docs/git-commit"
  },
  {
    name: "Redux",
    img: redux,
    url: "https://redux-toolkit.js.org/"
  },
  {
    name: "TailwindCSS",
    img: tailwindcss,
    url: "https://Tailwindcss.com"
  },
  {
    name: "Bootstrap",
    img: bootstrap,
    url: "https://getbootstrap.com"
  },
  {
    name: "Canva",
    img: canva,
    url: "https://Canva.com"
  },
  {
    name: "Node.js",
    img: nodejs,
    url: "https://nodejs.org/en"
  },
  {
    name: "MongoDB",
    img: mongodb,
    url: "https://account.mongodb.com/"
  },
  {
    name: "Express.js",
    img: expressjs,
    url: "https://expressjs.com/"
  },
  {
    name: "NPM",
    img: npm,
    url: "https://www.npmjs.com/"
  },
  {
    name: "Postman",
    img: postman,
    url: "https://www.postman.com/"
  },
  {
    name: "Firebase",
    img: firebase,
    url: "https://console.firebase.google.com/"
  },
  {
    name: "Stripe",
    img: stripe,
    url: "https://stripe.com/"
  },
  {
    name: "Vite",
    img: vite,
    url: "https://vitejs.dev/"
  },
  {
    name: "MySQL",
    img: mysql,
    url: "https://www.mysql.com/"
  },
  {
    name: "JWTAuth",
    img: jwt_auth,
    url: "https://www.mysql.com/"
  },
  {
    name: "Azure",
    img: azure,
    url: "https://www.mysql.com/"
  }
];
