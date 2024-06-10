// import React from 'react'
import './Cart.css';
import {useContext} from "react";
import {StoreContext} from "../../context/StoreContext.jsx";
import {useNavigate} from "react-router-dom";
const Cart = () => {
    const {cartItems,food_list,removeFromCart,getCartTotalAmount } = useContext(StoreContext)
    const navigate = useNavigate();
    return (
        <div className='cart'>
            <div className='cart-items'>
                <div className='cart-items-title'>
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item,index)=>{
                    if(cartItems[item._id] >0){
                        return(
                            <div key={index}>
                                <div className='cart-items-title cart-items-item'>
                                    <img alt='' src={item.image}/>
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>${item.price * cartItems[item._id]}</p>
                                    <p className='cross' onClick={()=> removeFromCart(item._id)}>x</p>
                                </div>
                                <hr />
                            </div>
                        )
                    }
                })}
                <div className='cart-bottom'>
                    <div className='cart-total'>
                        <h2>Cart Totals</h2>
                        <div>
                            <div className='cart-total-details'>
                                <p>Subtotal</p>
                                <p>${getCartTotalAmount()}</p>
                            </div>
                            <div className='cart-total-details'>
                                <p>Delivery Fee</p>
                                <p>${getCartTotalAmount()===0?0:2}</p>
                            </div>
                            <div className='cart-total-details'>
                                <b>Total</b>
                                <b>${getCartTotalAmount()===0?0:getCartTotalAmount()+2}</b>
                            </div>
                        </div>
                        <button onClick={()=>navigate('/order')}>Proceed to checkout</button>
                    </div>
                    <div className='cart-promocode'>
                        <div>
                            <p>If you have a promo code , Enter it here </p>
                            <div className='cart-promocode-input'>
                                <input type='text' placeholder='promo code'/>
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart
