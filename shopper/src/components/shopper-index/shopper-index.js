import React from "react"
import {BrowserRouter,Routes, Route,Link} from 'react-router-dom' ;
import { ShopperHome } from "../shopper-home/shopper-home";
import { ShopperCategory } from "../shopper-category/shopper-category";
import  ShopperDetails  from "../shopper-details/shopper-details";
import { ShopperRegister } from "./shopper-register/shopper-register";


export function ShopperIndex()
{
    return(
        <BrowserRouter>
        <div className="container-fluid">
           
            <header className="d-flex p-2  justify-content-between">
            <div>
                <h2>Shopper.</h2>
            </div>
            <nav className="d-flex ">
                <div className="me-3"><Link to='home' className="btn">Home</Link></div>
                <div className="me-3"> <Link to="category/men's clothing" className="btn">Men's fashion</Link></div>
                <div className="me-3"><Link to="category/women's clothing" className="btn">Women's fashion</Link></div>
                <div className="me-3"><Link to="category/jewelery" className="btn">Jewelery</Link></div>
                <div className="me-3"><Link to="category/electronics" className="btn">Electronics</Link></div>
            </nav>
            <div>
                <span className="bi bi-search me-3"></span>
                <Link to="register" className="link"><span className="bi bi-person me-3"></span></Link>
                <span className="bi bi-heart me-3"></span>
                <span className="bi bi-cart4 me-3"></span>
            </div>
            </header>
            <div className="bg-dark text-white text-center p-1 mt-2">
                <p>⚡️ HAPPY HOLIDAY DEALS ON EVERYTHING ⚡️</p>
            </div>
            <div className="mt-3">
               <Routes>
                   <Route path="/" element={<ShopperHome/>}/>
                   <Route path="home" element={<ShopperHome/>}/>
                   <Route path="jewelery" element={<ShopperCategory/>}/>
                   {/* <Route path="men's fashion" element={<ShopperCategory/>}/> */}
                   {/* <Route path="women's fashion" element={<ShopperCategory/>}/>
                   <Route path="electonics" element={<ShopperCategory/>}/> */}
                   <Route path="/category/:catname" element={<ShopperCategory/>}/>
                   <Route path="details/:id" element={<ShopperDetails/>}/>
                   <Route path="register" element ={<ShopperRegister />} />
                   
               </Routes>
            </div>
            
        </div>
        </BrowserRouter>
    )
}