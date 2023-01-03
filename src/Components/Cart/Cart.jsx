import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addCart, delCart } from '../redux/action'
import './cart.css';

export default function Cart() {

        const state = useSelector((state) => state.handleCart);
        const dispatch = useDispatch();
      
        const handleAdd = (item) => {
          dispatch(addCart(item));
        };
        const handleDel = (item) => {
          dispatch(delCart(item));
        };
      
        const emptyCart = () => {
          return (
            <div className="cartEmptyContainer">
              <div className="cartEmpty">
                
                  <img src="/Assets/cartEmpty.png"  className='cartEmptyImg' alt="cart empty" />
                
              </div>
            </div>
          );
        };


        const cartItems = (product) => {
            return (
              <>
                
                    <div className="cartItemContainer">

                      <div className="cartItemImage">
                        <img className='itemImage' src={product.image} alt={product.title}/>
                      </div>

                      <div className="cartItemDetails">
                        <div>
                        <h3 className='cartProductTitle'>{product.title}</h3>
                        <p className="cartProductQyt">
                          {product.qty} X ${product.price} = $ {product.qty * product.price}
                        </p>
                        <button className="cartSubBtn" onClick={() => handleDel(product)}>
                          <i className="fa fa-minus"></i>
                        </button>
                        <button className="cartAddBtn" onClick={() => handleAdd(product)}>
                          <i className="fa fa-plus"></i>
                        </button>
                        </div>
                      </div>

                    </div>
                 
              </>
            );
          };


  return (
        <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
    </div>
    
  )
}
