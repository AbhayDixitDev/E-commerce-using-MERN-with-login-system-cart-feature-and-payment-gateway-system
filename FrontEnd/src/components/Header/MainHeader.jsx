import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Top from './Top'
import Middle from './Middle'

const MainHeader = () => {
  return (
    <>
    <Top/>
    <Middle/>
    
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container >
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{display:"flex",justifyContent:"center",backgroundColor:"#2E2A4D",width:"100%"}}>
            <Nav.Link as={Link} to="/" style={{color:"white",padding:"10px 20px"}}>Home</Nav.Link>
            <Nav.Link as={Link} to="/sunglasses" style={{color:"white",padding:"10px 20px"}}>Sunglasses</Nav.Link>
            <Nav.Link as={Link} to="/eyeglasses" style={{color:"white",padding:"10px 20px"}}>Eyeglasses</Nav.Link>
            <Nav.Link as={Link} to="/contact-us" style={{color:"white",padding:"10px 20px"}}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    </>
  )
}

export default MainHeader