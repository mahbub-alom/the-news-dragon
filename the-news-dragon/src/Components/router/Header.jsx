import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { VscAccount } from "react-icons/vsc";

const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <h2 className='text-secondary'><small>Journalism Without Fear or Favour</small></h2>
                <p>{moment().format("dddd, MMMM D YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={60}>Match Highlights: Germany vs Spain — as it happened    !     Match Highlights: Germany vs Spain as...        Match Highlights: Germany vs Spain as..</Marquee>
            </div>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link className='fw-bold' href="#features">Home</Nav.Link>
                                <Nav.Link className='fw-bold' href="#pricing">About</Nav.Link>
                                <Nav.Link className='fw-bold' href="#Career">Career</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link className='Dark' href="#profile"><VscAccount /></Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    <Button variant="secondary">Login</Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Container>
    );
};

export default Header;