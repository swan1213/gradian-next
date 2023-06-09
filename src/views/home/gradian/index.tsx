import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import {
  GradianViewWrapper,
  GradienTitleWrapper,
  SliderItemOverLay,
  SliderWrapper,
  ViewButton,
} from "./styles";
import { sliderData } from "../data";

export const GradianView: React.FC = () => {
  return (
    <GradianViewWrapper>
      <GradienTitleWrapper>
        <h3>Gradian Games</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </GradienTitleWrapper>
      <SliderWrapper>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {sliderData.map((item, key) => (
            <SwiperSlide key={key} className="swiper-item">
              <img src={`/image/gradianSlider/${key + 1}.png`} alt="" />
              <SliderItemOverLay className="overlay">
                <h1>{item.title}</h1>
                <ViewButton>View Project</ViewButton>
              </SliderItemOverLay>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderWrapper>
    </GradianViewWrapper>
  );
};
