import React, { useState, useEffect } from 'react';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FaCreditCard, FaLock } from 'react-icons/fa';
import { clearCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Spinner} from 'react-bootstrap';

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setAmount(total);
  }, [cart]);

  const handleStripePayment = async () => {
    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_SERVER_URL}/orders/checkout/stripe`, {
        cart: cart,
        amount,
        name,
        email
      });

      window.location.href = data.url; 
    } catch (error) {
      setError(error.response ? error.response.data.error.message : 'An error occurred during payment processing.');
    } finally {
      setLoading(false);
    }
  };

  const handleRazorpayPayment = async () => {
    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_SERVER_URL}/orders/checkout/razorpay`, {
        cart: cart,
        amount,
        name,
        email
      });

      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        name: 'Abhay Dixit',
        description: 'Order Payment',
        order_id: data.order_id,
        handler: function (response) {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
          dispatch(clearCart());
          navigate('/success'); 
        },
        prefill: {
          name: name,
          email: email,
          contact: '7017709865'
        },
        notes: {
          address: 'Bhopal, Madhya Pradesh, India'
        },
        theme: {
          color: '#000000'
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      setError(error.response ? error.response.data.error.message : 'An error occurred during payment processing.');
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentOption = (paymentMethod) => {
    if (paymentMethod === 'stripe') {
      handleStripePayment();
    } else if (paymentMethod === 'razorpay') {
      handleRazorpayPayment();
    }
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-md-center">
        <Col md="6">
          <Card className="text-center">
            <Card.Header>
              <h3 className="text-secondary">Payment Gateway</h3>
            </Card.Header>
            <Card.Body className="p-4">
              <Form className="m-4">
                <Form.Group controlId="formBasicName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  disabled={!stripe || loading}
                  className="d-flex align-items-center"
                  onClick={() => {
                    const paymentOptions = document.getElementById('payment-options');
                    paymentOptions.style.display = 'block';
                  }}
                >
                  {loading ? (
                    <Spinner animation="border" size="sm" className="me-2" />
                  ) : (
                    <FaCreditCard className="me-2 border rounded-pill" />
                  )}
                  Checkout
                </Button>

                <div id="payment-options" style={{ display: 'none' }}>
                  <Form.Group controlId="formBasicPaymentOptions" className="mt-3">
                    <Form.Label>Select Payment Option</Form.Label>
                    <Button
                      variant="outline-primary"
                      className="me-2"
                      onClick={() => handlePaymentOption('stripe')}
                    >
                      Stripe
                    </Button>
                    <Button
                      variant="outline-secondary"
                      onClick={() => handlePaymentOption('razorpay')}
                    >
                      Razorpay
                    </Button>
                  </Form.Group>
                </div>
                {error && <div className="text-danger mt-3">{error}</div>}
              </Form>
            </Card.Body>
            <Card.Footer className="text-muted">
              <FaLock /> Secure payment
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;