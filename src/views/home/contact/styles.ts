import styled from "styled-components";

export const ContactViewWrapper = styled.div`
  padding: 280px 0 180px;
  max-width: 1170px;
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 80px 0;
  }
`;

export const ContactDescWrapper = styled.div`
  max-width: 610px;
  width: 100%;
  h1 {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 64px;
    line-height: 78px;
    color: #fffbfb;
    span {
      color: #3db8a5;
    }
  }
  p {
    margin-top: 16px;
    color: rgba(255, 251, 251, 0.65);
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 32px;
    line-height: 111.02%;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 30px;
    text-align: center;
    h1 {
      font-size: 44px;
      line-height: 50px;
    }
    p {
      font-size: 22px;
    }
  }
`;

export const ContactFormWrapper = styled.div`
  max-width: 470px;
  width: 100%;
  margin-left: 30px;
  & > :not(:last-child) {
    margin-bottom: 60px;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin-left: 0;
  }
`;

export const SubmitButton = styled.div`
  width: 126px;
  height: 42px;
  background: #3db8a5;
  box-shadow: 0px 5px 40px #17403a;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  font-family: "Montserrat";
  line-height: 139.52%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ContactFormGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
`;

export const ContactInput = styled.input`
  outline: none;
  background-color: transparent;
  height: 30px;
  width: 100%;
  color: #ffffff;
  border: none;
  border-bottom: 1px solid #f2f2f2;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

export const ContactSelect = styled.select`
  outline: none;
  border: none;
  border-bottom: 1px solid #f2f2f2;
  background-color: transparent;
  color: #fff;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  option {
    color: #000;
  }
`;

export const ContactTextArea = styled.textarea`
  outline: none;
  width: 100%;
  border: none;
  background-color: transparent;
  color: #fff;
  border-bottom: 1px solid #f2f2f2;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #f2f2f2;
  resize: vertical;
`;
