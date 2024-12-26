import { Row,Col, Container, Button } from "react-bootstrap";
import logo from '../assests/loginlogo.jpg';
import '../styles/signin.scss';
import InputGroup from 'react-bootstrap/InputGroup';

import Form from 'react-bootstrap/Form';


const SignIn = ()=>{
    return(
      
           
       <Container className="custom-container">
      <Row>
        <Col xs={2}> Login</Col>
        <Col xs={2}><img src={logo} alt="logo" className="image-signin"></img> </Col>
      </Row>
      <Form>
      <Form.Label htmlFor="phonenumber">Phone number</Form.Label>  
           
        <Form.Control  className="form-text-edit" type="text" placeholder="" />
    
       
        <div className="d-flex justify-content-center">
        <Button type="submit" className="btn-custom">Login</Button>
        </div>
      </Form>
       </Container>
       
    )
}
export default SignIn;