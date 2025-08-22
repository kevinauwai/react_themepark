import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "../../data";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, addToCart, removeFromCart } from "../../store/cartSlice";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const ProductDetail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { state } = useLocation();
  const [qty, setqtystate] = useState(0);
  let product = { ...state };

  let products = useSelector((state) =>
    state.reducer.itemList.filter((item) => item.id === product.id)
  );
  useEffect(() => {
    console.log(products);
    if (products.length > 0) {
      setqtystate(products[0].quantity);
    }
// 在组件挂载时将页面滚动到顶部
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();

  const flyitemtocart = async (event, fuc) => {
    //start
    // 封装一个延迟函数，返回Promise
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    // 获取元素
    const cartIcon = document.querySelector(".bi-cart");
    // 创建"飞入元素"（复制当前商品图片）
    const flyItem = document.createElement("img");
    flyItem.src = event.currentTarget.getAttribute("data-img");
    flyItem.className = "fly-item";

    // 获取按钮位置（作为动画起点）
    const btnRect = event.currentTarget.getBoundingClientRect();
    // 获取购物车位置（作为动画终点）
    const cartRect = cartIcon.getBoundingClientRect();
    // 设置飞入元素初始位置（与按钮对齐）
    flyItem.style.width = "30px";
    flyItem.style.height = "30px";
    flyItem.style.left = `${btnRect.left + btnRect.width / 2 - 30}px`; // 居中偏移
    flyItem.style.top = `${btnRect.top + btnRect.height / 2 - 30}px`;

    // 添加到页面
    document.body.appendChild(flyItem);

    try {
      // 第一步动画：先向左上方飞行一段距离
      await delay(10);
      flyItem.style.left = `${parseInt(flyItem.style.left) - 120}px`;
      flyItem.style.top = `${parseInt(flyItem.style.top) - 60}px`;
      flyItem.style.width = "50px";
      flyItem.style.height = "50px";

      // 等待第一阶段动画完成
      await delay(350);

      // 第二步动画：飞向购物车
      flyItem.style.left = `${cartRect.left + cartRect.width / 2 - 15}px`;
      flyItem.style.top = `${cartRect.top + cartRect.height / 2 - 15}px`;
      flyItem.style.width = "20px";
      flyItem.style.height = "20px";
      flyItem.style.opacity = "1"; // 渐隐

      // 等待第二阶段动画完成
      await delay(550);

      // 动画结束后处理
      document.body.removeChild(flyItem);
      //加入购物车
      fuc();
      // 购物车动画效果
      cartIcon.style.animation = "cartEffect 0.5s";
      await delay(500);
      cartIcon.style.animation = "";
    } catch (error) {
      console.error("动画执行出错:", error);
      // 确保元素被清理
      if (document.body.contains(flyItem)) {
        document.body.removeChild(flyItem);
      }
    }
    //end
  };
  const increase = () => {
    setqtystate(qty + 1);
    dispatch(addToCart({ ...product }));
  };
  const decrease = () => {
    if (qty >= 1) {
      setqtystate(qty - 1);
      dispatch(removeFromCart({ ...product }));
    }
  };

  return (
    <>
      <div className="glass-card mt-5 product_container">
        <div>
          <Button
            onClick={() => history.back()}
            className="neural-btn m-4 bg-red-500  px-4 py-2 rounded hover:bg-red-600"
          >
            Back
          </Button>
        </div>
        <Row>
          <Col xs={12} lg={6}>
            <img src={product.img} className="product_detail_img" />
          </Col>
          <Col xs={12} lg={6} className="product_detail_info">
            <h1 className="card-title">{product.title}</h1>
            <div className="stat-card">
              <div className="stat-number display-5">${product.price}</div>
              <div className="stat-label">Price</div>
            </div>
            <InputGroup className="mb-3 mt-2 w-50">
              <Button
                variant="outline-secondary"
                onClick={decrease}
                id="button-addon2"
              >
                -
              </Button>
              <Form.Control
                aria-label="input number"
                aria-describedby="basic-addon1"
                value={qty}
              />

              <Button
                className="add-btn"
                data-img={product.img}
                variant="outline-secondary"
                onClick={(event) => flyitemtocart(event, increase)}
                id="button-addon1"
              >
                +
              </Button>
            </InputGroup>
            <p>{product.description}</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProductDetail;
