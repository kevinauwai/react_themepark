import './index.css';
import './css/home.css'
import Navmenu from './components/Navmenu'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Section from './components/Section';
import Home from './pages/home/Home';
import OnlineShop from './pages/shop/Onlineshop';
import { BrowserRouter,Link,Routes,Route } from 'react-router-dom'
import Cart from './pages/shop/Cart';
import Product from './pages/shop/Product';
import ProductDetail from './pages/shop/ProductDetail';
import News from './pages/news/News';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navmenu/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/onlineshop' element={<OnlineShop/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path="/product" element={<Product />} />
      <Route path="/productDetail" element={<ProductDetail />} />
      <Route path="/news" element={<News />} />
    </Routes>
    {/* <Home/> */}
    {/* <OnlineShop /> */}
    <Footer/>
   
    </BrowserRouter>
    
    </>
  )
}

export default App
