import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { productlist, productbanners } from "../../data";
import "../../css/onlineshop.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Product from "./Product";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
const OnlineShop = () => {
  const [filtervalue, setFilter] = useState("");
  const handleChange = (value) => {
    setFilter(value);
  };
   useEffect(() => {
  // 在组件挂载时将页面滚动到顶部
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <div className="banner">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {productbanners.map((item) => (
            <SwiperSlide>
              <img src={item.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="onlineshop_productlist container">
        <h2 className="section-title">Product List</h2>
        <InputGroup className="mb-3 w-25 ">
          <Form.Control
            className="search"
            aria-label="search"
            aria-describedby="basic-addon1"
            placeholder="please input product name to search"
            onChange={(e) => handleChange(e.target.value)}
          />
        </InputGroup>
        <Row>
          {productlist
            .filter((item) =>
              item.title.toLowerCase().includes(filtervalue.toLowerCase())
            )
            .map((product) => (
              <Col key={product.id} xs={12} md={6} lg={4}>
                <Product {...product} />
              </Col>
            ))}
        </Row>
      </div>
    </>
  );
};

export default OnlineShop;
