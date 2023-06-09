import styled from "styled-components";

export const JoinContainer = styled.div`
  max-width: 1200px;
  padding: 80px 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 1260px) {
    max-width: 90%;
  }
`;
export const Rows = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width:730px) {
    flex-direction: column;
  }
`;
export const CardContainer = styled.div<{ bg?: string; width?: string }>`
  background: ${(props) =>
    props.bg
      ? `url('${props.bg}') no-repeat`
      : "linear-gradient(180deg, rgba(158, 218, 209, 0.1) 0%, rgba(61, 179, 162, 0.1) 100%)"};
  background-size: cover;
  background-position: center;
  padding: 30px 50px;
  position: relative;
  border-radius: 12px;
  box-shadow: 3px 4px 4px rgba(61, 179, 162, 0.25);
  height: 440px;
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 930px) {
    padding: 20px 30px;
    height: auto; 
  }
  @media screen and (max-width:730px) {
    width: calc(100% - 60px);
  }
`;
export const CardTitle = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 45px;
  text-align: center;
  max-width: 200px;
  color: #ffffff;
  @media screen and (max-width:730px) {
    max-width: 100%;
    font-size: 27px;
  }
`;
export const CardBtn = styled.div`
  width: 219px;
  height: 60px;
  border: 2px solid #3db8a5;
  border-radius: 56px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffffff;
  @media screen and (max-width: 930px){
    margin-top: 30px;
    width: 180px;
    height: 50px;
    font-size: 17px;
  }
`;
export const BuildTitle = styled.div`
  background: linear-gradient(90deg, #3db3a2 2.46%, #9edad1 98.45%);
  -webkit-background-clip: text;
  font-weight: 700;
  font-size: 35px;
  line-height: 48px;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  max-width: 350px;
  margin-bottom: 30px;
  @media screen and (max-width: 930px) {
    font-size: 27px;
    line-height: 35px;
  }
  @media screen and (max-width:730px) {
    max-width: 100%;
  }
`;
export const BuildContent = styled.div`
  font-weight: 600;
  max-width: 370px;
  font-size: 16px;
  line-height: 28px;
  color: #ffffff;
`;
export const BuildBtn = styled.div`
  width: 219px;
  height: 60px;
  background: #3db3a2;
  border: 2px solid #9edad1;
  border-radius: 56px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  margin-top: 150px;
  @media screen and (max-width: 1130px) {
    width: 180px;
    height: 50px;
    font-size: 17px;
  }
  @media screen and (max-width: 930px) {
    margin-top: 20px;
  }
`;
export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .dragon-icon {
    position: absolute;
    bottom: 0;
    right: 0;
    @media screen and (max-width: 1130px) {
      right: -50px;
    }
    @media screen and (max-width: 930px) {
      width: 90px;
      height: 90px;
      right: 0;
    }
    @media screen and (max-width:730px) {
      width: 150px;
      height: 150px;
    }
    @media screen and (max-width:500px) {
      width: 80px;
      height: 80px;
    }
  }
`;
export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 190px;
  gap: 25px;
  @media screen and (max-width: 1130px) {
    margin-top: 170px;
  }
  @media screen and (max-width: 930px) {
    margin-top: 30px;
  }
`;
