import { ProjectData } from "../../assets/data/ProjectData";
function Projects() {
  return (
    <section id="projects">
      <div className="p-10">
        <div className="container">
          <h1 className="text-title_name">Projects</h1>
          <div className="flex gap-4 py-4 px-4 flex-wrap justify-between">
            {ProjectData.map((item) => (
              <div
                key={item.id}
                data-aos="fade-right"
                data-aos-delay={`${item.id * 200}`}
                className="grid grid-row-4 grid-cols-1 gap-y-2 max-w-[300px]
                p-2 justify-items-center items-center group hover:cursor-pointe drop-shadow-2xl"
              >
                {/* // <div className="flex flex-col justify-items-center items-center w-[200px] h-[280px] md:w-[300px] md:h-[380px] gap-2 p-2"> */}
                <img
                  src={item.img}
                  alt=""
                  className="object-cover w-[200px] h-[200px] group-hover:scale-110 transition-all ease-linear duration-300"
                />
                <h1 className="md:text-2xl text-xl  font-semibold font-mono">
                  {item.name}
                </h1>
                <p className="text-wrap text-center text-slate-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  magni consequatur reprehenderit consequuntur mollitia
                </p>
                <div className="flex gap-10">
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    className="bg-blue-700 text-white px-3 py-1 rounded hover:scale-105 transition-all duration-300 "
                  >
                    Source Code
                  </a>
                  <a
                    href={item.url}
                    target="_blank"
                    className="bg-green-700 text-white px-4 py-1 rounded hover:scale-105  transition-all duration-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
