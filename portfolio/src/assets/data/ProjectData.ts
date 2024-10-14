import foodmarket from "./../../../public/assets/projectImg/foodMarket.png";
import eCommerce from "./../../../public/assets/projectImg/eCommercUI.png";
import paintClone from "./../../../public/assets/projectImg/painterClone.png";
import dashboard from "./../../../public/assets/projectImg/dashboard.png";

interface ProjectInfo {
  id: number;
  name: string;
  desctiption?: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti possimus repellendus velit omnis doloribus quam
                quisquam accusamus perferendis cum reiciendis.`;
  img?: string;
  url: string;
  frontEnd: string;
  backEnd: string;
  hosting: string;
  githubUrl?: string;
}

export const ProjectData: ProjectInfo[] = [
  {
    id: 1,
    name: "Food Market",
    img: foodmarket,
    url: "https://foodmarket.azurewebsites.net",
    frontEnd: "HTML, CSS, JavaScript, React, Bootstrap",
    backEnd: "C#, ASP.NET, MySQL",
    hosting: "Azure",
    githubUrl:
      "https://github.com/Izkhorbek/React/tree/main/Food%20Market/redmango"
  },
  {
    id: 2,
    name: "Haircut Dashboard",
    img: dashboard,
    url: "https://izkhor-dashboard.azurewebsites.net",
    frontEnd: "HTML, CSS, JavaScipt, React",
    backEnd: "C#, ASP.NET, MySQL",
    hosting: "Azure"
  },
  {
    id: 3,
    name: "Shops-UI",
    img: eCommerce,
    url: "https://shops-ui.azurewebsites.net",
    frontEnd: "HTML, TailwindCSS, TypeScript, React",
    backEnd: "",
    hosting: "Azure",
    githubUrl: "https://github.com/Izkhorbek/React/tree/main/Ecommerce"
  },
  {
    id: 4,
    name: "Training Report",
    img: "",
    url: "",
    frontEnd: "WPF",
    backEnd: "C#, MySQL",
    hosting: ""
  },
  {
    id: 5,
    name: "Paint clone",
    img: paintClone,
    url: "https://izkhor-paint-clone.azurewebsites.net",
    frontEnd: "JS",
    backEnd: "",
    hosting: "Azure",
    githubUrl:
      "https://github.com/Izkhorbek/exampleProjects/tree/main/Paint%20Clone"
  }
];
