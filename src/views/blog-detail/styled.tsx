import styled from "styled-components";

export const BlogContainer = styled.div``
export const PitchCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
    gap: 30px;
    margin-top: 80px;
    @media screen and (max-width:1250px){
        justify-content: space-around;
        max-width: 90%;
    }
    @media screen and (max-width:750px){
        margin-top: 40px;
    }
`
export const LoadBtn = styled.div`
    width: 210px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    cursor: pointer;
    font-size: 20px;
    line-height: 28px;
    color: #3DB8A5;
    background: linear-gradient(180deg, rgba(158, 218, 209, 0.1) 0%, rgba(61, 179, 162, 0.1) 100%);
    border: 2px solid #3DB8A5;
    border-radius: 56px;
    margin: 80px auto;
`
export const RecommendTitle = styled.div`
    font-weight: 700;
    font-size: 48px;
    line-height: 28px;
    color: #FFFFFF;
    margin: 80px 0;
    text-align: center;
    @media screen and (max-width: 750px){
        font-size: 32px;
        margin: 80px auto 0;
        max-width: 80%;
        line-height: 38px;
    }
`
export const DetailTab = styled.div`
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
    color: #FFFFFF;
    max-width: 1200px;
    margin: 80px auto 50px;
    span {
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: #EAEAEA;
    }
    @media screen and (max-width:1250px){
        max-width: 90%;
    }
`
export const Title = styled.div`
    font-weight: 700;
    font-size: 42px;
    line-height: 56px;
    color: #FFFFFF;
    text-align: center;
    display: flex;
    max-width: 650px;
    flex-direction: column;
    margin: auto;
    span {
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: #EAEAEA;
        margin-bottom: 10px;
    }
    b {
        color: #fff;
    }
    @media screen and (max-width: 750px){
        font-size: 32px;
        line-height: 40px;
        max-width: 90%;
    }
`
export const PitchContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    .detail-img {
        border: 2px solid #3DB8A5;
        border-radius: 24px;
        margin: 30px auto 45px;
        @media screen and (max-width: 1250px){
            width: 90%;
            height: fit-content;
        }
    }
`
export const ContentContainer = styled.div`
    max-width: 1100px;
    font-weight: 500;
    font-size: 22px;
    line-height: 38px;
    color: #EFEFEF;
    margin: auto;
    @media screen and (max-width:1250px){
        max-width: 90%;
    }
    @media screen and (max-width: 750px){
        font-size: 16px;
        line-height: 28px;
    }
`
export const SocialContainer = styled.div`
    max-width: 1200px;
    margin: 80px auto;
    span {
        font-weight: 700;
        font-size: 16px;
        line-height: 28px;
        color: #FFFFFF;
    }
    @media screen and (max-width: 1250px){
        max-width: 90%;
    }
    @media screen and (max-width: 750px){
        margin: 40px auto;
    }
    `
export const Socials = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    color: #fff;
    margin-top: 20px;
    font-size: 25px;
    svg {
        transition: all .3s ease-in-out;
        cursor: pointer;
        :hover {
            color: #3DB8A5;
        }
    }

`