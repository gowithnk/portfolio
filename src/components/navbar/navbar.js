import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/profile-portfolio.png";
import "../../components/navbar/navbar.css";

function MyNavbar() {
  return (
    <div>
      <Navbar
        fixed="top"
        containe
        collapseOnSelect
        expand="md"
        bg="dark"
        variant="dark"
        className="animate__navbar justify-content-between"
      >
        <Navbar.Brand href="#home">
          <img className="navbar__logo" src={Logo} alt="profile-portfolio" />
          Niranjan
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contacts">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
