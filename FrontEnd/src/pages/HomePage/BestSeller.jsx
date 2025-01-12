import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const BestSeller = () => {
    const [ items, setItems ] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:4000/items").then((res) => {
            console.log(res.data)
        setItems(res.data)

        }
        )
    },[])


    const ans = items.slice(0,3).map((item) => {
        return(
            <Col md={4} id="allproducts" style={{padding:"20px 40px",border:"1px dashed #c5c5c7"}}  >
                <p>{item.title}</p>
                <p>{item.price}</p>
           <img src={item.img[0]} alt="" width={"100%"} style={{cursor:"pointer"}} onClick={()=>{navigate(`/product/${item.id}`)}}/> 
            
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