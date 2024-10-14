export interface ICourse {
  id: number;
  website: string;
  name: string;
  linkSertificate: string;
  date: string;
  length: string;
}

export const Courses: Partial<ICourse>[] = [
  {
    id: 1,
    website: "Udemy",
    name: "Full Stack React Bootcamp with .Net API",
    linkSertificate:
      "https://www.udemy.com/certificate/UC-0c83060e-471d-4731-bfa5-d88f9c34c8b7/",
    date: "Dec, 22,2023",
    length: "21.5 total hours"
  },
  {
    id: 2,
    website: "Udemy",
    name: "Build ASP.NET Core Web API - Scratch to Finish (.NET 8 API)",
    linkSertificate:
      "https://www.udemy.com/certificate/UC-2c50a9d5-1f8b-4591-a988-04f73c9bdef7/",
    date: "July 12, 2024",
    length: "18 total hours"
  }
];
