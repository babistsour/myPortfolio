import Navbar from "./components/Navbar";
import About from "./components/About";
import FewWords from "./components/FewWords";
import Projects from "./components/Projects";
import ProjectItem from "./components/ProjectItem";
import Gradient from "./components/Gradient";
import Contact from "./components/Contact";

import "./app.scss";

function App() {
  return (
    <div>
      <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Navbar />

      <Gradient />
      <About />
      <FewWords />
      <Projects>
        <ProjectItem />
      </Projects>
      <Contact />
    </div>
  );
}

export default App;
