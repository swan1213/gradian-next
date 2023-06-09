import styled from "styled-components";

export const GameDetailContainer = styled.div`
  margin-bottom: 60px;
`;
export const ViewContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  @media screen and (max-width: 1250px){
    max-width: 90%;
  }
  @media screen and (max-width: 860px) {
    display: flex;
    justify-content: center;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #ffffff;
  b {
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    color: #3db8a5;
  }
  span {
    font-weight: 800;
    font-size: 40px;
    line-height: 50px;
    margin-bottom: 20px;
    @media screen and (max-width: 860px) {
      font-size: 30px;
      line-height: 40px;
      text-align: center;
    }
  }
  @media screen and (max-width: 860px) {
    text-align: center;
    font-size: 17px;
    align-items: center;
    line-height: 28px;
  }
`;
export const ViewBtn = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  background: #3db8a5;
  box-shadow: 0px 17px 33px rgba(61, 184, 165, 0.3);
  border-radius: 48px;
  cursor: pointer;
  width: 130px;
  height: 48px;
  display: flex;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
`;
export const GameViewContainer = styled.div<{ bg: string }>`
  background: url(${(props) => props.bg}) no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 580px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  @media screen and (max-width: 860px) {
    margin-top: 40px;
    height: 350px;
  }
`;
export const TabContainer = styled.div`
  display: flex;
  margin: 80px auto 60px;
  justify-content: center;
  gap: 12px;
  max-width: 90%;

  @media screen and (max-width: 950px) {
    gap: 6px;
  }
`;
export const TabItem = styled.div<{ isSelected: boolean }>`
  width: 290px;
  height: 50px;
  cursor: pointer;
  background: ${(props) => (props.isSelected ? "#00AE99" : "transparent")};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 139.52%;
  color: ${(props) => (props.isSelected ? "#fff" : "#00AE99")};
  border: ${(props) => !props.isSelected && "1px solid #3DB8A5"};
  text-align: center;
  @media screen and (max-width: 950px) {
    max-width: 100%;
  }
`;
export const Web3Title = styled.div`
  font-weight: 700;
  font-size: 48px;
  line-height: 32px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 60px;
  @media screen and (max-width: 860px) {
    font-size: 33px;
  }
  @media screen and (max-width: 500px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`;
export const Web3CardContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  row-gap: 60px;
  column-gap: 70px;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 60px;
  @media screen and (max-width: 1250px) {
    max-width: 95%;
    column-gap: 40px;
  }
  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
`;
export const Web3Card = styled.div`
  position: relative;
  padding: 15px;
  max-width: 320px;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(158, 218, 209, 0.1) 0%,
    rgba(61, 179, 162, 0.1) 100%
  );
  border: 1px solid #3db8a5;
  border-radius: 22px;
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 28px;
    margin-bottom: 19px;
  }
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  color: #efefef;
  margin-bottom: 70px;
  margin-top: 44px;
`;
export const BtnGrp = styled.div`
  display: flex;
  position: absolute;
  bottom: 18px;
  width: calc(100% - 30px);
  justify-content: space-between;
`;
export const Btn = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 115px;
  height: 42px;
  background: #3db8a5;
  box-shadow: 0px 7px 33px rgba(61, 184, 165, 0.3);
  border-radius: 48px;
`;
export const SDKCardContainer = styled.div`
  max-width: 1200px;
  width: 90%;
  display: flex;
  margin: auto;
  gap: 80px;
  margin-bottom: 60px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const SDKCard = styled.div`
  position: relative;
  padding: 15px;
  width: 50%;

  box-sizing: border-box;
  background: linear-gradient(
    180deg,
    rgba(158, 218, 209, 0.1) 0%,
    rgba(61, 179, 162, 0.1) 100%
  );
  border: 1px solid #3db8a5;
  border-radius: 22px;
  @media screen and (max-width: 768px) {
    margin: auto;
    max-width: 528px;
    width: 100%;
  }
`;
