interface IExperienceData {
  id: number;
  name: string;
  startDate: string;
  endData: string;
  url: string;
  job: string;
  experience: number; //month
  description: string;
  technologies: string[];
}

export const ExperienceData: IExperienceData[] = [
  {
    id: 1,
    name: "HuenSoft Co., Ltd",
    job: "Software developer",
    experience: 25,
    url: "http://www.davoenc.co.kr/",
    startDate: "Aug 2022",
    endData: "Present · 2 yrs 2 mos",
    description: `HuenSoft Co., Ltd is a company specializing in air traffic control training simulators.
                 Everything that requires control based on cutting-edge technology and expert knowledge
                 In the transportation field (airlines, railways, shipping, etc.)
                 This is a company that supports simulated air traffic control training for air traffic controllers.)`,
    technologies: [
      "HTML",
      "CSS",
      "TailwindCSS",
      "JavaScript",
      "TypeScript",
      "Reactjs",
      "Redux",
      "ReduxToolkit",
      "MySql",
      "Threejs",
      "C#",
      "WPF",
      ".NET Web API",
      "C++",
      "MFC"
    ]
  },
  {
    id: 2,
    name: "iGlim Co., Ltd",
    job: "Desktop Software developer",
    experience: 11,
    url: "https://www.iglim.net/",
    startDate: "Sep 2021",
    endData: "Aug 2022 · 1 yr",
    description: `Developed measurement program for cell battery thickness in LG Energy, ensuring high-quality production.
                  Collaborated with senior developers to enhance software skills and work on a big project.
                  Learned to work effectively in a team environment and contribute to a major project.`,
    technologies: ["C++", "MFC", "Motors", "Chars"]
  }
];
