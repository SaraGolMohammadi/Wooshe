import React from 'react'
import "../../styles/Header.css";
import logo from "../../img/logo.png";
export default function Woshe() {
  const menuItems = [
    { id: 1, title: "دسترسی سریع", submenu: ["بکس گل", 'دسته گل', 'کیک وبادکنک'] },
    { id: 2, title: "حساب کاربری", submenu: ['ورود / ثبت نام', 'سفارش‌های من', 'آدرس‌های من', 'کلاس‌های من', 'علاقه‌مندی‌ها'] },
    { id: 3, title: "استودیو گل وشه", submenu: ['اجرای مراسم ها', 'درباره وشه', 'تماس با وشه'] },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
      <div className="footer-divider"></div>
        <div className="footer-menus">
          {menuItems.map((item) => (
            <div key={item.id} className="footer-menu-section">
              <h3 className="footer-title">{item.title}</h3>
              <ul className="footer-list">
                {item.submenu.map((subItem, index) => (
                  <li key={index} className="footer-item">
                    {subItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* بخش تماس */}
        <div className="footer-contact">
          <h3 className="footer-title">تماس با استور وشه</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <strong>استور زعفرانیه:</strong>
              <span> 14 زعفرانیه، فلاحی، مقدس اردبیلی، پلاک</span>
            </li>
            <li className="footer-item">
              <strong>استور فرشته:</strong>
              <span> 34 فرشته، مریم شرقی، پلاک</span>
            </li>
            <li className="footer-item">
              <strong>استور فرمانیه:</strong>
              <span> فرمانیه، ابتدای پاسداران، پلاک 514</span>
            </li>
            <li className="footer-item">
              <strong>اپراتور فروش:</strong>
              <span> 09334208699</span>
            </li>
          </ul>
        </div>

       
        <div className="footer-logo">
        <img src={logo} alt="لوگوی وشه" />
        </div>
      </div>
    </footer>
  );
}