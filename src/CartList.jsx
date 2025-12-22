import { useDispatch, useSelector } from "react-redux"
import {useEffect, useState} from 'react'
import {removeItem} from './redux/slice'
import{useNavigate} from 'react-router-dom'
import { clearAllItems } from "./redux/slice"

function CartList() {
  const cartSelector = useSelector((state) => state.cart.items);
  console.log(cartSelector);

  const [cartItems,setCartItems]= useState(cartSelector)

  useEffect(()=>{
    setCartItems(cartSelector)
  },[cartSelector])
  const dispatch=useDispatch()
  const navigate= useNavigate()
  const manageQunatity = (id, q) => {
    let quantity = parseInt(q)>1 ? parseInt(q) : 1;

    const cartTempItems = cartSelector.map((item)=>{
      return item.id==id?
      {...item,quantity}:item
    })
    
    
    setCartItems(cartTempItems)
  };

  function handlePlaceOrder(){
    localStorage.clear()
    dispatch(clearAllItems())
    alert('Your Order is Placed')
    navigate("/")
  }

  return (
    <>
      <div className="cart-conatiner">
        <div className="cart-header">
          <h2>Your Cart Items</h2>
          <span>{cartItems.length} items</span>
        </div>
        {cartItems.length > 0
          ? cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <img src={item.thumbnail} />
                  <div className="item-details">
                    <h4>{item.title}</h4>
                    <p>{item.brand}</p>
                  </div>
                </div>
                <div className="item-action">
                  <div style={{ display: "flex" }}>
                    <input 
                      onChange={(evt) =>
                        manageQunatity(item.id, evt.target.value)
                      } value={item.quantity?item.quantity:1}
                      style={{margin:"15px"}}
                      type="number"
                      placeholder="enter quantity"
                      />
                        <div>
                          <span className="price"> ${(item.quantity? item.price*item.quantity:item.price).toFixed(2)}</span>
                          <button onClick={()=>dispatch(removeItem(item))} className="add-btn">Remove</button>
                        </div>
                      </div>
                    </div>
                  </div>
              
            ))
          : null}
        <div className="cart-footer">
          Total : $ {cartItems.reduce((acc, item) =>item.quantity? acc + item.price*item.quantity:acc+item.price, 0).toFixed(2)}
        </div>
        <button onClick={handlePlaceOrder} className="add-btn">Place Order</button>
      </div>
    </>
  );
}

export default CartList;
