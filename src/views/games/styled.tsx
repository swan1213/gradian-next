import styled from "styled-components";

export const BlogContainer = styled.div`
    margin-bottom: 60px;
`
export const GameTitleContainer = styled.div`
    background: linear-gradient(180deg, rgba(158, 218, 209, 0.1) 0%, rgba(61, 179, 162, 0.1) 100%);
    box-shadow: 4px 4px 4px rgba(0, 56, 49, 0.25);
    height: 57px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 80px;
    @media screen and (max-width: 860px){
        margin-top: 40px;
    }
`
export const GameWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    span {
        display: flex;
        align-items: center;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        font-size: 22px;
        line-height: 32px;
        @media screen and (max-width: 860px){
            font-size: 16px;
        }
    }
    @media screen and (max-width: 1250px){
        max-width: 95%;
    }
`
export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    height: 34px;
    color: #fff;
    font-size: 20px;
    background: #003831;
    border-radius: 34px;
    padding: 0 10px;
    input {
        height: 100%;
        outline: none;
        color: #fff;
        width: 150px;
        font-size: 16px;
        background-color: transparent;
        border: none;
        margin-left: 10px;
    }
    @media screen and (max-width: 860px){
        input {
            font-size: 16px;
            width: 100px;
            margin-left: 3px;
        }
    }
`
export const ViewContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    @media screen and (max-width: 1250px){
        max-width: 90%;
    }
    @media screen and (max-width: 860px){
        display: flex;
        justify-content: center;
    }
`
export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 650px;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #FFFFFF;
    span {
        font-weight: 800;
        font-size: 40px;
        line-height: 50px;
        margin-bottom: 20px;
        @media screen and (max-width: 860px){
            font-size: 30px;
            line-height: 40px;
            text-align: center;
        }
    }
    @media screen and (max-width: 860px){
        text-align: center;
        font-size: 17px;
        align-items: center;
        line-height: 28px;
    }
`
export const ViewBtn = styled.div`
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #FFFFFF;
    background: #3DB8A5;
    box-shadow: 0px 17px 33px rgba(61, 184, 165, 0.3);
    border-radius: 48px;
    cursor: pointer;
    width: 159px;
    height: 48px;       
    display: flex;
    margin-top: 40px;
    justify-content: center;
    align-items: center;
`
export const GameViewContainer = styled.div<{bg : string}>`
    background: url(${props => props.bg}) no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 580px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ViewTabContainer = styled.div`
    height: 74px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(61, 184, 165, 0.1);

`
export const ImgGrpContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 25px;
    @media screen and (max-width:600px){
        display: none;
    }
`
export const ArchiveList = styled.ul`
    width: 100%;
    overflow: hidden;
    @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
    }
    div {
        color: #fff;
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 16px;
        width: 200%;
        line-height: 18px;
        justify-content: space-between;
        animation: scroll 30s linear infinite;
        @media screen and (max-width: 1250px){
            gap: 50px;
        }
        li {
            white-space: nowrap;
        }   
    }

`
export const ViewTabWrapper = styled.div`
    max-width: 1200px;
    display: flex;
    align-items: center;
    width: 100%;
    @media screen and (max-width:1250px){
        width: 90%;
    }
`
export const ParagoniaContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
    row-gap: 24px;
    margin-top: 80px;
    margin-bottom: 80px;
    @media screen and (max-width:1250px){
        justify-content: space-around;
        max-width: 90%;
    }    
`