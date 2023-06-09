import styled from "styled-components";

export const GameDetailContainer = styled.div`
    margin-bottom: 60px;
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
    b {
        font-weight: 700;
        font-size: 16px;
        line-height: 18px;
        color: #3DB8A5;
    }
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
    width: 113px;
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
    margin-top: 80px;
    @media screen and (max-width: 860px){
        margin-top: 40px;
        height: 350px;
    }
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
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    color: #FFFFFF;
    white-space: nowrap;
    @media screen and (max-width: 550px){
        display: none;
    }
`
export const ArchiveList = styled.div`
    display: flex;
    align-items: center;
    span {
        color: #3DB8A5;
        font-size: 17px;
        width: 30px;
        height: 30px;
        border: 1px solid #3DB8A5;
        border-radius: 50%;
        display: flex;
        cursor: pointer;
        justify-content: center;
        margin-right: 15px;
        align-items: center;
    }
`
export const ViewTabWrapper = styled.div`
    max-width: 1200px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    @media screen and (max-width:1250px){
        width: 90%;
    }
    @media screen and (max-width:550px){
        justify-content: center;
    }
`
export const PlayBtn = styled.div`
    width: 113px;
    height: 36px;
    background: #3DB8A5;
    box-shadow: 0px 17px 33px rgba(61, 184, 165, 0.3);
    border-radius: 48px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 25px;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #FFFFFF;
`
export const DetailSlider = styled.div`
    max-width: 1200px;
    margin: auto;
    margin-bottom: 100px;
    .game-detail-swiper > .swiper-wrapper {
        padding-bottom: 50px;
    }
    .game-detail-swiper > .swiper-pagination > .swiper-pagination-bullet-active {
        width: 14px;
        height: 14px;
        background-color: #3DB3A2;
    }
    .game-detail-swiper > .swiper-pagination > .swiper-pagination-bullet {
        width: 14px;
        height: 14px;
        border: 1.30637px solid #3DB3A2;
        opacity: 1;
    }
    img {
        border-radius: 12px;
    }
    @media screen and (max-width: 1250px){
        max-width: 90%;
        img {
            width: 100%;
        }
    }
`
export const ContentContainer = styled.div`
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    span {
        font-size: 40px;
        line-height: 56px;
        @media screen and (max-width: 860px){
            font-size: 26px;
            line-height: 37px;
        }
    }
    font-weight: 600;
    font-size: 20px;
    line-height: 37px;
    color: #EFEFEF;
    @media screen and (max-width: 1250px){
        max-width: 90%;
    }
    @media screen and (max-width: 860px){
        font-size: 16px;
        line-height: 28px;
    }
`
export const GenreContainer = styled.div`
    display: flex;
    max-width: 1200px;
    margin: 80px auto;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width:1250px){
        max-width: 90%;
    }
    @media screen and (max-width:700px){
        flex-direction: column;
        margin: 40px auto;
    }
`
export const GenreWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    div {
        font-weight: 700;
        font-size: 20px;
        line-height: 32px;
        color: #FFFFFF;
        display: flex;
        flex-direction: column;
        span {
            font-weight: 400;
            font-size: 14px;
            line-height: 14px;
        }
    }
    @media screen and (max-width:700px){
        flex-direction: row;
        justify-content: space-between;
        width: 90%;
    }
    @media screen and (max-width:500px){
        flex-direction: column;
    }
`
export const GenreContent = styled.div`
    font-weight: 700;
    font-size: 22px;
    line-height: 38px;
    color: #EFEFEF;
    max-width: 650px;
    @media screen and (max-width:1030px){
        max-width: 400px;
    }
        
    @media screen and (max-width:700px){
        max-width: 90%;
        text-align: center;
        font-size: 18px;
        line-height: 30px;
        margin-top: 40px;
    }
    @media screen and (max-width:500px){
        text-align: left;
    }
  `