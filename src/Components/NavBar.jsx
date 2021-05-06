import React from 'react'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'

const NavBar = () => (
    <Navbar expand="lg" className='p-0' style={{backgroundColor: '#111', color: 'white'}}>
        <Navbar.Brand href="#home">
            <a className="navbar-brand" href="#">
                 <img src="./assets/netflix_logo.png" alt='logo' id="logo" />
            </a>
                 </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
            <div href="#home" className='text-white mx-2'>Tv Shows</div>
            <div href="#link" className='text-white'>Add New</div>
            </Nav>
            <Nav className="ml-auto">
            <div href="#home" ><a className="nav-link text-white" href="#">KIDS</a></div>
            <div>
                <a className="navbar-brand" href="#">
                <img src="./assets/avatar.png" id="avatar" />
                </a>
            </div>

            </Nav>
        </Navbar.Collapse>
    </Navbar>

//  
)

export default NavBar