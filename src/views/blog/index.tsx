import React from 'react'
import { 
  BlogContainer,
  PitchContainer,
  PitchContentContainer,
  PitchSubTitle,
  PitchTitle,
  PitchMan,
  PitchCardContainer,
  LoadBtn
} from "./styled";
import Image from 'next/image';

import Header from '@/layout/header';
import JoinNewsLetter from "@/component/joinNewsletter";
import PitchCard from "@/component/pitchCard";

import PitchImg from "@/assets/image/pitch.png";
import Category1 from "@/assets/image/category1.png";
import Category2 from "@/assets/image/category2.png";
import Category3 from "@/assets/image/category3.png";
import Man from "@/assets/image/pitchman.png";

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

const BlogView = () => {
  return (
    <BlogContainer>
      <Header isSelected={4} />
      <PitchContainer>
        <Image src={PitchImg} alt='' width={480} height={330} className='pitch-img' placeholder='blur' />
        <PitchContentContainer>
          <PitchSubTitle>
            <span>Category</span>November 22, 2021
          </PitchSubTitle>
          <PitchTitle>Pitch termsheet backing validation focus release.</PitchTitle>
          <PitchMan>
            <Image src={Man} alt='' width={32} height={32} placeholder='blur' />
            <span>Chandler Bing</span>
          </PitchMan>
        </PitchContentContainer>
      </PitchContainer>
      <JoinNewsLetter />
      <PitchCardContainer>
        {
          categoryData.map((item, key) => <PitchCard key={`pitchCard${key}`} bg={item.img} />)
        }
      </PitchCardContainer>
      <LoadBtn>Load more</LoadBtn>
    </BlogContainer>
  )
}

export default BlogView