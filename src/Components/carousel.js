import React from 'react'
import {Carousel} from 'react-bootstrap'
const C = () => {
    return (
        <div>
           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/c1.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/c2.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/c3.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default C
