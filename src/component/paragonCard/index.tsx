import React from 'react'
import { 
  PitchContainer,
  CategoryContainer,
  Content,
  AuthorContainer,
  SocialContainer,
  ViewGameBtn,

 } from "./styled";
import Image, { StaticImageData } from 'next/image';
import { FaFacebook, FaGithub, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";

import { useRouter } from 'next/router';

interface iProps {
  bg: string
}

const PitchCard = (props: iProps) => {
  const router = useRouter();
  return (
    <PitchContainer bg={props.bg}>
      <CategoryContainer>
        Paragonia
      </CategoryContainer>
      <Content>Paragonia Alpha Release - Discover the Future of Web3 Gaming</Content>
      <AuthorContainer>
        <SocialContainer>
          <div>
            <FaDiscord />
          </div>
          <div>
            <FaTwitter />
          </div>
        </SocialContainer>
        <ViewGameBtn onClick={() => router.push('/games-detail')}>View Game</ViewGameBtn>
      </AuthorContainer>
    </PitchContainer>
  )
}

export default PitchCard