import React from 'react';
import './About.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import Profile from "../../assets/img/profile/profile4.png";


const About = () => {
    return (
        <div id="about">
            <div className="about">
                <h1 className='pt-3 text-center font-details pb-3'>ABOUT ME</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        {/* profile pic */}
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2">
                                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                            </Row>
                        </Col>
                        {/* about me description */}
                        <Col xs={12} md={6}>
                            <Row className="text align-items-start p-2 my-details rounded">
                                {/* description */}
                                Hi! I am a<strong>&nbsp;Front End Developer</strong>
                                <br />I build and maintain websites and web applications. My specialities include UX/UI design, building reusable and testable web components. I enjoy working on creative side of the websites by using different frameworks and technologies.
                                <br />
                                In 2020, I left my job in the Bank, where i spent 11 years of my career. After that i have successfully completed Coding Bootcamp with specialization in 'Javascript'.
                                <br />I love learning about new technologies, what problems are they solving and how can I use them to build better and scalable products.
                                <br /> <br />
                            </Row>
                            <Row>
                                {/* buttons */}
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="mailto:cmaniev@gmail.com">
                                            <Button className="m-2" variant="outline-primary">
                                                Let's talk
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://drive.google.com/file/d/1sbLPcl_UT7MP529pZU_YktkAIAXs0CPi/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-success">
                                                My Resume
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/chingizmaniev" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-dark">
                                                GitHub
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/chingiz-maniev-0a7b50189/?locale=en_US" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info">
                                                LinkedIn
                                            </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;