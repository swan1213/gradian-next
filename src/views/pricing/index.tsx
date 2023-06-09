import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { 
  BlogContainer,
  PricingContainer,
  ContentContainer,
  ContentTitle,
  PricingContent,
  PricingOutContainer,
  FaqContainer,
  FaqWrapper,
  FaqTitle,
  FaqDisplayContainer,
  FaqContent,
  FaqItemContainer,
  MemberShipsContainer,
  MemberShipCard,
  CardTitle,
  ChooseBtn,
  CardContent,
  CardList,
} from "./styled";
import Image from 'next/image';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";

import Header from '@/layout/header';

import PricingImg from "@/assets/image/pricing.png";
import ShipStarter from "@/assets/image/membership-starter.svg";
import ShipPre from "@/assets/image/membership-pre.svg";

const faqData = [
  {
    title: 'What is Web3 gaming?',
    text: 'Web3 gaming refers to games that leverage blockchain technology, enabling decentralized, transparent, and secure in-game transactions, player interactions, and ownership of digital assets.',
  },
  {
    title: 'How do I get started with Web3 game services?',
    text: 'Web3 gaming refers to games that leverage blockchain technology, enabling decentralized, transparent, and secure in-game transactions, player interactions, and ownership of digital assets.',
  },
  {
    title: 'Do I need a separate wallet to use the services?',
    text: 'Web3 gaming refers to games that leverage blockchain technology, enabling decentralized, transparent, and secure in-game transactions, player interactions, and ownership of digital assets.',
  },
  {
    title: 'What payment methods do you accept?',
    text: 'Web3 gaming refers to games that leverage blockchain technology, enabling decentralized, transparent, and secure in-game transactions, player interactions, and ownership of digital assets.',
  },
  {
    title: 'What is a smart contract, and how does it work in Web3 gaming?',
    text: 'Web3 gaming refers to games that leverage blockchain technology, enabling decentralized, transparent, and secure in-game transactions, player interactions, and ownership of digital assets.',
  },
  {
    title: 'How do live minting services work?',
    text: 'Web3 gaming refers to games that leverage blockchain technology, enabling decentralized, transparent, and secure in-game transactions, player interactions, and ownership of digital assets.',
  },
  {
    title: 'What is KYC, and why is it important?',
    text: 'Web3 gaming refers to games that leverage blockchain technology, enabling decentralized, transparent, and secure in-game transactions, player interactions, and ownership of digital assets.',
  },
  {
    title: 'Can I cancel my subscription at any time?',
    text: 'Web3 gaming refers to games that leverage blockchain technology, enabling decentralized, transparent, and secure in-game transactions, player interactions, and ownership of digital assets.',
  },
  {
    title: 'Do you offer customer support?',
    text: 'Web3 gaming refers to games that leverage blockchain technology, enabling decentralized, transparent, and secure in-game transactions, player interactions, and ownership of digital assets.',
  }
]

const cardData = [
  {
    mark: ShipStarter,
    title: 'Starter',
    cost: '0',
    getList: ['100 API Calls per Month', 'Unlimited Testnet API Calls', 'General Discord Support', 'No On-Ramp Fiat Payment Solution & KYC via MoonPay for seamless player onboarding']
  },
  {
    mark: ShipPre,
    title: 'Professional',
    cost: '20',
    getList: ['20,000 API Calls per Month', 'Unlimited Testnet API Calls', 'Premium Discord Support, with access to invite only channels with prioritized support', 'On-Ramp Fiat Payment Solution & KYC via MoonPay for seamless player onboarding']
  },
  {
    mark: ShipPre,
    title: 'Enterprise',
    cost: '60',
    getList: ['200,000 API Calls per Month', 'Unlimited Testnet API Calls', 'Highest Priority Premium Discord Support, with your own Discord server', 'On-Ramp Fiat Payment Solution & KYC via MoonPay for seamless player onboarding']
  },
]

const GameView = () => {
  const [ selectFAQ, setSelectFAQ ] = useState(0);
  return (
    <BlogContainer>
      <Header isSelected={1}/>
      <PricingOutContainer>
        <PricingContainer>
          <ContentContainer>
              <ContentTitle>
                <span>Gradian</span>
                Pricing plans
              </ContentTitle>
              <PricingContent>Introducing our Web3 Game Services pricing page, offering comprehensive solutions for seamless access to smart contracts, in-game transactions, crafting, microtransaction stores, live minting services, and more. Enhance your gaming experience with seamless player onboarding through FIAT purchase of blockchain assets and pre-filled self-custodial wallets for zero effort onboarding. Choose from our three distinct plans: Starter, Professional, and Enterprise, each tailored to suit your needs.</PricingContent>
          </ContentContainer>
          <Image src={PricingImg} alt='' width={284} height={284} placeholder='blur' />
        </PricingContainer>
      </PricingOutContainer>
      <MemberShipsContainer>
        {
          cardData.map((item, key) => 
            <MemberShipCard key={`membercard${key}`}>
              <CardTitle>
                <div>
                  <Image src={ShipStarter} alt='' width={33} height={33} />{item.title}
                </div>
                <span><b>${`${item.cost}`}</b>/month</span>
              </CardTitle>
              <CardContent>
                <b>What You’ll Get</b>
                <CardList>
                  {
                    item.getList.map((card, key) => 
                      <div key={`membercardgetlist${key}`}>
                        <AiFillCheckCircle color='#fff'/> {card}
                      </div>
                    )
                  }
                </CardList>
              </CardContent>
              <ChooseBtn>Choose</ChooseBtn>
            </MemberShipCard>
          )
        }
      </MemberShipsContainer>
      <FaqContainer>
        <FaqDisplayContainer>FAQs</FaqDisplayContainer>
        <FaqWrapper>
          {
            faqData.map((item, key) => 
              <FaqItemContainer key={`faqlist${key}`} onClick={() => setSelectFAQ(key)}>
                <FaqTitle>
                  <span>{item.title}</span>
                  <MdOutlineKeyboardArrowUp size={25}/>
                </FaqTitle>
                {
                  selectFAQ === key && <FaqContent>{item.text}</FaqContent>
                }
              </FaqItemContainer>
            )
          }
        </FaqWrapper>
      </FaqContainer>
    </BlogContainer>
  )
}

export default GameView