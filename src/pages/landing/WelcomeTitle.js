import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Typography from "@material-ui/core/Typography";
import ReactTextTransition, { presets } from "react-text-transition";

const randomNumber = () => Math.floor(Math.random() * 9999999999 + 10000000000);
const texts = ["Bienvenidos a", "喜ばしい", "Welcome to"];

var titleStyle = {
  fontFamily: "Raleway, sans-serif",
  fontSize: "12vh",
  color: "black",
  fontWeight: "400",
};


class WelcomeTitle extends Component {
  state = {
    number: randomNumber(),
    textIndex: 0,
    textFastIndex: 0,
    paragraphIndex: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        number: randomNumber(),
        textIndex: this.state.textIndex + 1,
        paragraphIndex: this.state.paragraphIndex + 1,
      });
    }, 4000);
    setInterval(() => {
      this.setState({
        textFastIndex: this.state.textFastIndex + 1,
      });
    }, 150);
  }

  render() {
    return (
      <div className="justify-content-left px-5">
        <Container fluid>
          <Row>
            <Col xs="12">
                  <Typography
                    style={titleStyle}
                    variant="h1"
                    color="textPrimary"
                    align="left"
                  >
                    <ReactTextTransition
                      text={texts[this.state.textIndex % texts.length]}
                      spring={presets.gentle}
                      style={{ margin: "0 4px" }}
                      inline
                    />
                  </Typography>
                
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default WelcomeTitle;
