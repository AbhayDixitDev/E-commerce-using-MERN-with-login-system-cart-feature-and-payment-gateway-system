import React, {useState, useEffect, lazy} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import {message} from 'antd'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
const ProductShow = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const [mainImg, setMainImg] = useState("")
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const [counter, setCounter] = useState(1)
    useEffect(() => {
        axios.get(`http://localhost:4000/items/${id}`).then((res) => {
            console.log(res.data)
            setProduct(res.data)
            setMainImg(res.data.img[0])
            setLoading(false)
        })
    },[])
  const handleDecrement = () => {
    if(counter > 1) {
        setCounter(counter - 1)
    }
    else{
        message.warning("Quantity can't be less than 1")
    }
  }
  const handleIncrement = () => {
    setCounter(counter + 1)
  }
  return (
    <Container>
        <Row style={{padding:"50px 0px"}}>
           
            <Col md={4}>
                {loading ? <p>Loading...</p> : <h1 style={{borderBottom:"1px solid black"}}>{product.title}</h1>}
                {loading ? <p>Loading...</p> : <p>{product.description}</p>}
               <Row>

               <Col>Quantity:</Col>
               <Col>

               <table style={{border:"1px dashed black"}}>
                   <tr style={{border:"1px dashed black"}}>
                       <td style={{border:"1px dashed black",width:"30px",textAlign:"center",cursor:"pointer"}}><FaCaretDown  onClick={handleDecrement}/></td>
                       <td style={{border:"1px dashed black",width:"30px"}}><p style={{display:"inline",padding:"0px 10px"}}>{counter}</p></td>
                 
                       <td style={{border:"1px dashed black",width:"30px",textAlign:"center",cursor:"pointer"}}><FaCaretUp  onClick={handleIncrement}/></td>
                   </tr>
               </table>
                
               
               </Col>
               </Row>

                <Col md={4}>
            Price: <br/>
                {loading ? <p>Loading...</p> : <h1>${product.price}</h1>}

            </Col>

            <Col md={4}>
            <button  style={{backgroundColor:"#574CAE",fontFamily: 'Noto Sans, sans-serif',fontSize:"1.2rem",padding:"10px",fontWeight:"800",color:"white",textTransform: "none",border: "0 none",lineHeight: "1.42857143",letterSpacing: "normal"}} onClick={()=>{dispatch(addToCart({...product,quantity:counter}))}}>Add to Cart</button>

            </Col>


            </Col>
            <Col md={8} >

             <Row>
                <Col md={12} style={{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh"}}>
            {loading ? <p>Loading...</p> : <img src={mainImg} alt="" height={"100%"} />}

                </Col>
             <Col md={12} style={{padding:"20px 0px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                      {loading ? <p>Loading...</p> : product.img.map((item) => {
                        return(
                            <img src={item} alt="" height={"100px"} style={{padding:"0px 10px"}} onClick={()=>{setMainImg(item)}}/>
                        )
                      })}
                    </Col>
             </Row>
                    
                   
            </Col>
        </Row>
        <Row>
           
        </Row>
    </Container>
  )
}

export default ProductShow