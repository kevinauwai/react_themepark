import {useDispatch,useSelector} from "react-redux";
import {clearCart,addToCart,removeFromCart} from '../../store/cartSlice';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
// Cart Component
    const Cart = () => {  
      const cart = useSelector(state => state.reducer.itemList);
      const dispatch = useDispatch();
      const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const [myfiltervalue,setFilter]=useState("");
      const handleChange=(filterValue)=>{
        setFilter(filterValue);
      }
       const increase=(item)=>{
            dispatch(addToCart({...item}));
          }
          const decrease=(item)=>{
            dispatch(removeFromCart({...item}));
          }
      return (
        <div className="glass-card mt-5">
          <div className="cart  p-6">
          
          <h2 className="cart_title text-2xl font-bold mb-4">Shopping Cart</h2>
          <InputGroup className="mb-3 w-50 ">
                        <Form.Control
                          aria-label="Example text with button addon"
                          aria-describedby="basic-addon1"
                          placeholder="please input to search"
                          onChange={(e) => handleChange(e.target.value)}
                        />
                      </InputGroup>
          {cart.filter((item)=>item.title.toLowerCase().includes(myfiltervalue.toLowerCase())).length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
            <div className="onlineshop_cart_container">
                <div className="stat-card onlineshop_cart_productlist">
                   {cart.filter((item)=>item.title.toLowerCase().includes(myfiltervalue.toLowerCase())).map((item,index)=>(
                    <div key={item.id} className="onlineshop_cart_item">
                    <img src={item.img} alt="" width={200}/>
                    <div className="onlineshop_cart_item_info p-4">
                        <h3  style={{color:index%2==0?'var(--primary)':'var(--secondary)'}}>
                        {item.title}
                      </h3>
                  
                        ${item.price.toFixed(2)} x {item.quantity} 
                        <InputGroup className="onlineshop_cart_item_center mb-3 w-50">
                        <Button variant="outline-secondary" onClick={()=>increase(item)}  id="button-addon1">
                          +
                        </Button>
                        <Form.Control
                          aria-label="Example text with button addon"
                          aria-describedby="basic-addon1"
                          value={item.quantity} 
                        />
                        <Button variant="outline-secondary" onClick={()=>decrease(item)} id="button-addon2">
                          -
                        </Button>
                      
                      </InputGroup>
                      <p>
                        <button
                      onClick={() => dispatch(removeFromCart({...item}))}
                      className="neural-btn bg-red-500  px-4 py-2 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                      </p>
                    </div>
                    
                    </div>
                    ))}
                </div>
                <div className="stat-card onlineshop_cart_info">
                  <h2 className="border_bottom">Order Info</h2>
                    <div className="mt-4">
                <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
               <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="email" placeholder="Contact Number" />
                  </Form.Group>
                 
                  <div className="mb-3" >
                    <Form.Check // prettier-ignore
                        type="checkbox"
                        id="check1"
                        inline
                        label="I acknowledge that I have read and understood and I agree to the use of my personal data for direct marketing purposes in the manner set out in the Ocean Park's Personal Information Collection Statement & Privacy Policy Statement"
                      />
                  </div>
                </Form>
                <button
                  onClick={() => dispatch(clearCart())}
                  className="neural-btn mt-4 bg-red-500  px-4 py-2 rounded hover:bg-red-600"
                >
                  Clear Cart
                </button>
              </div>
                </div>
            </div>
           
              
              
            </>
          )}
          <button className="neural-btn mt-4 bg-red-500  px-4 py-2 rounded hover:bg-red-600">
                 Back
                </button>
        </div>
        </div>
        
      );
    };
export default Cart;