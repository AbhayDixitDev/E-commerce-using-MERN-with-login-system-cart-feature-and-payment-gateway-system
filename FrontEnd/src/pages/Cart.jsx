import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, handleQuantityChange } from '@/redux/cartSlice'
import { Link } from 'react-router-dom'
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const cart = useSelector(state => state.cart.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setQuantity(1)
  }, [cart])

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id))
  }

  const handleCheckout = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const handleProceed = () => {
    navigate("/checkout")
  }

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h2>Cart</h2>
        </Col>
      </Row>
      <Row>
        <Col key={Math.random()} md={9} style={{borderRight:"1px dotted black"}}>
        <Row >
               <Col md={8}>Items</Col>
               <Col md={2}>Quantity</Col>
               <Col md={2}>Amount</Col>
        </Row>
        
        {cart.map(item => (
          <Row key={Math.random()} style={{padding:"20px 0px"}}>
          <Col md={8} key={item.id}>
              <Row>
                <Col md={3}>
                  <img src={item.img[0]} width={"100px"} />
                </Col>
                <Col md={9}>
                  <p>{item.title}</p>
                  <p>Price:<b> ${item.price}</b></p>
                </Col>
              </Row>
          </Col>
          <Col md={2}>
                <table style={{border:"1px solid black", fontSize:"20px", fontFamily: "Arial Black"}} >
                  <tr style={{border:"1px solid black",textAlign:"center"}} >
                  <td style={{width:"30px",cursor:"pointer"}}
                  onClick={() => {dispatch(handleQuantityChange({id:item._id,op:"-"}))}}
                >
                  <FaMinusSquare />
                </td>
                <td style={{width:"30px",cursor:"pointer"}} className="quantity">{item.quantity}</td>
                <td style={{width:"30px",cursor:"pointer"}}
                  onClick={() => {dispatch(handleQuantityChange({id:item._id,op:"+"}))}}
                >
                  <FaPlusSquare />
                </td>
                  </tr>
                </table>
          </Col>
          <Col md={2}>
          <p>${item.price*item.quantity}</p>
          </Col>

          <Col md={12}>
          <a onClick={() => {handleRemoveFromCart(item._id)}} style={{border:"1px groove black", textDecoration:"none", padding:"5px", display:"inline-block",cursor:"pointer"}}>Remove</a>
          </Col>
        </Row>
        

        ))}
        
        </Col>
        <Col md={3}>
        <Row>
          <Col md={8}>
            <b>Subtotal ({cart.length} &nbsp; Items)</b>
          </Col >
          <Col md={4} style={{textAlign:"right"}}>
            <b>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}.00</b>
          </Col>
        </Row>
        <Row>
          <Col>
          Shipping and taxes will be calculated at checkout
          </Col>
        </Row>
        <Row>
          <Col md={12}>
          <button  style={{backgroundColor:"#574CAE",fontFamily: 'Noto Sans, sans-serif',fontSize:"1.2rem",padding:"10px",fontWeight:"800",color:"white",textTransform: "none",border: "0 none",lineHeight: "1.42857143",letterSpacing: "normal", width:"100%"}}  onClick={handleCheckout}>Checkout</button>
          </Col>
        </Row>
        <Row>
          <Col style={{padding:"20px 0px",textAlign:"center"}}>
          <Link to="/" style={{textDecoration:"none"}}>Continue Shopping</Link>
          </Col>
        </Row>
        </Col>
      </Row>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Subtotal: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}.00</p>
          <p>Shipping and taxes will be calculated at checkout</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleProceed}>
            Proceed to Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default Cart
