import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import { BrowserRouter, Link, Routes, Route, Navigate } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import { useNavigate } from "react-router-dom";
import { clearCart, addToCart, removeFromCart } from "../../store/cartSlice";
const Product = (product) => {
  const dispatch = useDispatch();
  const increase = () => {
    dispatch(addToCart({ ...product }));
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
  return (
    <>
      <Card style={{ width: "100%" }} className="glass-card stat-card">
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title
            style={{
              color:
                product.id % 2 == 0 ? "var(--primary)" : "var(--secondary)",
            }}
          >
            {product.title}
          </Card.Title>

          {/* <div style={{color:product.id%2==0?'var(--primary)':'var(--secondary)'}}>${product.price}</div> */}
          <div className="stat-card card-font">
            <div className="stat-number">${product.price}</div>
            <div className="stat-label">Price</div>
          </div>
          <div className="productlist_buttons">
            {/* <Button variant='outline-primary' className='btn btn primary'>Add to Cart</Button> */}
            <Button
              data-img={product.img}
              className="add-btn neural-btn mt-4 bg-red-500  text-center  py-2 rounded hover:bg-red-600 text-decoration-none  w-100"
              onClick={(event) => flyitemtocart(event, increase)}
            >
              Add to Cart
            </Button>
            <Link
              to="/productDetail"
              state={{ ...product }}
              className="add-btn neural-btn mt-4 bg-red-500  text-center  py-2 rounded hover:bg-red-600 text-decoration-none  w-100"
            >
              Detail
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
