import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import {useEffect, useState} from "react";
import Image from 'react-bootstrap/Image'
import './Home.css'
// import logo from '../Images/logo.png'
import { useNavigate } from "react-router-dom";

function Navbar1() {
    const nav = useNavigate();


    return (
        <Navbar  expand="lg" className='bg-orange-50'>
            <Container>
                <Navbar.Brand href="/">
                    {/* <Image className="navimage"
                        src={logo}
                        alt="First slide"></Image> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" className='text-dark fs-3'>Eng-Track</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="/plateforms"  className='fw-bold fs-5'>Contests</Nav.Link>
                         <Nav.Link href="/contact" className='fw-bold text-dark fs-5'>Profiles</Nav.Link>
                        <Nav.Link href="/contact" className='fw-bold  fs-5'>Courses</Nav.Link>
                        <Nav.Link href="/about" className='fw-bold text-dark fs-5'>Team</Nav.Link>
                         <Nav.Link href="/member" className='fw-bold text-dark fs-5'>About us</Nav.Link>
                    </Nav>
                     <Button variant="outline-dark"className='mx-2 fw-bold' href='/login'>LOG IN</Button>
                       
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbar1;