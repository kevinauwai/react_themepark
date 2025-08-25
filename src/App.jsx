import "./index.css";
import "./css/home.css";
import './CSS/card.css';
import './css/victor.css'
import Navmenu from "./components/Navmenu";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Home from "./pages/home/Home";
import OnlineShop from "./pages/shop/Onlineshop";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Cart from "./pages/shop/Cart";
import Product from "./pages/shop/Product";
import ProductDetail from "./pages/shop/ProductDetail";
import News from "./pages/news/News";
import NewsDetail from "./pages/news/NewsDetail";
//tracy
import Facilities from "./pages/facilities/Facilities";
import FacilitiesRobots from "./pages/facilities/FacilitiesRobots";
import Tickets from "./pages/ticketing/Tickets";
//tongny
import Restaurants from "./pages/Restaurants/Restaurants";
import Restaurant_Booking from "./pages/Restaurants/Components/Restaurant_Booking";
import FoodKiosks from "./pages/FoodKiosks/FoodKiosks";
import SpecialFoods from "./pages/SpecialFoods/SpecialFoods";
import SpecialFoods_Request from "./pages/SpecialFoods/Components/SpecialFood_Request";
import Subscription from "./pages/Subscription/Subscription";
import Subscription_Form from "./pages/Subscription/Components/Subscription_Form";
import Login from "./pages/Login/Login";

//vitor
import Contact_Us from './pages/contact_us/Contact_Us';
import Hotel_Booking from './pages/hotel_booking/Hotel_Booking';
import Hotel_Dining from './pages/hotel_dinning/Hotel_Dining';
import Hotel_Facilities from './pages/hotel_facilities/Hotel_Facilities';
import Hotel_Rooms from './pages/hotel_rooms/Hotel_Rooms';
import Hotel_Rooms_Deluxe from './pages/hotel_rooms_deluxe/Hotel_Rooms_Deluxe';
import Hotel_Rooms_Grand from './pages/hotel_rooms_grand/Hotel_Rooms_Grand';
import Hotel_Rooms_Premier from './pages/hotel_rooms_premier/Hotel_Rooms_Premier';
import Hotel_Rooms_Standard from './pages/hotel_rooms_standard/Hotel_Rooms_Standard';
import Job_Openings from './pages/job_openings/Job_Openings';
import React, {  useEffect } from "react";
function App() {
     useEffect(() => {
    // 在组件挂载时将页面滚动到顶部
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
      <BrowserRouter>
        <Navmenu />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/onlineshop" element={<OnlineShop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/product" element={<Product />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/newsdetail" element={<NewsDetail />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/facilitiesRobots" element={<FacilitiesRobots />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/restaurant_Booking" element={<Restaurant_Booking />} />
          <Route path="/foodKiosks" element={<FoodKiosks />} />
          <Route path="/specialFoods" element={<SpecialFoods />} />
          <Route path="/specialFoods_Request" element={<SpecialFoods_Request />}/>
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/subscription_Form" element={<Subscription_Form />} />
          <Route path="/login" element={<Login />} />
        <Route path = "/hotel_rooms" element = {<Hotel_Rooms />} />
        <Route path = "/hotel_rooms_deluxe" element = {<Hotel_Rooms_Deluxe />} />
        <Route path = "/hotel_rooms_grand" element = {<Hotel_Rooms_Grand />} />
        <Route path = "/hotel_rooms_premier" element = {<Hotel_Rooms_Premier />} />
        <Route path = "/hotel_rooms_standard" element = {<Hotel_Rooms_Standard />} />
        <Route path = "/hotel_dining" element = {<Hotel_Dining />} />
        <Route path = "/hotel_facilities" element = {<Hotel_Facilities />} />
        <Route path = "/hotel_booking" element = {<Hotel_Booking />} />
        <Route path = "/job_openings" element = {<Job_Openings />} />
        <Route path = "/contact_us" element = {<Contact_Us />} />
        </Routes>
        {/* <Home/> */}
        {/* <OnlineShop /> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
