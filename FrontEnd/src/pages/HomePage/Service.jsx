import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import freeShip from "@/assets/images/vector4.svg"
import support from "@/assets/images/vector7.svg"
import offerCard from "@/assets/images/vector8.svg"
import secure from "@/assets/images/vector5.svg"
const Service = () => {
  return (
  <>
   <Container>
      <Row>

        <Col md={3} id="service" >
          <div > <img src={freeShip} alt="" width={"100%"} /> </div>
          <h4 >Free Shipping</h4>
          <p>Enjoy free shipping on all your orders.</p>
        </Col>

        <Col md={3} id="service" >
          <div > <img src={support} alt="" width={"100%"} /> </div>
          <h4 >24/7 Support</h4>
          <p>Reach out to us anytime, We are at your service.</p>
        </Col>

        <Col md={3} id="service" >
          <div > <img src={offerCard} alt="" width={"100%"} /> </div>
          <h4 >Offer Card</h4>
          <p>Enjoy discounts using our offer cards and coupon codes.</p>
        </Col>

        <Col md={3} id="service" >
          <div > <img src={secure} alt="" width={"100%"} /> </div>
          <h4 >Secure Payment</h4>
          <p>We provide secure payment gateways for your transactions.</p>
        </Col>

        
      </Row>

   </Container>
  </>
  )
}

export default Service