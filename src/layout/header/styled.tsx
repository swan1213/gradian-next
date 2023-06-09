import styled from "styled-components";

export const HeaderContainer = styled.div`
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 21.5px;
    .mobile-tab {
        display: none;
        @media screen and (max-width: 980px) {
            display: flex;
            margin-right: 20px;
        }
    }
`
export const LogoContainer = styled.div`
    font-size: 26px;
    line-height: 32px;
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
        color: #FFFFFF;
        font-weight: 700;
        margin-left: 17px;
    }
    @media screen and (max-width:1250px){
        margin-left: 20px;
    }
    @media screen and (max-width:400px){
        span {
            display: none;
        }
    }
`
export const TabsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    @media screen and (max-width:980px){
        display: none;
    }
`
export const StartBtn = styled.div`
    width: 130px;
    height: 42px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    background-color: #00AE99;
    border-radius: 56px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 139.52%;
    color: #FFFFFF;
    @media screen and (max-width:1250px){
        margin-right: 20px;
    }
    @media screen and (max-width:980px){
        display: none;
    }
`
export const TabItem = styled.div<{ isSelected: boolean }>`
    font-weight: ${props => props.isSelected ? 700 : 500};
    cursor: pointer;
    font-size: 16px;
    line-height: 139.52%;
    color: ${props => props.isSelected ? "#fff" : 'rgba(255, 255, 255, 0.75)'};
`