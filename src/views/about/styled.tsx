import styled from "styled-components";

export const AboutContainer = styled.div`

`
export const EmPowerContainer = styled.div`
    height: 502px;
    background: url('/image/empower.png') no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`
export const EmWrapper = styled.div`
    max-width: 1200px;
    width: 100%;
    p {
        font-weight: 400;
        font-size: 20px;
        max-width: 680px;   
        line-height: 32px;
        color: #FFFFFF;
    }
    @media screen and (max-width:1250px){
        margin-left: 20px;
    }
    @media screen and (max-width:950px){
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-left: 0;
    }
    @media screen and (max-width:780px){
        p {
            max-width: 90%;
            line-height: 30px;
            font-size: 18px;
        }
    }
`

export const EmTitle = styled.div`
    font-weight: 600;
    font-size: 55px;
    line-height: 70px;
    color: #FFFFFF;
    max-width: 700px;
    width: 100%;
    @media screen and (max-width:780px){
        font-size: 30px;
        line-height: 40px;
        max-width: 90%;
    }
`

export const LeadContainer = styled.div`
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: auto;
    padding: 157px 0 80px;
    p {
        font-weight: 400;
        font-size: 20px;
        line-height: 32px;
        text-align: center;
        margin: 0;
        color: #FFFFFF;
        max-width: 750px;
        @media screen and (max-width:1100px){
            font-size: 15px;
            line-height: 28px;
            max-width: 90%;
        }
    }
`
export const  LeadTitle = styled.div`
    font-weight: 600;
    font-size: 55px;
    line-height: 72px;
    text-align: center;
    color: #FFFFFF;
    @media screen and (max-width:1100px){
        width: 90%;
        font-size: 40px;
        line-height: 45px;
    }
    @media screen and (max-width:780px){
        line-height: 40px;
        font-size: 30px;
    }
`
export const  LeadSubTitle = styled.div`
    font-weight: 500;
    font-size: 30px;
    line-height: 45px;
    text-align: center;
    max-width: 920px;
    color: #FFFFFF;
    margin: 20px 0;
    @media screen and (max-width:1100px){
        max-width: 90%;
        font-size: 25px;
        line-height: 35px;
    }
    @media screen and (max-width:780px){
        font-size: 23px;
        line-height: 30px;
    }
`

export const BlogBtn = styled.div`
    width: 219px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, rgba(158, 218, 209, 0.1) 0%, rgba(61, 179, 162, 0.1) 100%);
    border: 2px solid #3DB8A5;
    border-radius: 56px;
    color: #3DB8A5;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    margin-top: 60px;
    cursor: pointer;
`

export const GradianContainer = styled.div`
    background: url('/image/gradian.png') no-repeat;
    background-size: cover;
    padding: 56px 0;
    background-position: center;
`
export const  GradianWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const GradianTitle = styled.div`
    font-weight: 700;
    font-size: 80px;
    line-height: 112px;
    display: flex;
    align-items: center;
    margin: 20px 0;
    color: #FFFFFF;
    @media screen and (max-width:780px){
        font-size: 50px;
        line-height: 80px;
        margin: 0;
    }
`
export const GradianContent = styled.div`
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
    max-width: 600px;
    @media screen and (max-width:780px){
        max-width: 90%;
    }
`
export const TeamContainer = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    position: relative;
    margin-bottom: 60px;
    .swiper-button-prev {
        color: #fff;
        ::after {
            font-size: 23px;
            font-weight: 900;
        }
    }
    .swiper-button-next {
        color: #fff;
        ::after {
            font-size: 23px;
            font-weight: 900;
        }
    }
    .team-swiper {
        width: calc(100% - 80px);
        padding-bottom: 10px;
        padding-left: 38px;
        padding-right: 38px;
        .swiper-button-prev {
            left: 0;
        }
        .swiper-button-next {
            right: 0;
        }
        @media screen and (max-width: 1250px){
            width: 90%;
        }
        @media screen and (max-width: 768px){
            width: 80%;
        }
    }
`
export const TeamTitle = styled.div`
    font-weight: 600;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
`
export const TeamSubTitle = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 187.5%;
    margin: 20px 0 32px;
    color: #FFFFFF;
    @media screen and (max-width: 600px){
        text-align: center;
        width: 90%;
    }
`
export const TeamCard = styled.div`
    padding: 35px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(180deg, rgba(158, 218, 209, 0.1) 8.23%, rgba(61, 179, 162, 0.1) 108.23%);
    box-shadow: 4px 4px 10px rgba(61, 179, 162, 0.25);
    img {
        border-radius: 50%;
        border: 1px solid #3DB8A5;
    }
`
export const Name = styled.div`
    font-weight: 600;
    font-size: 23px;
    white-space: nowrap;
    line-height: 32px;
    color: #FFFFFF;
    margin-top: 30px;
`
export const Role = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 15px;
    text-align: center;
    color: #FFFFFF;
    margin: 5px 0 27px;
`
export const MemberSocial = styled.div`
    display: flex;
    gap: 20px;
`
export const SocialCard = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #3DB8A5;
    border-radius: 5px;
    svg {
        color: #3DB8A5;
    }
`