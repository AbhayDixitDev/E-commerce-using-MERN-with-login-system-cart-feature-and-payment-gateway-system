import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const BestSeller = () => {

    const items = [
        {
            title:"Aenean eu tristique",
            price:"$10.00 - $22.00",
            img:"https://optic-zone-demo.zohocommerce.com/product-images/product-image-05-01.jpg/2276408000000070023/400x400"
        },
        {
            title:"Alliance The Jam Sunglasses",
            price:"$19.00 $24.00",
            img:"https://optic-zone-demo.zohocommerce.com/product-images/product-02-01.jpeg/2276408000000070083/400x400"
        },
        {
            title:"Consectetur elit",
            price:"$12.00 - $22.00",
            img:"https://optic-zone-demo.zohocommerce.com/product-images/product-05-01.jpeg/2276408000000073419/400x400"
        },
    ]

    const ans = items.map((item) => {
        return(
            <Col md={4} id="allproducts" style={{padding:"20px 40px",border:"1px dashed #c5c5c7"}} >
                <p>{item.title}</p>
                <p>{item.price}</p>
           <img src={item.img} alt="" width={"100%"} /> 
            
          </Col>
        )
    })
  return (
    <Container>
    <Row >
        <Col md={12} id="allproducts" >
        <h2 style={{textAlign:"center",fontFamily: 'Libre Baskerville, serif',fontSize: '34px',fontWeight: 500,textTransform: 'none',color: '#2E2A4D',lineHeight: 1.8,letterSpacing: 'normal'}}>Our Best Sellers</h2>
        </Col>
    </Row>
    <Row style={{padding:"50px 0px"}}>
        {ans}
    </Row>
  </Container>
  )
}

export default BestSeller