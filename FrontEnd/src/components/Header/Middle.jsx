import {Container, Row, Col} from 'react-bootstrap';
import logo from "../../assets/Images/logo.png"
import { BiSearch, BiCart } from "react-icons/bi";
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';


const Middle = () => {
  const navigate = useNavigate()
  const cart = useSelector(state => state.cart.cart)
  return (
    <>
    <Container>
        <Row style={{padding:"40px 0px"}}>
            <Col>
            <img src={logo} style={{float:"right"}} />
            </Col>
            <Col style={{textAlign:"center",alignContent:"center"}}>
                {/* <BiSearch   style={{float:"right",fontSize:"20px"}}/> */}
                <span style={{float:"right",fontSize:"20px"}} onClick={()=>{navigate("/cart")}}><BiCart />{ cart.length>0 && cart.length}</span>
                
                

            </Col>
        </Row>
    </Container>
    
    
    </>
  )
}

export default Middle