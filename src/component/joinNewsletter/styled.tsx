import styled from "styled-components";


export const JoinContainer = styled.div`
    display: flex;
    align-items: center;
    max-width: 1132px;
    height: 206px;
    margin: auto;
    border: 2px solid #3DB8A5;
    border-radius: 10px;
    padding: 0 34px;
    justify-content: space-between;
    @media screen and (max-width: 1250px){
        max-width: calc(90% - 68px);
    }
    @media screen and (max-width:850px){
        flex-direction: column;
        padding: 30px;
    }
    @media screen and (max-width: 440px){
        height: auto;
    }
`
export const JoinContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
    span {
        font-weight: 700;
        font-size: 28px;
        margin-bottom: 5px;
        line-height: 32px;
        color: #FFFFFF;
    }
    @media screen and (max-width: 1100px){
        width: 500px;
    }
    @media screen and (max-width: 850px){
        text-align: center;
        width: 90%;
        span {
            margin-bottom: 20px;
        }
    }
`
export const JoinBtnContainer = styled.div`
    display: flex;
    input {
        background: #000000;
        border-style: none;
        border-bottom: 1px solid #3DB8A5;
        outline: none;
        color: #fff;
        font-size: 18px;
    }
    @media screen and (max-width: 440px){
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
        input {
            text-align: center;
        }
    }
`
export const JoinBtn = styled.div`
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    color: #FFFFFF;
    background: #3DB8A5;
    box-shadow: 0px 17px 33px rgba(61, 184, 165, 0.3);
    border-radius: 48px;
    width: 121px;
    height: 48px;
    margin-left: 20px;
    @media screen and (max-width: 440px){
        margin-left: 0;
        margin-top: 20px;
    }
`