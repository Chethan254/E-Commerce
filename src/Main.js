import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Landingpage/Home";
import Products from "./Components/Product/Products";
import Product from "./Components/Product/Product";
import {Routes, Route} from 'react-router-dom';
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

function Main(){
    return (
        <div className="mainContainer">
            <Navbar/>
            <Routes>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/products" element={<Products/>}/>
                <Route exact path="/products/:id" element={<Product/>}/> 
                <Route exact path="/cart" element={<Cart/>} />

            </Routes>
            
        </div>
    )
}
export default Main;