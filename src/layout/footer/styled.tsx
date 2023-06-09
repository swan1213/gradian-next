import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url("/image/footer.png") no-repeat;
    background-size: cover;
    padding-top: 150px;
    padding-bottom: 40px;
    @media screen and (max-width: 870px){
        background-position: center;
    }
    @media screen and (max-width: 700px){
        background-size: 100% 100%;
    }
    @media screen and (max-width: 450px){
        padding-top: 200px;
    }
`
export const FooterTabContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 1200px;
    justify-content: space-between;
    align-items: flex-start;
    @media screen and (max-width:1260px){
        width: 95%;
    }
    @media screen and (max-width:870px){
        flex-direction: column;
        align-items: center;
        gap: 50px;
    }
`
export const FooterBottomContainer = styled.div`
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    max-width: 1200px;
    display: flex;
    align-items: center;
    padding-top: 37px;
    width: 100%;
    justify-content: space-between;
    margin-top: 50px;
    @media screen and (max-width:1260px){
        width: 95%;
    }
    @media screen and (max-width:650px){
        border-top: none;
        flex-direction: column;
    }
`
export const TabsContainer = styled.div`
    display: flex;
    gap: 70px;
    @media screen and (max-width:870px){
        order: 2;
    }
    @media screen and (max-width:650px){
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width:450px){
        grid-template-columns: 1fr;
        gap: 40px;
    }
`
export const TabContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
        font-weight: 600;
        font-size: 14px;
        line-height: 170%;
        letter-spacing: 0.8px;
        margin: 0;
        margin-bottom: 10px;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    span {
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        color: #FFFFFF;
        cursor: pointer;
        margin-top: 8px;
    }
`
export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    span {
        font-weight: 600;
        font-size: 26px;
        line-height: 32px;
        color: #FFFFFF;
        margin-right: 17px;
    }
    @media screen and (max-width:870px){
        span {
            order: 2;
            margin-right: 0;
            margin-left: 17px;
        }
    }
`
export const Text = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    color: rgba(255, 255, 255, 0.56);
    @media screen and (max-width:650px){
        order: 2;
        margin-top: 15px;
    }
    @media screen and (max-width:450px){
        font-size: 14px;
    }
`
export const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 47px;
    svg {
        color: rgba(255,255,255,0.56);
        width: 24px;
        cursor: pointer;
        height: 24px;
    }
    @media screen and (max-width:450px){
        gap: 25px;
    }    
`