import styled from "styled-components";

export const IntroViewWrapper = styled.div`
  background: url("/image/intro-bg.png");
  background-size: cover;
  background-position: center;
  padding-top: 91.5px;
  margin-top: -91.5px;
`;

export const IntroContainer = styled.div`
  padding: 80px 0;
  max-width: 1240px;
  width: 95%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const IntroTextWrapper = styled.div`
  max-width: 568px;
  width: 100%;
  h1 {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 48px;
    line-height: 60px;
    margin-bottom: 38px;
    span {
      color: #3db8a5;
    }
  }
  p {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 38px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 100%;
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const IntroImageWrapper = styled.div`
  img {
    max-width: 663px;
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`;

export const StartButton = styled.div`
  max-width: 218px;
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #00ae99;
  border-radius: 56px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 14px;
  line-height: 139.52%;
`;

export const LearnButton = styled.div`
  max-width: 152px;
  width: 100%;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 16px;
  line-height: 139.52%;
  margin-left: 26px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(158, 218, 209, 0.1) 0%,
    rgba(61, 179, 162, 0.1) 100%
  );
  border: 1px solid #3db8a5;
  border-radius: 56px;
`;

export const StoryDownButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-bottom: 50px;
  cursor: pointer;
  width: fit-content;
  p {
    text-transform: uppercase;
    margin-bottom: 10px;
    font-family: "Open Sans";
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
  }
`;
