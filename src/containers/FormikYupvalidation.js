import React from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";


function FormikYupvalidation(props) {
  return (
    <>
    <Container style={{paddingTop : '50px'}}>
      <Form>
        <Row>
        <Col md={7}>
            <FormGroup>
              <Label style={{fontSize : '20px'}} for="exampleEmail">Name</Label>
              <Input 
                style={{fontSize : '20px'}}
                id="exampleEmail"
                name="name"
                placeholder="Please Enter Name."
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={7}>
            <FormGroup>
              <Label style={{fontSize : '20px'}} for="exampleEmail">Email</Label>
              <Input 
                style={{fontSize : '20px'}}
                id="exampleEmail"
                name="email"
                placeholder="Please Enter Email."
                type="email"
              />
            </FormGroup>
          </Col>
          <Col md={7}>
            <FormGroup>
              <Label style={{fontSize : '20px'}} for="examplePassword">Password</Label>
              <Input 
                style={{fontSize : '20px'}}
                id="examplePassword"
                name="password"
                placeholder="Please Enter Password."
                type="password"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label style={{fontSize : '20px'}} for="exampleAddress">Address</Label>
          <Input
            style={{fontSize : '20px'}}
            id="exampleAddress"
            name="address"
            placeholder=" "
          />
        </FormGroup>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label style={{fontSize : '20px'}} for="exampleCity">City</Label>
              <Input style={{fontSize : '20px'}} id="exampleCity" name="city" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label style={{fontSize : '20px'}} for="exampleState">State</Label>
              <Input style={{fontSize : '20px'}} id="exampleState" name="state" />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label style={{fontSize : '20px'}} for="exampleZip">Zip</Label>
              <Input style={{fontSize : '20px'}} id="exampleZip" name="zip" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup check>
          <Input style={{fontSize : '20px' ,marginLeft : '-14px' , marginRight : '10px' , width : '40px' , height : '40px'}} id="exampleCheck" name="check" type="checkbox" />
          <Label style={{fontSize : '20px'}} check for="exampleCheck">
            Check me out
          </Label>
        </FormGroup>
        <Col md={2}>
        <Input style={{fontSize : '20px' , marginTop : '40px'}}  name="submit" type="submit" value="Submit" />
        </Col>
      </Form>
      </Container>
    </>
  );
}

export default FormikYupvalidation;
