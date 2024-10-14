import "../../test.css";
import { ExperienceData } from "../../assets/data/ExperienceData";
const Experience = () => {
  return (
    <section id="experience" className="pt-10">
      <div className="container">
        <h1 className="text-title_name">Experience</h1>
        <div className="min-h-[400px]">
          {ExperienceData.map((item, index) => (
            <a
              href={item.url}
              key={index}
              className="flex items-baseline font-medium leading-tight text-slate-600  focus-visible:text-teal-300
              group text-base pt-10"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Software developer at Huensoft"
              data-aos="fade-left"
              data-aos-delay={`${item.id * 150}`}
            >
              <div
                className="w-full h-full rounded grid md:grid-cols-[40%_60%] 
              grid-cols-1 px-5 py-2 group-hover:bg-green-50"
              >
                <>
                  {/* Sana */}
                  <div className="group-hover:text-teal-300 text-xl">
                    {item.startDate} - {item.endData}
                  </div>
                  <div>
                    <span className="group-hover:text-teal-300 text-xl text-gray-500">
                      {item.name}
                    </span>
                    {"  ·  "}{" "}
                    <span className="group-hover:text-teal-300 text-teal-300">
                      {item.job}
                    </span>
                    <p className="pt-3 tracking-tight indent-4 text-sm leading-normal">
                      {item.description}
                    </p>
                    <div className="flex mt-2 flex-wrap">
                      {item.technologies.map((techItem, index) => (
                        <li className="mr-1.5 mt-2 list-none" key={index}>
                          <div className="job-skill__item">{techItem}</div>
                        </li>
                      ))}
                    </div>
                  </div>
                </>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
