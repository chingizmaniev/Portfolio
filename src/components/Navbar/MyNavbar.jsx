import React from 'react';
import './MyNavbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../assets/icons/logow.webp';

const MyNavbar = () => {
    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="md" variant="dark" className="animate-navbar nav-theme justify-content-between">
                <Navbar.Brand href="#home">
                    <img className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="navbar">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#experience">CV</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default MyNavbar;

// import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav'

// const MyNavbar = () => {
//     return (
//         <>
//             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//                 <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                     <Nav className="mr-auto">
//                         <Nav.Link href="#features">Features</Nav.Link>
//                         <Nav.Link href="#pricing">Pricing</Nav.Link>
//                     </Nav>
//                     <Nav>
//                         <Nav.Link href="#deets">More deets</Nav.Link>
//                         <Nav.Link eventKey={2} href="#memes">
//                             Dank memes
//                         </Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>
//         </>
//     );
// };

// export default Navbar;