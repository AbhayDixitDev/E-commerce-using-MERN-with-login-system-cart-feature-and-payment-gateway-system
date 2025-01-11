import {Container, Row, Col} from 'react-bootstrap';
import logo from "../../assets/Images/logo.png"
import { BiSearch } from "react-icons/bi";

const Middle = () => {
  return (
    <>
    <Container>
        <Row style={{padding:"40px 0px"}}>
            <Col>
            <img src={logo} style={{float:"right"}} />
            </Col>
            <Col style={{textAlign:"center",alignContent:"center"}}>
                <BiSearch   style={{float:"right",fontSize:"20px"}}/>
            </Col>
        </Row>
    </Container>
    
    
    </>
  )
}

export default Middle