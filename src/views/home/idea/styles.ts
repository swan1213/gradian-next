import styled from "styled-components";

export const IdeaViewWrapper = styled.div`
  max-width: 1120px;
  width: 95%;
  margin: auto;
  padding: 120px 0;
  h3 {
    font-weight: 800;
    font-size: 32px;
    line-height: 50px;
    max-width: 534px;
    margin: auto;
    margin-bottom: 40px;
    text-align: center;
  }
`;

export const IdeaContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 382px;
  width: 100%;
  position: relative;
  @media screen and (max-width: 768px) {
    height: 382px;
    margin-bottom: 30px;
  }
`;

export const DetailWrapper = styled.div`
  max-width: 524px;
  width: 100%;
  & > :not(:first-child) {
    margin-top: 24px;
    border-top: 1px solid #3db8a5;
    padding-top: 16px;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const DetailsItem = styled.div`
  display: flex;
  justify-content: space-between;
  h4 {
    font-weight: 600;
    font-size: 28px;
    line-height: 39px;
    max-width: 198px;
    width: 100%;
  }
  p {
    max-width: 239px;
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    & > * {
      max-width: 100% !important;
    }
    h4 {
      margin-bottom: 16px;
    }
  }
`;

export const IdeaButton = styled.div`
  max-width: 152px;
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
  margin: auto;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 500;
  font-size: 16px;
  font-family: "Montserrat";
  line-height: 139.52%;
`;
