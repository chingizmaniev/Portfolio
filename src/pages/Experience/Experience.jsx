import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import RESUME from "../../assets/img/experience/resume.png";
import Tilt from "react-tilt";
import "./Experience.css";

const Experience = () => {
    return (
        <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3">RESUME</h1>
            <Jumbotron className="jumbo-style">
                <Container>
                    <Tilt options={{ max: 25 }}>
                        <Card>
                            <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                <Card.Img variant="top" className="img-resize" src={RESUME} />
                            </Card.Header>
                        </Card>
                    </Tilt>
                </Container>
            </Jumbotron>
            <h1 className="pt-3 text-center font-details-b pb-5"></h1>
        </div>
    );
};

export default Experience;