import React from 'react'
import { 
  AboutContainer, 
  EmPowerContainer, 
  EmWrapper, 
  EmTitle, 
  LeadContainer, 
  LeadTitle, 
  LeadSubTitle, 
  BlogBtn, 
  GradianContainer, 
  GradianWrapper, 
  GradianContent, 
  GradianTitle,
  TeamContainer,
  TeamTitle,
  TeamSubTitle,
  TeamCard,
  Name,
  Role,
  MemberSocial,
  SocialCard,
} from "./styled";

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

import JoinComponent from '@/component/join';
import Header from '@/layout/header';
import Image from 'next/image';

import GradianImg from "@/assets/image/logo.svg";
import TeamMember from "@/assets/image/team-member.png";

const teamMember  = [
  {
    img: TeamMember,
    name: 'Scot Holdaway',
    role: 'Software Enginner',
    linkedinInfo: '',
    twitterInfo: '',
    instagramInfo: ''
  },
  {
    img: TeamMember,
    name: 'Scot Holdaway',
    role: 'Software Enginner',
    linkedinInfo: '',
    twitterInfo: '',
    instagramInfo: ''
  },
  {
    img: TeamMember,
    name: 'Scot Holdaway',
    role: 'Software Enginner',
    linkedinInfo: '',
    twitterInfo: '',
    instagramInfo: ''
  },
  {
    img: TeamMember,
    name: 'Scot Holdaway',
    role: 'Software Enginner',
    linkedinInfo: '',
    twitterInfo: '',
    instagramInfo: ''
  },
  {
    img: TeamMember,
    name: 'Scot Holdaway',
    role: 'Software Enginner',
    linkedinInfo: '',
    twitterInfo: '',
    instagramInfo: ''
  },
  {
    img: TeamMember,
    name: 'Scot Holdaway',
    role: 'Software Enginner',
    linkedinInfo: '',
    twitterInfo: '',
    instagramInfo: ''
  },
  {
    img: TeamMember,
    name: 'Scot Holdaway',
    role: 'Software Enginner',
    linkedinInfo: '',
    twitterInfo: '',
    instagramInfo: ''
  }
]

const AboutView = () => {
  return (
    <AboutContainer>
      <Header isSelected={3} />
      {/* ----------------------------------------------------------------------- */}
      <EmPowerContainer>
        <EmWrapper>
          <EmTitle>Empowering the future of web3 gaming</EmTitle>
          <p>Gradian is here to revolutionize digital asset ownership and commerce in gaming through the power of Algorand-based NFTs.</p>
        </EmWrapper>
      </EmPowerContainer>
      {/* ----------------------------------------------------------------------- */}
      <LeadContainer>
        <LeadTitle>Leading the charge in web3 gaming</LeadTitle>
        <LeadSubTitle>Gradian, a trailblazer in web3 gaming, aims to bring true digital ownership to every player by providing a secure and user-friendly platform for creating exceptional web3 games:</LeadSubTitle>
        <p>
          The Gradian Group comprises the Gradian Platform, the go-to developer platform for building & scaling web3 games on Algorand, and Gradian Games, a global frontrunner in web3 game development and publishing with standout titles such as Algomond and Paragonia.
          <br />
          <br />
          Established by visionary founders, Gradian is based in Sydney, boasting a team of top-notch technologists, creators, and innovators. The company is dedicated to delivering the best web3 gaming experience and committed to the growth of the Algorand ecosystem.
        </p>
        <BlogBtn>Blog</BlogBtn>
      </LeadContainer>
      {/* ----------------------------------------------------------------------- */}
      <GradianContainer>
        <GradianWrapper>
          <Image src={GradianImg} alt='' width={150} height={150} />
          <GradianTitle>Gradian</GradianTitle>
          <GradianContent>Immutable is the preferred developer platform for building & scaling web3 games on Ethereum.</GradianContent>
        </GradianWrapper>
      </GradianContainer>
      {/* ----------------------------------------------------------------------- */}
      <JoinComponent />
      {/* ----------------------------------------------------------------------- */}
      <TeamContainer>
        <TeamTitle>Our Team</TeamTitle>
        <TeamSubTitle>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </TeamSubTitle>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 60,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 45,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 45,
            },
            1060: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation]}
          className="team-swiper"
        >
          {
            teamMember.map((item, key) => 
            <SwiperSlide key={`swiperSliderList${key}`}>
              <TeamCard>
                <Image src={item.img} width={100} height={100} alt='' placeholder="blur"/>
                <Name>{item.name}</Name>
                <Role>{item.role}</Role>
                <MemberSocial>
                  <SocialCard>
                    <FaLinkedin />
                  </SocialCard>
                  <SocialCard>
                    <FaTwitter />
                  </SocialCard>
                  <SocialCard>
                    <FaFacebook />
                  </SocialCard>
                </MemberSocial>
              </TeamCard>
            </SwiperSlide>
          )
          }
        </Swiper>   
        </TeamContainer>
    </AboutContainer>
  )
}

export default AboutView