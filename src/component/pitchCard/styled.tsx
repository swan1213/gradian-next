import styled from "styled-components";

export const PitchContainer = styled.div`
    width: 350px;
    padding-bottom: 8px;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid #3DB8A5;
`
export const PitchImg = styled.div`
    width: 100%;
    height: 209px;
`
export const CategoryContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;  
    color: #777777;
    margin: 24px 0 12px;
    margin-left: 11px;
    span {
        font-weight: 700;
        font-size: 16px;
        line-height: 28px;
        color: #3DB8A5;
    }
`
export const Content = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    margin-left: 11px;
    color: #FFFFFF;
    max-width: 300px;
`
export const AuthorContainer = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    margin-left: 11px;
    color: #FFFFFF;
    display: flex;
    margin-top: 12px;
    align-items: center;
    gap: 12px;
`