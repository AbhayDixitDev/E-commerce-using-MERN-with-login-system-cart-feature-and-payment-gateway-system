import React from 'react'
import { Card } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import poster1 from "@/assets/images/poster1.jpg"
import poster2 from "@/assets/images/poster2.jpg"
const Posters = () => {
  return (
    <>
    <Container style={{padding:"50px 0px"}}>
        <Row>
            <Col md={6} style={{display:"flex",justifyContent:"left",alignItems:"center",backgroundImage:`url("${poster1}")`,backgroundSize:"cover",height:"50vh",borderRight:"20px solid white"}}>
            <Card style={{border:"none",borderRadius:"0px",backgroundColor:"transparent",height:"fit-content" }}>
  <Card.Body>
    <Card.Text style={{fontFamily: "Roboto, sans-serif", fontWeight: 100, fontSize: "1.2rem",color:"#574CAE"}}>Up to 20% off</Card.Text>

    <Card.Title style={{fontFamily: "Playfair Display, serif", fontWeight: 700,color:"#2E2A4D",fontSize:"2.5rem",lineHeight:"1"}}>HOT <br/> PRODUCTS!</Card.Title>

    <button style={{background: "#2E2A4D", color: "#FFFFFF",fontFamily: "Noto Sans, sans-serif",textTransform: "none",fontWeight: "normal",lineHeight: "1.8",letterSpacing: "normal",fontSize:"0.9rem",padding:"10px 30px"}}>SHOP NOW!</button>
  </Card.Body>
</Card>
            </Col>
            <Col md={6} style={{display:"flex",justifyContent:"right",alignItems:"center",backgroundImage:`url("${poster2}")`,backgroundSize:"cover",height:"50vh",borderRight:"20px solid white"}}>
            <Card style={{border:"none",borderRadius:"0px",backgroundColor:"transparent",height:"fit-content" }}>
  <Card.Body>
    <Card.Text style={{fontFamily: "Roboto, sans-serif", fontWeight: 100, fontSize: "1.2rem",color:"#574CAE",textAlign:"right"}}>How to choose the right frame?</Card.Text>

    <Card.Title style={{textAlign:"right",fontFamily: "Playfair Display, serif", fontWeight: 700,color:"#2E2A4D",fontSize:"2.5rem",lineHeight:"1"}}>FRAMES <br/>
    THAT FIT RIGHT!</Card.Title>

    <button style={{float:"right",background: "#2E2A4D", color: "#FFFFFF",fontFamily: "Noto Sans, sans-serif",textTransform: "none",fontWeight: "normal",lineHeight: "1.8",letterSpacing: "normal",fontSize:"0.9rem",padding:"10px 30px"}}>READ MORE!</button>
  </Card.Body>
</Card>
            </Col>
        </Row>
    </Container>
    
    
    </>
  )
}

export default Posters