import styled from "styled-components";

export const BlogContainer = styled.div``
export const PitchContainer = styled.div`
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    margin-top: 100px;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 70px;
    margin-bottom: 70px;
    border-bottom: 1px solid #3DB8A5;
    .pitch-img {
        border: 2px solid #3DB8A5;
        border-radius: 24px;
        @media screen and (max-width: 1000px){
            width: 350px;
            height: 260px;
        }
        @media screen and (max-width: 860px){
            width: 90%;
            height: fit-content;
        }
    }
    @media screen and (max-width: 1250px){
        max-width: 90%;
    }
    @media screen and (max-width: 860px){
        flex-direction: column;
        padding-bottom: 40px;
    }
`
export const PitchContentContainer = styled.div`
    @media screen and (max-width:860px){
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
    }
`
export const PitchSubTitle = styled.div`
    font-size: 16px;
    line-height: 28px;
    color: #777777;
    span {
        color: #0A2640;
        margin-right: 12px;
    }
`
export const PitchTitle = styled.div`
    font-size: 45px;
    line-height: 60px;
    color: #FFFFFF;
    max-width: 570px;
    margin: 10px 0 20px;
    @media screen and (max-width: 1200px){
        font-size: 30px;
        line-height: 45px;
        max-width: 380px;
        text-align: center;
    }
    @media screen and (max-width: 460px){
        font-size: 23px;
        max-width: 90%;
        line-height: 35px;
    }
`
export const PitchMan = styled.div`
    font-size: 16px;
    line-height: 28px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    span {
        margin-left: 12px;
    }

`
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