import React from "react";
import { Nav } from "react-bootstrap";
import "./scroll-down.css";

function ScrollDown() {
  return (
    <div className="scrolldown__turn">
      <Nav.Link href="#about">
        <span> &gt; </span>
      </Nav.Link>
    </div>
  );
}

export default ScrollDown;
