import{ React,useState} from 'react'
import  {BrowserRouter  as Router,Route } from 'react-router-dom';
import {Link} from 'react-router-dom'
import {Image,Row,Col,ListGroup,Button,Card} from 'react-bootstrap'
import products from "../../Components/products";
import Rating from "../../Components/rating"
const ProductScreen = ({match}) => {
    const product=products.find((e) => e._id===match.params._id)
   
    return (
        <>
         <Link  to="./"className="btn btn-dark rounded-pill my-3 "> Go back </Link>
        <Row>
            <Col md={6}>
            <Image src={product.image} fluid />
            </Col>
            <Col  md={3}>
           <ListGroup variant="flush">
          <ListGroup.Item><h3> {product. name}</h3>  </ListGroup.Item>

         <ListGroup.Item>  <Rating values={product.rating} reviews={`${product.numReviews}  reviews`}></Rating></ListGroup.Item>
         <ListGroup.Item> Description :{product.description} </ListGroup.Item>
         <ListGroup.Item><h2>price: {product.price} Dt</h2>  </ListGroup.Item>
           </ListGroup>
            </Col>
        
            <Col md={3}>
            <Card>
                <ListGroup>
                    <ListGroup.Item>
                        <Row>
                           <Col>
                           price:</Col> 
                           <Col>
                           {product.price} Dt
                           </Col>
                        </Row>
                    
                    </ListGroup.Item>
                   
                    <ListGroup.Item>
                    
                    <Row>
                           <Col>
                           Status:</Col> 
                           <Col>
                           {product.countInStock?"On Stock":"not on Stock"}
                           </Col>
                        </Row>
                    
                </ListGroup.Item>
                <ListGroup.Item>
                    <button type="button" className="btn-block p-2 " disabled={product.countInStock===0}> <strong><h5>  Add to card</h5></strong></button>
                </ListGroup.Item>
                </ListGroup>

            </Card>
       </Col>
        </Row> 
        </>
    )
}

export default ProductScreen
