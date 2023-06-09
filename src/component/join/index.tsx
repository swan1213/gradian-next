import React from 'react'
import { 
  JoinContainer,
  Rows,
  CardContainer,
  CardTitle,
  CardBtn,
  BuildTitle,
  BuildContent,
  BuildBtn,
  ContentWrapper,
  SocialWrapper
} from "./styled";
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import DragonImg from "@/assets/image/dragon.png";

const JoinComponent = () => {
  return (
    <JoinContainer>
      <Rows>
        <CardContainer width={'55%'}>
          <ContentWrapper>
            <BuildTitle>Build your NFT project with ease.</BuildTitle>
            <BuildContent>
              Lorem ipsum dolor sit amet. Cum voluptas quis 33 unde ipsam non praesentium quae sit dolores architecto sit voluptatum.
            </BuildContent>
            <BuildBtn>Start Building</BuildBtn>
            <Image src={DragonImg} alt='' className='dragon-icon' draggable={false} width={210} height={210} />
          </ContentWrapper>
        </CardContainer>
        <CardContainer bg={'/image/empower.png'} width='45%'>
          <CardTitle>Gradian Backstor</CardTitle>
          <CardBtn>Blog</CardBtn>
        </CardContainer>
      </Rows>
      <Rows>
        <CardContainer bg={'/image/gradian-item.png'} width={'45%'}>
          <CardTitle>Gradian</CardTitle>
          <CardBtn>Start Playing</CardBtn>
        </CardContainer>
        <CardContainer width='55%'>
          <ContentWrapper>
            <BuildTitle>Join the Gradian community</BuildTitle>
            <BuildContent>
              Ethereum-grade security, zero gas fees and user-friendly APIs allow you to quickly and easily build your next NFT project.
            </BuildContent>
            <SocialWrapper>
              <FaFacebook color='#3DB8A5' size={30} />
              <FaTwitter color='#3DB8A5' size={30} />
              <FaInstagram color='#3DB8A5' size={30} />
              <FaLinkedin color='#3DB8A5' size={30} />
            </SocialWrapper>
          </ContentWrapper>
        </CardContainer>
      </Rows>
    </JoinContainer>
  )
}

export default JoinComponent