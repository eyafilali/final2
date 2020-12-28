import React from 'react'

const Rating = ({values,reviews, color}) => {
    return (
        <div className="rating">
            <span><i  style={{color}}className={values>=1 ? 'fas fa-star':values>=0.5 ? 'fas fa-star-half alt': "far fa-star" }>
            </i></span>
            <span><i  style={{color}} className={values>=2 ? 'fas fa-star':values>=1.5 ? 'fas fa-star-half alt': "far fa-star" }>
            </i></span>
            <span><i style={{color}}  className={values>=3 ? 'fas fa-star':values>=2.5 ? 'fas fa-star-half alt': "far fa-star" }>
            </i></span>
            <span><i  style={{color}} className={values>=4 ? 'fas fa-star':values>=3.5 ? 'fas fa-star-half alt': "far fa-star" }>
            </i></span>
            <span><i  style={{color}} className={values>=5 ? 'fas fa-star':values>=4.5 ? 'fas fa-star-half alt': "far fa-star" }>
            </i></span>
            <span></span>
            <span>{reviews}</span>
        </div>
    )
}
Rating.defaultProps={
    color:'#f8e825'
}
export default Rating
