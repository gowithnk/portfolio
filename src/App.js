import React from "react";
import "./App.css";
import MyNavbar from "./components/navbar/navbar";
import MyCarousel from "./components/carousel/carousel";
import MyTitleMessage from "./components/title-message/titleMessage";
import About from "./pages/about";
import Skills from "./pages/skills";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import Devider from "./components/Devider/devider";

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
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Skills />
    </div>
  );
}

export default App;
