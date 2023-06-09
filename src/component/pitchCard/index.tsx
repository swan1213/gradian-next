import React from 'react'
import { 
  PitchContainer,
  PitchImg,
  CategoryContainer,
  Content,
  AuthorContainer,
 } from "./styled";
import Image, { StaticImageData } from 'next/image';

import Grantman from "@/assets/image/grantman.png";
import { useRouter } from 'next/router';

interface iProps {
  bg: StaticImageData
}

const PitchCard = (props: iProps) => {
  const router = useRouter();
  return (
    <PitchContainer onClick={() => router.push('/blog-detail')}>
      <Image src={props.bg} alt='' width={350} height={209} placeholder='blur'/>
      <CategoryContainer>
        <span>Category</span>April 9, 2023
      </CategoryContainer>
      <Content>Paragonia Alpha Release - Discover the Future of Web3 Gaming</Content>
      <AuthorContainer>
        <Image src={Grantman} alt='' width={32} height={32}/>
        <span>Delani</span>
      </AuthorContainer>
    </PitchContainer>
  )
}

export default PitchCard