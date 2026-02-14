import React, { useState ,useContext } from "react";
import "../../styles/Header.css";
import image1 from "../../img/images-removebg-preview.png";
import image2 from "../../img/icons8-user-32.png";
import image3 from "../../img/icons8-basket-50.png";
import image4 from "../../img/icons8-search-50.png";
import { CartContext } from "../../context/CartContext";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const{cartItems}=useContext(CartContext)
  const[cartOpen,setcartOpen]=useState(false)




  const menuItems = [
    { id: 1, title: "موجود برای امروز", submenu: ["گل رز تازه", "ارکیده سفید", "گل‌های فصلی"] },
    { id: 2, title: "باکس گل", submenu: ["باکس لوکس", "باکس اقتصادی", "باکس هدیه"] },
    { id: 3, title: "دسته گل‌ها", submenu: ["دسته گل عروس", "دسته گل تولد", "دسته گل ترحیم"] },
    { id: 4, title: "ارکیده", submenu: ["ارکیده سفید", "ارکیده بنفش", "ارکیده آبی"] },
    { id: 5, title: "وشه رویال", submenu: ["وشه ویژه", "وشه اقتصادی", "وشه لوکس"] },
    { id: 6, title: "شکلات و رز جاودان", submenu: ["رز جاودان طلایی", "شکلات دستساز", "ست هدیه"] },
    { id: 7, title: "طراحی مراسم", submenu: ["مراسم عروسی", "جشن تولد", "مراسم ترحیم"] },
    { id: 8, title: "تولد", submenu: ["بسته تولد", "کیک تولد", "هدیه تولد"] },
    { id: 9, title: "کیک و بادکنک", submenu: ["کیک گلدار", "بادکنک طرح‌دار", "ست کیک و بادکنک"] },
  
  ];



  return (
    <div className="header-container">
      
      <div className="international-payment-notice">
        <p>
          چنانچه قصد خرید محصولات وشه از خارج از ایران از طریق PayPal 
          از طریق شماره 0989126715628 در واتس‌اپ با ما در تماس باشید
        </p>
      </div>
 
         
      <div className="main-navigation">

         <div>
            <img src={image1} alt="" className="image" />
         </div>

      <div>
        <nav className="category-nav">
          <ul className="category-list">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`nav-item ${activeMenu === item.id ? "active" : ""}`}
                onMouseEnter={() => setActiveMenu(item.id)}
                onMouseLeave={() => setActiveMenu(null)}
              >
    
                <span className="nav-title">{item.title}</span>

                {/* منوی کشویی */}
                {activeMenu === item.id && (
                  <div className="dropdown-menu">
                    <ul className="dropdown-list">
                      {item.submenu.map((subItem, index) => (
                        <li key={index} className="dropdown-item">
                          {subItem}
                        </li>
                      ))}
                    </ul>

                  </div>
                )}
              </li>
            ))}
            
          </ul>

        </nav>
   </div>                
  
        <div className="user-tools">
            <img src={image3} alt="" style={{cursor:'pointer'}} onClick={()=>setcartOpen(!cartOpen)} />
            <img src={image2} alt=""  />  
            <img src={image4} alt=""  />


           {cartOpen &&(

         <div className="cart-summary">
             <p>تعداد آیتم‌ها: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</p>
          <p>جمع کل: {cartItems.reduce((acc, item) => {
             const priceNumber = Number(item.Price.replace(/\/|,/g,'')); 
              return acc + priceNumber * item.quantity;
             }, 0).toLocaleString()}
          </p>
         </div>
           )}
           
        </div>

        
      </div>
    </div>
    
  );
}
