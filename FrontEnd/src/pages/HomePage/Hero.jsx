import heroImg from "@/assets/images/heroImg.png"
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Hero = () => {
  return (
    <div  style={{backgroundImage:`url("https://static.zohocdn.com/ecommerce/stock-images/images/zpstock-image-773.png")`}}>
    <Container >

<Row style={{alignContent:"center",justifyContent:"center",display:"flex"}}>
<Col style={{alignItems:"center",justifyContent:"center",display:"flex"}} md={5}>
<Card style={{border:"none",borderRadius:"0px",backgroundColor:"transparent",height:"fit-content" }}>
  <Card.Body>
    <Card.Text style={{fontFamily: "Roboto, sans-serif", fontWeight: 100, fontSize: "1.8rem",color:"#574CAE"}}>30% off on our Fantastic Summer</Card.Text>

    <Card.Title style={{fontFamily: "Playfair Display, serif", fontWeight: 900,color:"#2E2A4D",fontSize:"3rem",lineHeight:"1.8"}}>COLLECTIONS!!</Card.Title>

    <Card.Subtitle style={{fontSize:"1rem",fontFamily: "Source Code Pro, sans-serif",lineHeight:"1.8"}} className="mb-2 text-muted">
    Enhance the visual impression of your face to multiple levels. Compare our styles on various faces- Quality Promised.
    </Card.Subtitle>
    <Button style={{background: "#2E2A4D", color: "#FFFFFF", borderColor: "transparent",borderRadius:"1rem",fontFamily: "Noto Sans, sans-serif",textTransform: "none",fontWeight: "normal",border:"0 none",lineHeight: "1.8",letterSpacing: "normal"}}>Shop Now !</Button>
  </Card.Body>
</Card>
</Col>
<Col md={7}>
<img src={heroImg} alt="" style={{width:"100%",height:"100vh",objectFit:"cover",overflow:"hidden"}} />
</Col>
</Row>

</Container>
</div>
  )
}

export default Hero