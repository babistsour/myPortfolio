import "./projectItem.scss";
import { projects } from "../data";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectItem = () => {
  useEffect(() => {
    AOS.init({
      // duration : 5000
    });
  }, []);

  return (
    <div>
      {projects.map((project) => {
        return (
          <div className="projectItems__container">
            <div className="projectItem">
              <h1>{project.title}</h1>

              <p className="project__description">{project.description}</p>
              <div className="project__details">
                <h5>Tech: </h5>
                <p className="techstack red">{project.subtitle}</p>
              </div>
              <a href={project.link}>Visit Website</a>

              <div
                className="line"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="100"
                data-aos-delay="150"
              ></div>
            </div>
            <h6>{project.id}/</h6>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectItem;
