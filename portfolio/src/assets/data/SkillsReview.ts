import imgBackend from "../../../public/assets/image/backend.png";
import imgFrontend from "../../../public/assets/image/frontend.png";
import imgSoftware from "../../../public/assets/image/software-development.png";
import imgDatabase from "../../../public/assets/image/database.png";
import imgFullStack from "../../../public/assets/image/fullstack.jpg";

interface skillReview {
  id: number;
  image: string;
  skillName: string;
}
const mySkillReview: skillReview[] = [
  {
    id: 0,
    image: imgSoftware,
    skillName: "Software Developer"
  },
  {
    id: 1,
    image: imgFrontend,
    skillName: "Front-end Developer"
  },
  {
    id: 2,
    image: imgBackend,
    skillName: "Back-end Developer"
  },
  {
    id: 3,
    image: imgFullStack,
    skillName: "Full-stack developer"
  },
  {
    id: 4,
    image: imgDatabase,
    skillName: "Database Management"
  }
];

export default mySkillReview;
