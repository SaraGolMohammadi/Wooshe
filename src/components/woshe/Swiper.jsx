import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import "../../styles/Swiper.css";

// Import images
import image1 from "../../img/YYY-02.webp";
import image2 from "../../img/WINTER-08.webp";
import image3 from "../../img/Untitled-1SS-04.webp";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide> <img src={image1} alt=""/></SwiperSlide>
      <SwiperSlide><img src={image2} alt=""/></SwiperSlide>
      <SwiperSlide><img src={image3} alt=""/></SwiperSlide>
    </Swiper>
  );
};