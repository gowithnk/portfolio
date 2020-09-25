import React from "react";
import "./App.css";
import MyNavbar from "./components/navbar/navbar";
import MyCarousel from "./components/carousel/carousel";
import MyTitleMessage from "./components/title-message/titleMessage";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyCarousel />
      <MyTitleMessage />
    </div>
  );
}

export default App;
