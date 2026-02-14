import "../../styles/Cart.css";
import React, { useContext } from 'react'
import { useState ,useRef } from "react";
import { CartContext } from "../../context/CartContext";



export default function Cart() {
  const[hoverId,setHoverId]=useState(null);
  const timeoutRef =useRef(null)
 const{addToCart }=useContext(CartContext)


  const handleEnter =(id)=>{
    clearTimeout(timeoutRef.current);
    setHoverId(id)
  };

  const handleLeave=()=>{
    timeoutRef.current=setTimeout(()=>{
      setHoverId(null)
    },2000)
  }
 
 
  

    const cartItem = [
        { id: 1, title: "Pink Rose bag - Champagne Pink",code:1002055, Price:"15/000/000" ,img:'./src/img/dsc02872.webp' },
        { id: 2, title: "Woshe Long Box - Light Sky Blue",code:1002054, Price:"25/000/000" ,img:'./src/img/dsc02870.webp'  },
        { id: 3, title: "Imperium VIP - Indigo",code:1002052, Price:"35/000/000" ,img:'./src/img/dsc02865.webp'},
        { id: 4,  title: "Woshe Long Box - Cream",code:1002050, Price:"30/000/000" ,img:'./src/img/dsc02856.webp' },
        { id: 5,  title: "Imperium VIP - Cream Pink",code:1002049, Price:"38/000/000" ,img:'./src/img/dsc02852.webp'},
        { id: 6,  title: "Imperium VIP - Coconut",code:1002047, Price:"38/800/000" ,img:'./src/img/dsc02854.webp' },
        { id: 7,  title: "Orchid Vase",code:1002061, Price:"6/800/000" ,img:'./src/img/dsc02832_jpg.webp' },
        { id: 8,  title: "Orchid Vase",code:1002060, Price:"8/800/000" ,img:'./src/img/dsc02845-1_jpg.webp' },
        { id: 9,  title: "Belle Red Heart",code:1002047, Price:"58/800/000" ,img:'./src/img/4u1a3329.webp' },
        { id: 10,  title: "Deep Red Heart Imperium",code:1002047, Price:"58/800/000" ,img:'./src/img/dsc02455.webp' },

      ];

  return (
    <div className="cart-container">
    
    <div className="cart-grid">
    {cartItem.map((item)=>( 
     <div key={item.id}  className="cart-card">
      <img src={item.img} alt=""   className="cart-img" />
       <p  className="cart-title">{item.title}</p>
       <span className="cart-code">کد محصول:{item.code}</span>
      
       <h1 className="cart-price"  onMouseEnter={()=>handleEnter(item.id)} onMouseLeave={handleLeave}>${item.Price}</h1>
       {
        hoverId === item.id && (
          <button  onClick={()=>addToCart(item)}  onMouseEnter={()=>clearTimeout(timeoutRef.current)} onMouseLeave={handleLeave} className={`cart-button ${hoverId === item.id ? "show" : ""}`}>خرید</button>
        )
       }

      </div>
    ))

    }
  </div>
       
    </div>
  )
}