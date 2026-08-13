import React, { useState } from "react";
import slide1 from "../../assets/slide1.svg";
import slide2 from "../../assets/slide2.svg";
import slide3 from "../../assets/slide3.svg";
import slide4 from "../../assets/slide4.svg";
import slide5 from "../../assets/slide5.svg";
import slide6 from "../../assets/slide6.svg";
import slide7 from "../../assets/slide7.svg";
import slide8 from "../../assets/slide8.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import { Navigation, Thumbs, FreeMode } from "swiper/modules";

export const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
  ];

  return (
    <div className="slider_container">
      <Swiper
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Navigation, Thumbs]}
        className="main-slider"
        slidesPerView={1}
      >
        {images.map((imgSrc, index) => (
          <SwiperSlide key={`main-${index}`}>
            <img src={imgSrc} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="thumbnail-slider"
      >
        {images.map((imgSrc, index) => (
          <SwiperSlide key={`thumb-${index}`}>
            <img src={imgSrc} alt={`Thumb ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
