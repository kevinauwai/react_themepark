import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  addToCart,
  removeFromCart,
  removeProduct,
} from "../../store/cartSlice";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Cart Component
const Cart = () => {
  const cart = useSelector((state) => state.reducer.itemList);

  const dispatch = useDispatch();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [myfiltervalue, setFilter] = useState("");
  const handleChange = (filterValue) => {
    setFilter(filterValue);
  };
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
  const increase = (item) => {
    console.log("*************");
    dispatch(addToCart({ ...item }));
  };
  const decrease = (item) => {
    dispatch(removeFromCart({ ...item }));
  };
  return (
    <div className="glass-card mt-5">
      <div className="cart  p-6">
        <h2 className="cart_title text-2xl font-bold mb-4">Shopping Cart</h2>
        <InputGroup className="mb-3  ">
          <Form.Control
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            placeholder="please input to search"
            onChange={(e) => handleChange(e.target.value)}
          />
        </InputGroup>
        {cart.filter((item) =>
          item.title.toLowerCase().includes(myfiltervalue.toLowerCase())
        ).length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <div className="onlineshop_cart_container">
              <div className="stat-card onlineshop_cart_productlist">
                {cart
                  .filter((item) =>
                    item.title
                      .toLowerCase()
                      .includes(myfiltervalue.toLowerCase())
                  )
                  .map((item, index) => (
                    <div key={item.id} className="onlineshop_cart_item">
                      <img src={item.img} alt="" width={200} />
                      <div className="onlineshop_cart_item_info">
                        <h3
                          style={{
                            color:
                              index % 2 == 0
                                ? "var(--primary)"
                                : "var(--secondary)",
                          }}
                        >
                          {item.title}
                        </h3>
                        ${item.price.toFixed(2)} x {item.quantity}
                        <InputGroup className="onlineshop_cart_item_center mb-3 w-100">
                          <Button
                            data-img={item.img}
                            variant="outline-secondary"
                            onClick={() => decrease(item)}
                            id="button-addon2"
                          >
                            -
                          </Button>
                          <Form.Control
                            className="search"
                            aria-label="search"
                            aria-describedby="basic-addon1"
                            value={item.quantity}
                          />

                          <Button
                            data-img={item.img}
                            variant="outline-secondary"
                            onClick={(event) =>
                              flyitemtocart(event, () => increase(item))
                            }
                            id="button-addon1"
                          >
                            +
                          </Button>
                        </InputGroup>
                        <p>
                          <button
                            onClick={() => dispatch(removeProduct({ ...item }))}
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
                   {cart.filter((item) =>
          item.title.toLowerCase().includes(myfiltervalue.toLowerCase())
        ).length != 0 ? cart
                  .filter((item) =>
                    item.title
                      .toLowerCase()
                      .includes(myfiltervalue.toLowerCase())
                  )
                  .map((item)=>(
                    <Row className="order_item">
                    <Col xs={6} lg={6} style={{textAlign:"left"}}>{item.title}</Col>
                    <Col xs={3} lg={3}>{item.quantity}x{item.price.toFixed(2)}</Col>
                    <Col xs={3} lg={3}>${(item.quantity*item.price).toFixed(2)}</Col>
                    </Row>
                  )):""}
                  <div className="order_item">
                    <Row className="order_item">
                      <Col xs={6} lg={6} style={{textAlign:"left"}}>Total:</Col>
                    <Col xs={3} lg={3}> </Col>
                    <Col xs={3} lg={3}>${total.toFixed(2)}</Col>
                    </Row>
                    
                  </div>
                    
                  <p className="text-xl font-semibold">
                   
                  </p>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="testform.ControlInput1"
                    >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@test.com"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="testform.ControlInput1"
                    >
                      <Form.Label>Contact Number</Form.Label>
                      <Form.Control type="email" placeholder="Contact Number" />
                    </Form.Group>

                    <div className="mb-3">
                      <Form.Check // prettier-ignore
                        type="checkbox"
                        id="check1"
                        inline
                        label="I acknowledge that I have read and understood and I agree to the use of my personal data for direct marketing purposes in the manner set out in the Theme Park's Personal Information Collection Statement & Privacy Policy Statement"
                      />
                    </div>
                  </Form>
                  <button className="neural-btn mt-4 bg-red-500  px-4 py-2 rounded hover:bg-red-600">
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="cart_footer">
          <button
            onClick={() => history.back()}
            className="neural-btn mt-4 bg-red-500  px-4 py-2 rounded hover:bg-red-600"
          >
            Back
          </button>
          <button
            onClick={() => dispatch(clearCart())}
            className="neural-btn mt-4 bg-red-500  px-4 py-2 rounded hover:bg-red-600"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
