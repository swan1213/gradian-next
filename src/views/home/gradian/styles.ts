import styled from "styled-components";

export const GradianViewWrapper = styled.div`
  background: linear-gradient(
    180deg,
    rgba(61, 184, 165, 0.1) 0%,
    rgba(61, 179, 162, 0.1) 100%
  );
  padding: 96px 0;
`;

export const GradienTitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 80px;
  h3 {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 32px;
    line-height: 50px;
    margin-bottom: 20px;
  }
  p {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 14px;
    line-height: 187.5%;
  }
  @media screen and (max-width: 425px) {
    margin-bottom: 30px;
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  .swiper-wrapper {
    align-items: center;
    height: 700px;
    @media screen and (max-width: 768px) {
      height: 550px;
    }
    @media screen and (max-width: 425px) {
      height: 300px;
    }
  }
  .swiper-pagination {
    @media screen and (max-width: 768px) {
      bottom: 0px;
    }
  }
  .swiper-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      border: 2px solid #3db3a2;
      border-radius: 6px;
      width: 503px;
      height: 561px;
      @media screen and (max-width: 768px) {
        width: 400px;
        height: 450px;
      }
      @media screen and (max-width: 425px) {
        width: 200px;
        height: 230px;
      }
    }
    .swiper-slide-shadow-left,
    .swiper-slide-shadow-right {
      background: none !important;
    }
    &.swiper-slide-active {
      .overlay {
        background: none !important;
      }
    }
  }
  .swiper-pagination-bullet {
    width: 14px !important;
    height: 14px !important;
    margin: 0 15px !important;
    background-color: transparent;
    border: 1px solid #3db3a2;
    opacity: 1 !important;
    &.swiper-pagination-bullet-active {
      background-color: #3db3a2 !important;
    }
  }
`;

export const SliderItemOverLay = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(7, 7, 7, 0.34);
  width: 503px;
  height: 561px;
  h1 {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 40px;
    line-height: 180%;
  }
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 450px;
  }
  @media screen and (max-width: 425px) {
    width: 200px;
    height: 230px;
    h1 {
      font-size: 20px;
    }
  }
`;

export const ViewButton = styled.div`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 14px;
  line-height: 139.52%;
  width: 167px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  bottom: 80px;
  background: linear-gradient(
    180deg,
    rgba(158, 218, 209, 0.1) 0%,
    rgba(61, 179, 162, 0.1) 100%
  );
  border: 1px solid #3db8a5;
  color: #3db8a5;
  @media screen and (max-width: 425px) {
    width: 140px;
    height: 30px;
    font-size: 12px;
    bottom: 20px;
  }
`;
