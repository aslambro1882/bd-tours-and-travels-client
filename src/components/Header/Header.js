import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Header = () => {
    const { user, handleLogout } = useAuth();
    return (
        <div>
            <Navbar bg="light" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img src="https://i.ibb.co/JxnJ1P2/6289366828-cfd7bfa9-89dc-42b2-b010-03656fbc4c48.png" alt="" width="100" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home" className="fw-bold fs-4 text-dark">Home</Nav.Link>
                            <Nav.Link href="#home" className="fw-bold fs-4 text-dark">News</Nav.Link>
                            <Nav.Link href="#home" className="fw-bold fs-4 text-dark">Blog</Nav.Link>
                            <Nav.Link href="#link" className="fw-bold fs-4 text-dark">Contact</Nav.Link>
                            {!user.displayName ?
                                <Nav.Link as={Link} to="/login" className="pe-5">Login</Nav.Link> :
                                <NavDropdown className="fw-bold fs-4 text-dark" title={user.displayName.slice(0, 10)} id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/myorders">My Order</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/manageorders">Manage All Orders</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/addnewoffer">Add a new service</NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                                </NavDropdown>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;