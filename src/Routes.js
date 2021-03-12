import React from 'react';
import './Routes.css';
import { BrowserRouter } from 'react-router-dom';
import MyCarousel from './components/Carousel/MyCarousel';
import Navbar from "./components/Navbar/MyNavbar";
import TitleMessage from './components/TitleMessage/TitleMessage';
import About from './pages/About/About';
import Roll from 'react-reveal/Roll'
import { Parallax } from 'react-parallax';
import { Container } from 'react-bootstrap';
import Skills from './pages/Skills/Skills';
import Fade from "react-reveal/Fade";
import Projects from './components/Projects/Projects';
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import FooterPanel from "./components/Footer/Footer";


const Routes = () => {
    return (
        <div className="Routes">
            <BrowserRouter>
                <Navbar />
                <MyCarousel />
                <TitleMessage />
                {/* about me section */}
                <div className="about">
                    <Parallax
                        blur={{ min: -1000, max: 1000 }}
                        bgImage={require("./assets/img/parallex/background.webp")}
                        strength={-200}
                    >
                        <Container className="container-box rounded">
                            <Roll left>
                                <About />
                            </Roll>
                        </Container>
                    </Parallax>
                </div>

                {/* skills section  */}

                <div className="skills">
                    <Container className="container-box rounded">
                        <Fade duration={500}>
                            <Skills />
                        </Fade>
                    </Container>
                </div>

                {/* project section */}

                <div className="projects">
                    <Container className="container-box rounded">
                        <Fade duration={500}>
                            <Projects />
                        </Fade>
                    </Container>
                </div>

                {/* experience section */}

                <div className="experience">
                    <Container className="container-box rounded">
                        <Fade duration={500}>
                            <hr />

                            <Experience />
                        </Fade>
                    </Container>
                </div>

                {/* contact & footer section */}

                <div className="contact">
                    <Container className="container-box rounded">
                        <Fade duration={500}>
                            <hr />
                            <Contact />
                        </Fade>
                    </Container>

                    <hr />
                    <FooterPanel />
                </div>


            </BrowserRouter>
        </div>
    );
};

export default Routes;