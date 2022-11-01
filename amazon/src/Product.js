import React from "react";
import './Product.css';

function Product({title, price, image, rating}) {
    return (
       <div className="product">
        <div className="product_info">

            <img src={image} alt="product"/>
            <p className="product_title">{title}</p>
            <div className="product_rating">
                {
                    Array(rating) 
                    .fill()
                    .map(()=>(
                        <p>★</p>
                    ))
                }
            </div>
            <div className="product_price">
                <small>가격 </small>
                <strong>{price}</strong>
                <small>원</small>
            </div>

            <button type="button">ADD CART</button>

        </div>
       </div> 
    )
}

export default Product;