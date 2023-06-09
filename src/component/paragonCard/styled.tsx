import styled from "styled-components";

export const PitchContainer = styled.div<{bg: string}>`
    width: 340px;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid #3DB8A5;
    background: url(${props => props.bg}) no-repeat;
    background-size: cover;
    background-position: center;
    padding: 18px;
`
export const CategoryContainer = styled.div`
    font-weight: 700;
    font-size: 28px;
    line-height: 28px;
    color: #FFFFFF;
    margin-top: 150px;
    margin-bottom: 19px;
`
export const Content = styled.div`
    font-weight: 700;
    margin-top: 20px;
    font-size: 16px;
    line-height: 24px;
    color: #EFEFEF;
`
export const AuthorContainer = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    margin-left: 11px;
    color: #FFFFFF;
    display: flex;
    margin-top: 100px;
    align-items: center;
    gap: 12px;
`
export const SocialContainer = styled.div`
    display: flex;
    gap: 15px;
    div {
        transition: all .3s ease-in-out;
        border: 1px solid #fff;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        :hover {
            color: #3DB8A5;
            border-color: #3DB8A5;
        }
    }
`
export const ViewGameBtn = styled.div`
    width: 115px;
    min-width: 115px;
    height: 36px;
    cursor: pointer;
    background: #3DB8A5;
    box-shadow: 0px 17px 33px rgba(61, 184, 165, 0.3);
    border-radius: 48px;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 100px;
    @media screen and (max-width: 410px){
        margin-left: 60px;
    }
`