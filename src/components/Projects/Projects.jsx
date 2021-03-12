import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";
import './Projects.css';

// projects
import L_ContactBook from "../../assets/img/projects/contactbook.webp";
import L_Portfolio from "../../assets/img/projects/portfolio.webp";
import L_Explore from "../../assets/img/projects/explore.webp";
import L_Bookshop from "../../assets/img/projects/bookshop.webp";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_JQUERY from "../../assets/img/skills/jquery.png";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";



const Projects = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                    {/* Project: Contact Book */}
                    <ImageEvent
                        date="01/10/2020"
                        className="text-center"
                        text="JS Contact Book"
                        src={L_ContactBook}
                        alt="JS Contact Book"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is a Contact Book App that keeps information about your contacts
                                                <hr />
                                                <strong>Functionality:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Create, Update, Read, Delete contact information (CRUD)</li>
                                                    <li>Powered by Javascript, HTML and CSS</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                        HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                        CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JAVASCRIPT}
                                                                alt="Javascript"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                        Javascript
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-around text-center">
                                <UrlButton
                                    href="https://chingizmaniev.github.io/Contact-Book/"
                                    target="_blank"
                                >
                                    VISIT WEB SITE
                                </UrlButton>
                                {/* <UrlButton
                                    href="https://github.com/chingizmaniev/Contact-Book"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton> */}
                                {/* <UrlButton
                                    href=""
                                    target="_blank"
                                >
                                    WATCH VIDEO
                                </UrlButton> */}
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: E-commerce website Weapons */}
                    {/* <ImageEvent
                        date="02/11/2020"
                        className="text-center"
                        text="Weapons website"
                        src={L_Weapons}
                        alt="Weapons website"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is e-commerce online store where you can find different gun products.
                                                <hr />
                                                <strong>Functionality:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Create, read, update and delete products (CRUD)</li>
                                                    <li>JSON server as product's database</li>
                                                    <li>Pagination</li>
                                                    <li>Styled with styled-components and bootstrap</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                        HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                        CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JQUERY}
                                                                alt="jQuery"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                                jQuery
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JAVASCRIPT}
                                                                alt="Javascript"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                                Javascript
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_BOOTSTRAP4}
                                                                alt="Bootstrap"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                                Bootstrap
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-around text-center">
                                <UrlButton
                                    href="https://chingizmaniev.github.io/Weapons-website/"
                                    target="_blank"
                                >
                                    VISIT WEB SITE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent> */}

                    {/* Project: Explore app (AirBnB clone) */}
                    <ImageEvent
                        date="15/01/2021"
                        className="text-center"
                        text="Explore"
                        src={L_Explore}
                        alt="Explore"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is an online platform for posting accomodations for short-term rent and tourism activities.
                                                <hr />
                                                <strong>Functionality:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Create, read, update and delete products (CRUD)</li>
                                                    <li>JSON server as product's database</li>
                                                    <li>Sign In/Sign Out sections</li>
                                                    <li>Styled with styled-components and material-ui</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                        HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                        CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JAVASCRIPT}
                                                                alt="Javascript"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                        Javascript
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_REACT}
                                                                alt="React"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                        React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_MATERIALUI}
                                                                alt="Material-UI"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                        Material-UI
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-around text-center">
                                <UrlButton
                                    href="https://explore-kg.herokuapp.com/"
                                    target="_blank"
                                >
                                    VISIT WEB SITE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: Bookshop*/}
                    <ImageEvent
                        date="15/01/2021"
                        className="text-center"
                        text="Bookshop"
                        src={L_Bookshop}
                        alt="Bookshop"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> E-commerce website where you can buy books online
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Create, read, update and delete products (CRUD)</li>
                                                    <li>JSON server as product's database</li>
                                                    <li>Pagination</li>
                                                    <li>Product details</li>
                                                    <li>Add to cart</li>
                                                    <li>Add to favorites</li>
                                                    <li>Visa/Mastercard payment</li>
                                                    <li>Sign In/Sign Out sections</li>
                                                    <li>Likes</li>
                                                    <li>Comments</li>
                                                    <li>Search</li>
                                                    <li>Styled with styled-components and bootstrap</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                        HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                        CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_REACT}
                                                                alt="React"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                        React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JAVASCRIPT}
                                                                alt="Javascript"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                                Javascript
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_MATERIALUI}
                                                                alt="Bootstrap"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                                Material-UI
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-around text-center">
                                <UrlButton
                                    href="https://bookshop-chingiz.herokuapp.com/"
                                    target="_blank"
                                >
                                    VISIT WEB SITE
                                </UrlButton>
                                {/* <UrlButton
                                    href="https://github.com/akjha96/getGithubInfo"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                                <UrlButton
                                    href="https://www.youtube.com/watch?v=K3h95l2YxmY&feature=youtu.be"
                                    target="_blank"
                                >
                                    WATCH VIDEO
                                </UrlButton> */}
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: My portfolio */}
                    <ImageEvent
                        date="01/03/2021"
                        className="text-center"
                        text="My portfolio"
                        src={L_Portfolio}
                        alt="My portfolio"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is my portfolio website on React
                                                <hr />
                                                <strong>Functionality:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Timelapse</li>
                                                    <li>Parallax</li>
                                                    <li>Accordion</li>
                                                    <li>Jumbotron</li>
                                                    <li>React Tilt</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                        HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                        CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_REACT}
                                                                alt="React"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                        React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JAVASCRIPT}
                                                                alt="Javascript"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                                Javascript
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_BOOTSTRAP4}
                                                                alt="Bootstrap"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                                Bootstrap
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-around text-center">
                                <UrlButton
                                    href=""
                                    target="_blank"
                                >
                                    VISIT WEB SITE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>



                </Events>
            </Timeline>
        </div>
    );
};

export default Projects;