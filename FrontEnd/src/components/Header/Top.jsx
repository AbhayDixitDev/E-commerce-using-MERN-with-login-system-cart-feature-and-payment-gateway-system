import React from 'react'
import { MdEmail, MdPhone } from 'react-icons/md'
import {Container, Row, Col} from 'react-bootstrap';
const Top = () => {
  return (
    <Container fluid style={{backgroundColor:"#F5F4F2"}}>
      <Row style={{textAlign:"center",padding:"5px 0px"}}>
        <Col md={4}>
       <Row>
       <Col style={{borderRight:"1px dotted black"}}><a href="mailto:info@domainname.com" ><MdEmail /> info@domainname.com </a></Col>
       <Col><a href="tel:0123456789" ><MdPhone /> 0123456789</a></Col>
       </Row>
        
        </Col>
      </Row>
    </Container>
  )
}

export default Top