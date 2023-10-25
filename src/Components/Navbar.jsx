import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import React, { useState, useRef, useEffect } from "react";
import Image from 'react-bootstrap/Image'
import './Home.css'
import pic from "../Image/profile.jpg";
import { useNavigate } from "react-router-dom";
import { auth} from "./firebase-config";
import {signOut, onAuthStateChanged} from "firebase/auth";

function Navbar1() {
    const nav = useNavigate();
    const [islogegdin, setIslogegdin] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
setIslogegdin(true);
        } else {
            setIslogegdin(false);
        }
    });
}, [auth.currentUser]);

  const logout = () => {
    signOut(auth).then(() => {
        alert("Successfully logout");
    }).catch((error) => {});
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isDropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        closeDropdown();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen]);


    return (
        <Navbar  expand="lg" className='bg-blue-700'>
            <Container>
                <Navbar.Brand href="/">
                    {/* <Image className="navimage"
                        src={logo}
                        alt="First slide"></Image> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" className='text-white fs-3'>Eng-Track</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="/plateforms"  className='fw-bold text-white fs-5'>Contests</Nav.Link>
                         <Nav.Link href="/contact" className='fw-bold text-white fs-5'>Profiles</Nav.Link>
                        <Nav.Link href="/contact" className='fw-bold text-white fs-5'>Courses</Nav.Link>
                        <Nav.Link href="/about" className='fw-bold text-white fs-5'>Team</Nav.Link>
                         <Nav.Link href="/member" className='fw-bold text-white fs-5'>About us</Nav.Link>
                    </Nav>
                    {islogegdin ? (
                  <>
                    <div
                      className="relative inline-block text-left"
                      ref={dropdownRef}
                    >
                      <button
                        onClick={handleDropdownClick}
                        className="w-12 h-12 p-1 relative group rounded-full overflow-hidden focus:outline-none"
                      >
                        <img
                          className="object-cover w-full h-full rounded-full border-solid border-2 border-black group-hover:opacity-70"
                          src={ pic}
                          alt="Profile"
                        />
                      </button>
                      {isDropdownOpen && (
                        <div className=" origin-top-right absolute right-0 mt-3 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div className="py-1">
                            <Nav.Link
                              to="/profile"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={closeDropdown}
                            >
                              View Profile
                            </Nav.Link>
                            <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <button onClick={() => { closeDropdown(); logout(); }}>
                              Logout
                            </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                    <Button variant="outline-light"className='mx-2 fw-bold' href='/login'>LOG IN</Button>
                )}
                       
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbar1;