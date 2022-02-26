import "./navbar.css"
import { Link } from "react-router-dom";
import React, { Component, useState } from 'react'
import { Transition } from "@headlessui/react";
import { Navbar, Nav, Container, NavItem } from 'react-bootstrap';
class BlogNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'isOpen': false
        };
    }
    render() {
        return (

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container className="d-flex">
                    <Navbar.Brand href="#home">im galad</Navbar.Brand>
                    <Navbar className="order-lg-1 ms-auto me-3 d-flex">
                        <Nav className="nav-icon-container" >
                            <Nav.Link className="nav-icon" href="#">Twitter</Nav.Link>
                            <Nav.Link className="nav-icon" eventKey={2} href="#">
                                Discord
                            </Nav.Link>
                        </Nav>
                    </Navbar>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavItem>
                                <Nav.Link to="/features">Tutorials</Nav.Link>
                                <div class="item-hover-underline"></div>
                            </NavItem>
                            <NavItem>
                                <Nav.Link to="/features">Blog</Nav.Link>
                                <div class="item-hover-underline"></div>
                            </NavItem>
                            <NavItem>
                                <Nav.Link to="/features">Store</Nav.Link>
                                <div class="item-hover-underline"></div>
                            </NavItem>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        )
    }
}

export default BlogNav