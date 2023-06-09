import styled from "styled-components";

export const GamingCardGridWrapper = styled.div`
  h3 {
    font-weight: 600;
    font-size: 32px;
    line-height: 50px;
    text-align: center;
    margin-bottom: 60px;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 34px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
