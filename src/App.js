import React from "react";
import "./App.css";
import MyNavbar from "./components/navbar/navbar";
import MyCarousel from "./components/carousel/carousel";
import MyTitleMessage from "./components/title-message/titleMessage";
import About from "./pages/about";
import Skills from "./pages/skills/skills";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import Devider from "./components/devider/devider";
import Experience from "./pages/experience";
import ProjectsTimeline from "./pages/Projects-timeline/projects-timeline";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyCarousel />
      <MyTitleMessage />
      <Devider />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex-bg.jpg")}
          bgImageAlt="nk-parallax"
          strength={-200}
        >
          <Container className="container-box rounded">
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
        </Parallax>
      </div>
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <Skills />
          </Slide>
        </Container>
      </div>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Experience />
          </Fade>
        </Container>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <ProjectsTimeline />
        </Slide>
      </Container>
    </div>
  );
}

export default App;
