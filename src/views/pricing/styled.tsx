import styled from "styled-components";

export const BlogContainer = styled.div`
    margin-bottom: 60px;
`
export const PricingContainer = styled.div`
    display: flex;
    max-width: 1200px;
    width: 100%;
    align-items: flex-end;
    justify-content: space-between;
    padding: 120px 0;
    @media screen and (max-width:1250px){
        max-width: 95%;
    }

    @media screen and (max-width:780px){
        padding: 40px 0;
        flex-direction: column;
        align-items: center;
    }
`
export const ContentContainer = styled.div`
    @media screen and (max-width:780px){
        order: 2;
        text-align: center;
        margin-top: 30px;
    }
`

export const PricingOutContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background: url('/image/pricing.png') no-repeat;
    background-size: 100% 100%;
    background-position: center;
`

export const ContentTitle = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 700;
    font-size: 48px;
    line-height: 32px;
    color: #FFFFFF;
    margin-bottom: 40px;
    span {
        margin-bottom: 15px;
        font-size: 16px;
        line-height: 18px;
        color: #3DB8A5;
    }
    @media screen and (max-width:480px){
        font-size: 33px;
        span {
            margin-bottom: 5px;
        }
    }
`
export const PricingContent = styled.div`
        color: #EFEFEF;
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        color: #EFEFEF;
        max-width: 700px;
`
export const FaqContainer = styled.div`
    max-width: 1200px;
    margin: auto;
    @media screen and (max-width:1250px){
        max-width: 90%;
    }
`
export const FaqWrapper = styled.div`
    margin-top: 32px;
`
export const FaqTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #FFFFFF;
    span {
        font-weight: 600;
        font-size: 16px;
        line-height: 25px;
    }
`
export const FaqContent = styled.div`
    font-weight: 400;
    font-size: 15px;
    line-height: 160%;
    margin-top: 30px;
    color: #FFFFFF;
`
export const FaqItemContainer = styled.div`
    padding: 30px 0;
    cursor: pointer;
    border-bottom: 1px solid #BBBBBB;
`
export const FaqDisplayContainer = styled.div`
    font-weight: 600;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
    text-align: center;
`
export const MemberShipsContainer = styled.div`
    margin: auto;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 160px;
    margin-top: 160px;
    @media screen and (max-width: 1250px){
        max-width: 95%;
    }
    @media screen and (max-width: 1140px){
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
    }
    @media screen and (max-width: 780px){
        margin-top: 40px;
        margin-bottom: 40px;
    }
`
export const MemberShipCard = styled.div`
    max-width: 320px;
    position: relative;
    background: linear-gradient(180deg, rgba(158, 218, 209, 0.1) 0%, rgba(61, 179, 162, 0.1) 100%);
    border: 1px solid #3DB8A5;
    border-radius: 31px;
    padding: 40px 16px 130px;
`
export const CardTitle = styled.div`
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
    line-height: 40px;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 60px;
    span {
        font-weight: 400;
        font-size: 20px;
        letter-spacing: 0.5px;
        b {
            font-size: 32px;
        }
    }
    div {
        display: flex;
        align-items: center;
        margin-bottom: 50px;
        img {
            margin-right: 10px;
        }
    }
`
export const ChooseBtn = styled.div`
    width: 90%;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    position: absolute;
    color: #FFFFFF;
    background: #3DB8A5;
    box-shadow: 0px 8px 29px rgba(61, 184, 165, 0.3);
    border-radius: 48px;
    bottom: 30px;
    cursor: pointer;
`
export  const CardContent = styled.div`
    b {
        font-weight: 400;
        font-size: 22px;
        line-height: 30px;
        color: #D9D9D9;
    }
`
export  const CardList = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 20px;
    div {
        display: flex;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        color: #FFFFFF;
        svg {
            min-height: 20px;
            min-width: 20px;
            margin-right: 10px;
        }
    }
`