import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';


import image1 from "../../img/4u1a0535.webp";
import image2 from "../../img/dsc02872.webp";
import image3 from "../../img/4u1a0338.webp";
import image4 from "../../img/4u1a4869.webp";
import image5 from "../../img/4u1a9169.webp";
import image6 from "../../img/dsc00044.webp";
import image7 from "../../img/flora.webp";
import image8 from "../../img/982ebb5a-06d7-4674-b990-5533d828cf23.webp";
import image9 from "../../img/4u1a8797_2.webp";
import image10 from "../../img/fd-bambo.webp";

export default function Cart2() {
  const slides = [
    { id: 1, image: image1, title: "ارکیده", price: "۳۸۰,۰۰۰ تومان" },
    { id: 2, image: image2, title: "ارکیده سفید", price: "۳۸۰,۰۰۰ تومان" },
    { id: 3, image: image3, title: "گل داودی", price: "۱۸۰,۰۰۰ تومان" },
    { id: 4, image: image4, title: "لیلیوم", price: "۳۲۰,۰۰۰ تومان" },
    { id: 5, image: image5, title: "گل شکوفه", price: "۲۱۰,۰۰۰ تومان" },
    { id: 6, image: image6, title: "کاکتوس", price: "۱۵۰,۰۰۰ تومان" },
    { id: 7, image: image7, title: "فلورا", price: "۲۷۰,۰۰۰ تومان" },
    { id: 8, image: image8, title: "بونسای", price: "۴۵۰,۰۰۰ تومان" },
    { id: 9, image: image9, title: "ارکیده بنفش", price: "۳۹۰,۰۰۰ تومان" },
    { id: 10, image: image10, title: "بامبو خوش شانس", price: "۲۲۰,۰۰۰ تومان" },
  ];

  return (
    <div style={{
      padding: '55px',
      maxWidth: '1400px',
      margin: '0 auto',
      direction: 'rtl',
    }}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={800}
        breakpoints={{
          320: { 
            slidesPerView: 1, 
            spaceBetween: 15 
          },
          480: { 
            slidesPerView: 2, 
            spaceBetween: 15 
          },
          768: { 
            slidesPerView: 3, 
            spaceBetween: 20 
          },
          1024: { 
            slidesPerView: 4, 
            spaceBetween: 25 
          },
          1280: { 
            slidesPerView: 5, 
            spaceBetween: 30 
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={`product-${slide.id}`}>
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
              transition: 'all 0.4s ease',
              height: '100%',
              cursor: 'pointer',
              position: 'relative',
           
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
            }}
            >
              {/* تصویر */}
              <div style={{ 
                width: '100%',
                height: '250px',
                overflow: 'hidden',
                position: 'relative',
              }}>
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to bottom, transparent 70%, rgba(0,0,0,0.1))',
                  pointerEvents: 'none',
                }}></div>
              </div>
              
              {/* اطلاعات محصول */}
              <div style={{
                padding: '20px 15px',
                width: '100%',
                textAlign: 'center',
                backgroundColor: '#fff',
                borderTop: '1px solid #f0f0f0',
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                {/* عنوان */}
                <h3 style={{
                  margin: '0 0 12px 0',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#2d3436',
                  lineHeight: '1.5',
                  minHeight: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {slide.title}
                </h3>
                
                {/* قیمت */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '10px',
                }}>
                  <span style={{
                    fontSize: '18px',
                    fontWeight: '800',
                    fontFamily: 'Arial, sans-serif',
                    direction: 'ltr',
                    display: 'inline-block',
                  }}>
                    {slide.price}
                  </span>
                </div>
                
                {/* دکمه مشاهده جزئیات
                <button style={{
                  marginTop: '20px',
                  padding: '10px 24px',
                  backgroundColor: '#3498db',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  width: '100%',
                  maxWidth: '200px',
                  alignSelf: 'center',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#2980b9';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#3498db';
                  e.target.style.transform = 'translateY(0)';
                }}
                onClick={() => {
                  console.log(`محصول "${slide.title}" انتخاب شد`);
                  // اینجا می‌تونی routing یا modal باز کنی
                }}
                >
                  مشاهده محصول
                </button> */}
              </div>
              
              {/* تگ تخفیف (اختیاری) */}
              {slide.id === 6 && (
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  zIndex: '1',
                  boxShadow: '0 3px 6px rgba(0,0,0,0.2)',
                }}>
                  20%
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
 
    </div>
  );
}