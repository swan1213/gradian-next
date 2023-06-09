import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { 
  BlogContainer,
  GameTitleContainer,
  GameWrapper,
  SearchContainer,
  GameViewContainer,
  ViewContainer,
  ContentWrapper,
  ViewBtn,
  ViewTabContainer,
  ImgGrpContainer,
  ArchiveList,
  ViewTabWrapper,
  ParagoniaContainer
} from "./styled";
import Image from 'next/image';
import { MdOutlineKeyboardArrowDown, MdSearch } from "react-icons/md";

import Header from '@/layout/header';
import JoinNewsLetter from "@/component/joinNewsletter";
import ParagonCard from "@/component/paragonCard";

import Category3 from "@/assets/image/category3.png";

import { Autoplay } from "swiper";

const paragoniaData = [
  {
    img: '/image/paragonia1.png'
  },
  {
    img: '/image/paragonia2.png'
  },
  {
    img: '/image/gradian-item.png'
  },
  {
    img: '/image/gradian-item.png'
  },
  {
    img: '/image/paragonia1.png'
  },
  {
    img: '/image/paragonia2.png'
  },
  {
    img: '/image/paragonia1.png'
  },
  {
    img: '/image/paragonia2.png'
  },
  {
    img: '/image/gradian-item.png'
  },
  {
    img: '/image/gradian-item.png'
  },
  {
    img: '/image/paragonia1.png'
  },
  {
    img: '/image/paragonia2.png'
  }
]

const slideData = [
  '/image/game1.png', 
  '/image/game2.png', 
  '/image/game1.png', 
]

const archiveList = [
  '20+ marketplaces', 
  '$1b ecosystem funding',
  '100+ games',
  '20+ marketplaces',
  '$1b ecosystem funding',
  '20+ marketplaces', 
  '$1b ecosystem funding',
  '100+ games',
  '20+ marketplaces',
  '$1b ecosystem funding',
]

const GameView = () => {
  return (
    <BlogContainer>
      <Header isSelected={2}/>
      <GameTitleContainer>
        <GameWrapper>
          <span>
            <MdOutlineKeyboardArrowDown />
            Our Game Titles
          </span>
          <SearchContainer>
            <MdSearch /> 
            <input type='text' placeholder='Search Game Titles'/>
          </SearchContainer>
        </GameWrapper>
      </GameTitleContainer>
      <Swiper 
          modules={[Autoplay]} 
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          className="mySwiper"
      >
      
        {
          slideData.map((item, key) => 
            <SwiperSlide key={`gameViewSlider${key}`}>
              <GameViewContainer bg={item}>
                <ViewContainer>
                  <ContentWrapper>
                    <span>Experience the future of gaming with Gradian</span>
                    Dive into a universe where gaming and innovation collide. Revolutionize the way games integrate web3 transactions and unleash the full potential of Algorand-based Web3 gaming through Gradian. We proudly showcase our games, featuring cutting-edge web3 dApps as a service and unwavering development support to elevate your gaming experience.
                    <ViewBtn>View all Games</ViewBtn>
                  </ContentWrapper>
                </ViewContainer>
              </GameViewContainer>
            </SwiperSlide>
          )
        }
      </Swiper>
      <ViewTabContainer>
        <ViewTabWrapper>
          {/* <ImgGrpContainer>
            {
              slideData.map((item, key) => <Image src={Category3} alt='' placeholder='blur' width={48} height={30} />)
            }
          </ImgGrpContainer> */}
          <ArchiveList>
            <div>
              {
                archiveList.map((item, key) => <li key={`archivedata${key}`}>{item}</li>)
              }
            </div>
          </ArchiveList>
        </ViewTabWrapper>
      </ViewTabContainer>
      <ParagoniaContainer>
          {
            paragoniaData.map((item, key) => <ParagonCard bg={item.img}/>)
          }
      </ParagoniaContainer>
      <JoinNewsLetter />
    </BlogContainer>
  )
}

export default GameView