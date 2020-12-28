import React from 'react';
import {Row,Col} from 'react-bootstrap';
import products from "../../Components/products"
import Product from "../../Components/product";
const HomeScreens = () => {
    return (
        <>
        <Row>
            {products.map((e)=>(
               <Col key={e._id} sm={12} md={6} lg={4} >
                   <Product product ={e}/>
                   </Col> 
            ))}
        </Row>
        </>
    )

}

export default  HomeScreens;
