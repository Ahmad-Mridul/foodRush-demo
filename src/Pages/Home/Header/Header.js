import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home">PhysioTherapy</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home" className="text-white">Home</Nav.Link>
                        <Nav.Link as={Link} to="/therapies" className="text-white">Therapies</Nav.Link>
                        <Nav.Link as={Link} to="/therapists" className="text-white">Therapists</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">LogOut</Button> :
                            <Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;