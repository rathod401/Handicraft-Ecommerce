import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Category from "./Category";
import Products from "./Products";
import Contact from "./Contact";
import Addtocart from "./Addtocart";
import Cart from "./Cart";
// import USerlogin from "./USerlogin";
import { Routes, Route,} from 'react-router-dom';
const App=()=>{
  return(
    <>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/category" element={<Category/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/addtocart" element={<Addtocart/>}/>
      {/* <Route path="/userlogin" element={<USerlogin/>}/> */}
    </Routes>
    </>
  )
}
export default App;