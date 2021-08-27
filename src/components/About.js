import "./about.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      // duration : 5000
    });
  }, []);

  return (
    <div id="about">
      <div className="container" data-aos="fade-up" data-aos-duration="3000">
        <h1 className="intro ">
          Hello there, I am Babis, a{" "}
          <span className="red">frontend developer</span> based on Athens. My
          goal is to create beautiful websites and apps.
        </h1>
      </div>
    </div>
  );
};

export default About;
