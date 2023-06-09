import styled from "styled-components";

export const SubscribeViewWrapper = styled.div`
  padding-bottom: 60px;
  width: 95%;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content: center;
`;

export const PartnersWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 78px;
  div {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  & > :not(:first-child) {
    margin-left: 40px;
  }
`;

export const SubscribeFormWrapper = styled.div`
  h2 {
    text-align: center;
    font-family: "Poppins";
    font-weight: 600;
    font-size: 40px;
    line-height: 50px;
  }
  p {
    text-align: center;
    margin-top: 10px;
    font-family: "Poppins";
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    margin-bottom: 40px;
  }
`;

export const SubscribeInputWrapper = styled.div`
  margin: auto;
  max-width: 400px;
  width: 100%;
  background: #003831;
  border-radius: 69px;
  padding: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    flex: 1;
    outline: none;
    border: none;
    background-color: transparent;
    color: #ffffff;
    padding: 0 6px;
    &::placeholder {
      color: rgba(255, 255, 255, 0.56);
    }
  }
`;

export const SubscribeButton = styled.div`
  background: #00ae99;
  border-radius: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 105px;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;
