import React from "react";
import "./App.css";
import MyNavbar from "./components/navbar/navbar";
import MyCarousel from "./components/carousel/carousel";
import MyTitleMessage from "./components/title-message/titleMessage";
import About from "./pages/about";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyCarousel />
      <MyTitleMessage />
      <About />
    </div>
  );
}

export default App;
