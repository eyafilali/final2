import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap';
import Rating from "./rating"
const Product = ({product}) => {
    return (
        <Card className=" rounded my-3 p-3">
            <Link  to= {`./${product._id}` }> 
            <Card.Img src={product.image}/>
            </Link>
            <Card.Body>
            <Link to= {`./${product._id}` }> 
            <Card.Title><strong>{product.name}</strong></Card.Title>
            </Link> 
            <Card.Text className=" "> <Rating values={product.rating} reviews={`${product.numReviews}  reviews`}></Rating> </Card.Text>
            <Card.Text as="h3" className="  my-3 ">   {product.price} DT </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
