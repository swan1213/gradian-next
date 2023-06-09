import React from 'react'
import { 
  BlogContainer,
  PitchCardContainer,
  LoadBtn,
  RecommendTitle,
  DetailTab,
  Title,
  PitchContainer,
  ContentContainer,
  SocialContainer,
  Socials,
} from "./styled";
import Image from 'next/image';

import Header from '@/layout/header';
import JoinNewsLetter from "@/component/joinNewsletter";
import PitchCard from "@/component/pitchCard";

import PitchImg from "@/assets/image/pitch.png";
import Category1 from "@/assets/image/category1.png";
import Category2 from "@/assets/image/category2.png";
import Category3 from "@/assets/image/category3.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const categoryData = [
  {
    img: Category1
  },
  {
    img: Category3
  },
  {
    img: Category2
  },
  {
    img: Category2
  },
  {
    img: Category1
  },
  {
    img: Category3
  }
]

const BlogDetailView = () => {
  return (
    <BlogContainer>
      <Header isSelected={4} />
      <DetailTab>{`Blog > `} <span>Pitch termsheet...</span></DetailTab>
      <Title>
        <span>
          <b>Category{' '}</b> 
          November 22, 2021
        </span>
        Pitch termsheet backing validation focus release.
      </Title>  
      <PitchContainer>
        <Image src={PitchImg} alt='' width={1200} height={590} className='detail-img' placeholder='blur' />
      </PitchContainer>
      <ContentContainer>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet enim tortor at auctor urna. Dui faucibus in ornare quam. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Nunc faucibus a pellentesque sit amet porttitor. Semper feugiat nibh sed pulvinar proin gravida. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat. A diam maecenas sed enim ut sem viverra aliquet eget. A iaculis at erat pellentesque. Feugiat scelerisque varius morbi enim nunc faucibus. Proin sed libero enim sed. Est pellentesque elit ullamcorper dignissim. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Viverra nam libero justo laoreet sit. Sed elementum tempus egestas sed sed risus.
        <br />
        <br />
        Orci sagittis eu volutpat odio facilisis mauris. Adipiscing tristique risus nec feugiat in. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Mattis nunc sed blandit libero volutpat sed cras. Aliquet nibh praesent tristique magna sit amet purus gravida. Sit amet luctus venenatis lectus. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Donec enim diam vulputate ut. Facilisis gravida neque convallis a. In fermentum posuere urna nec tincidunt praesent. Nam libero justo laoreet sit. Cursus eget nunc scelerisque viverra mauris. Nam aliquam sem et tortor consequat id porta.
        <br />
        <br />
        Tempor id eu nisl nunc mi ipsum. Lacus vestibulum sed arcu non odio euismod lacinia. Vestibulum sed arcu non odio euismod lacinia. Odio ut sem nulla pharetra diam. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Vel fringilla est ullamcorper eget nulla facilisi. Tincidunt tortor aliquam nulla facilisi cras fermentum odio. Enim blandit volutpat maecenas volutpat blandit. Magna fringilla urna porttitor rhoncus dolor purus non enim. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Sodales neque sodales ut etiam sit amet. Sed viverra tellus in hac habitasse. Consequat id porta nibh venenatis cras. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Tempor id eu nisl nunc. Hendrerit dolor magna eget est lorem ipsum dolor sit amet.
      </ContentContainer>
      <SocialContainer>
        <span>Share</span>
        <Socials>
          <FaFacebook/>
          <FaTwitter/>
          <FaInstagram/>
          <FaLinkedin/>
        </Socials>
      </SocialContainer>
      <JoinNewsLetter />
      <RecommendTitle>Recommended for you</RecommendTitle>
      <PitchCardContainer>
        {
          categoryData.map((item, key) => <PitchCard key={`blogDetail${key}`} bg={item.img} />)
        }
      </PitchCardContainer>
      <LoadBtn>Load more</LoadBtn>
    </BlogContainer>
  )
}

export default BlogDetailView