import React from "react";
import { Container, Row, Col } from "reactstrap";
import FadeIn from "../../components/FadeIn";

var subtitleStyle = {
  fontFamily: "Raleway, sans-serif",
  fontSize: "12vh",
  color: "black",
  fontWeight: "1000",
};

const Subtitle = (props) => {
  return (
    <div className="justify-content-left px-5">
      <Container fluid>
        <Row className="text-light">
          <Col xs="12" className="text-left">
            <FadeIn>
              <h2 style={subtitleStyle}>{props.message}</h2>
            </FadeIn>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Subtitle;
