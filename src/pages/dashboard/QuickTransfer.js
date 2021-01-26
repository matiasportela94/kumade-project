import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import { Form, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import SendIcon from "@material-ui/icons/Send";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

function preventDefault(event) {
  event.preventDefault();
}

export default function QuickTransfer({sendMoney}) {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <Title>Quick Transfer</Title>

      <Form>
        <Form.Row className="align-items-center mt-2 mb-2">
          <Col xs="12">
            <Form.Control id="moneyReceiver" as="select" custom required>
              <option selected disabled>Recent Recipients</option>
              <option>Paul McCartney</option>
              <option>Tom Scholz</option>
              <option>Michael Jackson</option>
              <option>Bruce Springsteen</option>
            </Form.Control>
          </Col>
        </Form.Row>

        <Form.Row className="align-items-center">
          <Col xs="12">
            <InputGroup className="mt-2 mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id="moneyAmount"
                placeholder="Money ammount"
                required
              />
            </InputGroup>
          </Col>
        </Form.Row>

        <Form.Row className="align-items-center mt-2">
          <Col xs="8" className="p-0">
            <Form.Control placeholder="someone@something.com" required/>
          </Col>
          <Col xs="auto" className="pl-2">
            <Button onClick={()=>sendMoney(document.getElementById('moneyAmount').value, document.getElementById('moneyReceiver').value)}>
              <SendIcon />
              <span className="pl-2">Send</span>
            </Button>
          </Col>
        </Form.Row>
      </Form>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See your balance
        </Link>
      </div>
    </React.Fragment>
  );
}
