import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);

  const totalAmount = getTotalCartAmount();
  const deliveryAmount = 40;

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email" placeholder='Email address'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone' />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs.{totalAmount}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs.{totalAmount>0?deliveryAmount:0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs.{totalAmount>0? totalAmount+deliveryAmount:0}</b>
            </div>
          </div>

          <button disabled>PROCEED TO PAYMENT</button>

        </div>
      </div>
      
    </form>
  )
}

export default PlaceOrder