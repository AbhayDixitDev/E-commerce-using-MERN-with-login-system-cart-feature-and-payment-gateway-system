import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <Container fluid style={{ backgroundColor: '#2E2A4D', color: 'white' }}>
      <Row style={{ padding: '50px 0px' }}>
        <Col md={4}>
          <h5>Get in touch</h5>
          <p>
            <a href="mailto:info@domainname.com" style={{ color: 'white' }}>
              <FaFacebook /> info@domainname.com
            </a>
          </p>
          <p>
            <a href="tel:0123456789" style={{ color: 'white' }}>
              <FaInstagram /> 0123456789
            </a>
          </p>
          <p>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'white' }}
            >
              <FaTwitter /> Follow us on Facebook
            </a>
          </p>
        </Col>
        <Col md={4}>
          <h5>Useful links</h5>
          <p>
            <a href="/" style={{ color: 'white' }}>
              Home
            </a>
          </p>
          <p>
            <a href="/sunglasses" style={{ color: 'white' }}>
              Sunglasses
            </a>
          </p>
          <p>
            <a href="/eyeglasses" style={{ color: 'white' }}>
              Eyeglasses
            </a>
          </p>
          <p>
            <a href="/terms-and-conditions" style={{ color: 'white' }}>
              Terms and Conditions
            </a>
          </p>
          <p>
            <a href="/contact-us" style={{ color: 'white' }}>
              Contact Us
            </a>
          </p>
        </Col>
        <Col md={4}>
          <h5>Copyright</h5>
          <p>
            Copyright &copy; {new Date().getFullYear()} All rights reserved
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
