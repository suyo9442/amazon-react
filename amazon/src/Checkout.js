import React from "react";
import './Checkout.css';

function Checkout() {
    return (
        <div className="checkout">
            <h2>CART LIST</h2>

            <div className="checkout_ad">
                <div className="checkout_adCell">
                    <img className="checkout_adImg" 
                    src="./checkout_ad.jpg"
                    alt="checkout_ad" 
                    />
                </div>
            </div>

            <div className="checkout_total">
                <h2>장바구니 총 금액</h2>

            </div>

            <div className="checkout_list">
                <h2 className="checkout_title">장바구니 목록</h2>
            </div>
        </div>
    );
}

export default Checkout;