import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const ContactUs = () => {
  return (
    <>
    <Container>
<Row style={{padding:"20px 0px"}}>
  <Col md={12}>
  <h1 style={{fontFamily: 'Libre Baskerville, serif',fontSize: '34px',fontWeight: 500,textTransform: 'none',lineHeight: 1.8,letterSpacing: 'normal',color: '#2E2A4D'}}>Do not hesitate to contact us with any queries. </h1>  
  </Col>
  <Col md={12}>
  <p style={{fontFamily: 'Libre Baskerville, serif',fontSize: '16px',fontWeight: 500,textTransform: 'none',lineHeight: 1.8,letterSpacing: 'normal',color: '#2E2A4D'}}>Give us a ring or a ping anytime round the clock at..... </p>  
  </Col>
</Row>
<Row style={{padding:"20px 0px"}}>
<Col md={4}>
  <p style={{fontFamily: 'Libre Baskerville, serif',fontSize: '16px',fontWeight: 500,textTransform: 'none',lineHeight: 1.8,letterSpacing: 'normal',color: '#2E2A4D'}}>
  Kelley A. Fleming 196 Woodside Circle <br/> Mobile,  FL 36602 <br/>
Phone:240-256-1942
     </p>  
  </Col>
  <Col md={4}>
  <p style={{fontFamily: 'Libre Baskerville, serif',fontSize: '16px',fontWeight: 500,textTransform: 'none',lineHeight: 1.8,letterSpacing: 'normal',color: '#2E2A4D'}}>
  Phone : 240-256-1942
     </p>  
  </Col>

  <Col md={4}>
  <p style={{fontFamily: 'Libre Baskerville, serif',fontSize: '16px',fontWeight: 500,textTransform: 'none',lineHeight: 1.8,letterSpacing: 'normal',color: '#2E2A4D'}}>
  Email : info@tourism.com <br/>
  www.tourism.com
     </p>  
  </Col>

 
</Row>
<Row style={{padding:"50px 0px"}}>
<Col md={12} style={{height:"60vh"}}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9521.522466557428!2d-1.593333!3d53.372239!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487980259e6e6c17%3A0x2379910fc9cf23ac!2sWyming%20Brook!5e0!3m2!1sen!2sus!4v1736664315015!5m2!1sen!2sus"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</Col>
</Row>

    </Container>
    
    </>
  )
}

export default ContactUs