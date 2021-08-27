import "./fewWords.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FewWords = () => {
  useEffect(() => {
    AOS.init({
      // duration : 5000
    });
  }, []);

  return (
    // <div className="fewWords">
    //   <div class="background">
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //   </div>
    <div className="wrapper">
      <p data-aos="fade-right" data-aos-duration="1500" data-aos-offset="200">
        I am self-taught freelance web developer from Greece and my passion is
        to design and develope creative websites.
      </p>
      <p data-aos="fade-right" data-aos-duration="1500" data-aos-offset="250">
        My aim is to build websites of a different kind. I like to give a lot of
        emphasis on the UI/UX part of the website, so at first i make a research
        and planning for the site's structure and layout.
      </p>
      <p data-aos="fade-right" data-aos-duration="1500" data-aos-offset="300">
        I will always do my best to meet your needs and expectations. I think
        it's important to have things written down, so we can come to a mutual
        understanding before we start.
      </p>
    </div>
    // </div>
  );
};

export default FewWords;
