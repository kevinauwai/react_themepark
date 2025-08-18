import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import '../../data';
import Cart from './Cart';
import {useDispatch,useSelector} from 'react-redux';
import {clearCart,addToCart,removeFromCart} from '../../store/cartSlice';
const ProductDetail = () => {
  const {state}=useLocation();
  const [qty,setqtystate]=useState(0);
  let product={...state};

  const products=useSelector((state)=>state.reducer.itemList.filter((item)=>item.id===product.id));
  useEffect(()=>{
 console.log("**********************");
  console.log(products);
  if(products.length>0){
    setqtystate(products[0].quantity);
  }
  },[]);
  const dispatch=useDispatch();
    const increase=()=>{
      setqtystate(qty+1);
      dispatch(addToCart({...product}));
    }
    const decrease=()=>{
      if(qty>=1){
        setqtystate(qty-1);
      }
      dispatch(removeFromCart({...product}));
    }
  
  return (
    <>
    <div className='glass-card mt-5 product_container'>
        <Row>
            <Col xs={12} lg={6}>
            <img src='../img/onlineshop/product1.jpg' className='product_detail_img' />
            </Col>
            <Col xs={12} lg={6} className='product_detail_info'>
            <h1>2025 "Hallween Party" Winnie the Pooh Mini Ear hat</h1>
            <div>${product.price}</div>
            <h2>choose</h2>
            <InputGroup className="mb-3 w-50">
                        <Button variant="outline-secondary" onClick={increase} id="button-addon1">
                          +
                        </Button>
                        <Form.Control
                          aria-label="Example text with button addon"
                          aria-describedby="basic-addon1"
                          value={qty} 
                        />
                        <Button variant="outline-secondary" onClick={decrease} id="button-addon2">
                          -
                        </Button>
                      
                      </InputGroup>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, totam?</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, totam?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, totam?</p>
            </Col>
        </Row>
    </div>
    </>
  )
}

export default ProductDetail