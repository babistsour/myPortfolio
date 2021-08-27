import "./projects.scss";
import "./projectItem.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects(props) {
  useEffect(() => {
    AOS.init({
      // duration : 5000
    });
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h2 data-aos="fade-up" data-aos-duration="2000">
          A glance at my <span className="red">work</span>
        </h2>
      </div>
      {props.children}
    </section>
  );
}

export default Projects;
