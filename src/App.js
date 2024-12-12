import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import HelpSupport from "./components/HelpSupport";
import Cart from "./components/CartList";
import Footer from "./components/Footer";
import Card from "./cards/Cards";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [cart, setCart] = useState([])

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart =(data) => {
    console.log(cart)
    setCart([...cart,{...data, quantity: 1}])
  
  }

  const handleCartUpdate = (updatedCart) =>{
    setCart(updatedCart);
  };
 
  const [data, setdata] = useState()
  function greet(data){
    console.log (data)
    setdata(data)
  
    // return <Navbar data={data}/>;
  };
  
  return (
    <div className="flex flex-col justify-between h-screen">
    <Navbar size={cart.length} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  data={data}/>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} size={cart.length} />}/>
        <Route path="products" element={<Products/>}/>
        <Route path="helpsupport" element={<HelpSupport/>}/>
        <Route path="cart" element={<Cart cart={cart} onCartUpdate={handleCartUpdate}/>}/>
        <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="signup" element={<Signup setIsLoggedIn={setIsLoggedIn} greet={greet}/>}/>
      </Routes>

    <Footer/>
    
      
    </div>
  );
}

export default App;
