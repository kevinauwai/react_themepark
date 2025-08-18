
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import { BrowserRouter,Link,Routes,Route, Navigate } from 'react-router-dom'
import ProductDetail from './ProductDetail';
import { useNavigate } from 'react-router-dom';
const Product = (product) => {
     const gotodetail=()=>{
      console.log();
      Navigate("/productDetail",{state:{...product}});
    }
  return (
    <>
    <Card style={{ width: '100%' }} className='glass-card'>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title style={{color:product.id%2==0?'var(--primary)':'var(--secondary)'}}>{product.title}</Card.Title>
                      
                    <div style={{color:product.id%2==0?'var(--primary)':'var(--secondary)'}}>${product.price}</div>
                    <div className='productlist_buttons'>
                        {/* <Button variant='outline-primary' className='btn btn primary'>Add to Cart</Button> */}

                     <Link to='/productDetail' state={{...product}} className='neural-btn mt-4 bg-red-500  text-center  py-2 rounded hover:bg-red-600 text-decoration-none  w-100'>Detail</Link>
                    
                    </div>
                    
                </Card.Body>
            </Card>

            
    </>
  )
}

export default Product