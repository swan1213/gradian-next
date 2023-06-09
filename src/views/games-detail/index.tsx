import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { 
  GameDetailContainer,
  GameViewContainer,
  ViewContainer,
  ContentWrapper,
  ViewBtn,
  ViewTabContainer,
  ImgGrpContainer,
  ArchiveList,
  ViewTabWrapper,
  PlayBtn,
  DetailSlider,
  ContentContainer,
  GenreContainer,
  GenreWrapper,
  GenreContent,
} from "./styled";
import Image from 'next/image';
import { FaTwitter, FaDiscord } from "react-icons/fa";

import Header from '@/layout/header';

import Detail1 from "@/assets/image/detail1.png";
import Detail2 from "@/assets/image/detail2.png";
import Detail3 from "@/assets/image/detail3.png";

import { Pagination } from "swiper";

const GameView = () => {
  return (
    <GameDetailContainer>
      <Header isSelected={2}/>
      <GameViewContainer bg={'/image/game1.png'}>
        <ViewContainer>
          <ContentWrapper>
            <b>Playable game</b>
            <span>Paragonia</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <ViewBtn>Play now</ViewBtn>
          </ContentWrapper>
        </ViewContainer>
      </GameViewContainer>
      <ViewTabContainer>
        <ViewTabWrapper>
          <ImgGrpContainer>
            Paragonia is live. Play now!
          </ImgGrpContainer>
          <ArchiveList>
            <span><FaDiscord /></span>
            <span><FaTwitter /></span>
            <PlayBtn>Play now</PlayBtn>
          </ArchiveList>
        </ViewTabWrapper>
      </ViewTabContainer>
      <GenreContainer>
        <GenreWrapper>
          <div>
            <span>Genre</span>
            Simulation
          </div>
          <div>
            <span>Publisher</span>
            Aglet
          </div>
          <div>
            <span>OS</span>
            iOS and Android
          </div>
        </GenreWrapper>
        <GenreContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet enim tortor at auctor urna.
        </GenreContent>
      </GenreContainer>
      <DetailSlider>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1050: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          modules={[Pagination]}
          className="game-detail-swiper"
        >
          <SwiperSlide>
            <Image src={Detail1} alt='' width={380} height={420} placeholder='blur'/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Detail2} alt='' width={380} height={420} placeholder='blur'/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Detail3} alt='' width={380} height={420} placeholder='blur'/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Detail1} alt='' width={380} height={420} placeholder='blur'/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Detail2} alt='' width={380} height={420} placeholder='blur'/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Detail3} alt='' width={380} height={420} placeholder='blur'/>
          </SwiperSlide>
        </Swiper>
      </DetailSlider>
      <ContentContainer>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</span>
        <br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet enim tortor at auctor urna. Dui faucibus in ornare quam. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Nunc faucibus a pellentesque sit amet porttitor. Semper feugiat nibh sed pulvinar proin gravida. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat. A diam maecenas sed enim ut sem viverra aliquet eget. A iaculis at erat pellentesque. Feugiat scelerisque varius morbi enim nunc faucibus. Proin sed libero enim sed. Est pellentesque elit ullamcorper dignissim. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Viverra nam libero justo laoreet sit. Sed elementum tempus egestas sed sed risus.
        <br/>
        <br/>
        Orci sagittis eu volutpat odio facilisis mauris. Adipiscing tristique risus nec feugiat in. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Mattis nunc sed blandit libero volutpat sed cras. Aliquet nibh praesent tristique magna sit amet purus gravida. Sit amet luctus venenatis lectus. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Donec enim diam vulputate ut. Facilisis gravida neque convallis a. In fermentum posuere urna nec tincidunt praesent. Nam libero justo laoreet sit. Cursus eget nunc scelerisque viverra mauris. Nam aliquam sem et tortor consequat id porta.
        <br/>
        <br/>
        Tempor id eu nisl nunc mi ipsum. Lacus vestibulum sed arcu non odio euismod lacinia. Vestibulum sed arcu non odio euismod lacinia. Odio ut sem nulla pharetra diam. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Vel fringilla est ullamcorper eget nulla facilisi. Tincidunt tortor aliquam nulla facilisi cras fermentum odio. Enim blandit volutpat maecenas volutpat blandit. Magna fringilla urna porttitor rhoncus dolor purus non enim. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Sodales neque sodales ut etiam sit amet. Sed viverra tellus in hac habitasse. Consequat id porta nibh venenatis cras. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Tempor id eu nisl nunc. Hendrerit dolor magna eget est lorem ipsum dolor sit amet.
      </ContentContainer>
    </GameDetailContainer>
  )
}

export default GameView