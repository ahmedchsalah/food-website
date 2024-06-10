// import React from 'react'
import './PlaceOrder.css';
import {useContext} from "react";
import {StoreContext} from "../../context/StoreContext.jsx";
const PlaceOrder = () => {
    const {getCartTotalAmount} = useContext(StoreContext);
    return (
        <form className='place-order'>
            <div className='place-order-left'>
                <p className='title'>Delivery Information</p>
                <div className='multi-fields'>
                    <input type='text' placeholder='First name'/>
                    <input type='text' placeholder='Last name'/>
                </div>
                <input type='email' placeholder='Email address'/>
                <input type='text' placeholder='Street'/>
                <div className='multi-fields'>
                    <input type='text' placeholder='City'/>
                    <input type='text' placeholder='State'/>
                </div>
                <div className='multi-fields'>
                    <input type='text' placeholder='Zip code'/>
                    <input type='text' placeholder='Country'/>
                </div>
                <input type='text' placeholder='Phone'/>
            </div>
            <div className='place-order-right'>
                <div className='cart-total'>
                    <h2>Cart Totals</h2>
                    <div>
                        <div className='cart-total-details'>
                            <p>Subtotal</p>
                            <p>${getCartTotalAmount()}</p>
                        </div>
                        <div className='cart-total-details'>
                            <p>Delivery Fee</p>
                            <p>${getCartTotalAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <div className='cart-total-details'>
                            <b>Total</b>
                            <b>${getCartTotalAmount() === 0 ? 0 : getCartTotalAmount() + 2}</b>
                        </div>
                        <hr/>
                    </div>
                    <button>Proceed to payment</button>
                </div>
            </div>
        </form>
    )
}
export default PlaceOrder
