import React from "react";
import {
  ButtonGroup,
  IntroContainer,
  IntroImageWrapper,
  IntroTextWrapper,
  IntroViewWrapper,
  LearnButton,
  StartButton,
  StoryDownButton,
} from "./styles";

export const IntroView: React.FC = () => {
  return (
    <IntroViewWrapper>
      <IntroContainer>
        <IntroTextWrapper>
          <h1>
            Unlock <span>Web3 Gaming</span>
          </h1>
          <p>
            Pioneering the next generation of gaming by delivering cutting-edge,
            Algorand-based web3 services and infrastructure, empowering
            developers to create immersive experiences that redefine the gaming
            landscape.
          </p>
          <ButtonGroup>
            <StartButton>Start Building</StartButton>
            <LearnButton>Learn More</LearnButton>
          </ButtonGroup>
        </IntroTextWrapper>
        <IntroImageWrapper>
          <img src="/image/intro-img.png" alt="" />
        </IntroImageWrapper>
      </IntroContainer>
      <StoryDownButton>
        <p>The Story</p>
        <img src="/image/scroll-down.png" alt="" />
      </StoryDownButton>
    </IntroViewWrapper>
  );
};
