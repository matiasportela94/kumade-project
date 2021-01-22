import React, { Component } from "react";
import '../assets/css/index.css'
import { Container, Row, Col } from "reactstrap";
import LogoImage from "../assets/images/DARUMA.png";
import FadeIn from "./FadeIn";

var imageStyle = {
    height: "100px",
  };

  export default function Deposits() {

    return (
      <div>
        <Container fluid>
          <Row>
            <Col xs="3">
            <img src={LogoImage} alt="" styles={ imageStyle } className="image" />
            </Col>
            <Col xs="9">
              <FadeIn>
                <h2>
                  <strong className="logo-text text-muted">Kumade</strong>
                </h2>
              </FadeIn>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

