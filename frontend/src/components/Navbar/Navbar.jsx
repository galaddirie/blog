import "./Navbar.css"

import React, { Component } from 'react'
import { Navbar, Nav, Container, NavItem, } from 'react-bootstrap';
import MenuButtonToggle from "./MenuButton/MenuButton.jsx";

import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link } from "react-router-dom";
class BlogNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'isOpen': false
        };
    }
    render() {
        return (

            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container fluid className="d-flex mx-0" >
                    <Navbar.Brand><Link className="nav-link " to={`/`}><img width={40} height={40} src={"/img/logo.svg"} alt={"im galad logo"} />[im_galad]</Link></Navbar.Brand>

                    <Navbar className="order-lg-1 ms-auto me-3 d-flex">
                        <Nav className="nav-icon-container" >
                            <Nav.Link className="nav-icon me-3" href="https://twitter.com/im_galad">
                                <i className="bi bi-twitter"></i>
                            </Nav.Link>
                            <Nav.Link className="nav-icon" href="#">
                                <i className="bi bi-discord"></i>
                            </Nav.Link>
                        </Nav>
                    </Navbar>

                    <MenuButtonToggle />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavItem className="item-underline-container me-3 active ">
                                <Link className="nav-link p-0" to={`/`}> Home </Link>
                                <div className="item-hover-underline"></div>
                            </NavItem>
                            {/* <NavItem className="item-underline-container me-3">
                                <Link className="nav-link p-0" to={`/tutorials`}>Tutorials</Link>
                                <div className="item-hover-underline"></div>
                            </NavItem> */}
                            <NavItem className="item-underline-container me-3">
                                <Link className="nav-link p-0" to={`/blog`}>Blog</Link>
                                <div className="item-hover-underline"></div>
                            </NavItem>
                            <NavItem className="item-underline-container me-3">
                                <Link className="nav-link p-0" to={`/portfolio`}>Portfolio</Link>
                                <div className="item-hover-underline"></div>
                            </NavItem>
                            <NavItem className="item-underline-container me-3">
                                <a href='https://im-galad.gumroad.com/' className="nav-link p-0">shop</a>
                                <div className="item-hover-underline"></div>
                            </NavItem>

                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>

        )
    }
}

export default BlogNav