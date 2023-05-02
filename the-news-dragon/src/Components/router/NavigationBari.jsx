import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../providers/AuthProvider';

const NavigationBari = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='text-secondary text-decoration-none me-2' to='/category/0'>Home</Link>
                            <Link className='text-secondary text-decoration-none ' to='/'>About</Link>
                            <Link className='text-secondary text-decoration-none ms-2' to='/'>Career</Link>
                            <Link className='text-secondary text-decoration-none ms-2' to='/register'>Register</Link>
                        </Nav>
                        <Nav>
                            {user &&

                                <FaUserCircle style={{ fontSize: '2.5rem' }} />
                            }

                            {
                                user ?
                                    <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                                    <Link to='/login'>
                                        <Button variant="secondary">Login</Button>
                                    </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBari;