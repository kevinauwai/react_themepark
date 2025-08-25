import { useLocation } from 'react-router-dom'
import { newsdetails } from '../../data';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {  useEffect } from "react";
const NewsDetail = () => {
  const {state}=useLocation();
  const newitem={...state};
  return (
    <div className='news_detail_container p-4'>
        <div className='news_detail_item card p-4'>
            <img src={newitem.img} alt=""  className='img-fluid'/>
            <div className='description p-4'>
              <h1 className='card-title'>{newitem.title}</h1>
              <p>{newitem.description}</p>
            </div>
        </div>
        {newsdetails.filter(item=>item.pid==newitem.id).map((detail,index)=>
       <Row className={index%2==1?'flex-row-reverse card':'flex-row card'}>
        <Col xs={12} md={6} lg={6} className='p-4'>
        <img src={detail.img} alt=""  className='img-fluid'/>
        </Col>
        <Col xs={12} md={6} lg={6}>
        <div className='description p-4'>
              <h1 className='card-title'>{detail.title}</h1>
              <p>{detail.description}</p>
            </div>
        </Col>
       </Row>
        )}
    </div>
  )
}

export default NewsDetail