import React, {useContext} from 'react'
import './FoodItem.css'
import {assets} from "../../assets/assets.js";
import {StoreContext} from "../../context/StoreContext.jsx";
// eslint-disable-next-line react/prop-types
const FoodItem = ({id,name,description,price,image}) => {
    const {cartItems,addToCart,removeToCart} = useContext(StoreContext);
    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={image} alt=''/>
                {!cartItems[id] ?
                <img  className='add' alt='' src={assets.add_icon_white} onClick={() => addToCart(id)}/>
                :
                    <div className='food-item-counter'>
                        <img src={assets.remove_icon_red} alt='' onClick={() => removeToCart(id)}/>
                        <p>{cartItems[id]}</p>
                        <img src={assets.add_icon_green} alt='' onClick={() => addToCart(id)}/>
                    </div>}
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img  src={assets.rating_starts} alt=''/>
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    )
}
export default FoodItem
