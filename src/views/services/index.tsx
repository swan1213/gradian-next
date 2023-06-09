import React, { useState } from 'react'
import { 
  GameDetailContainer,
  GameViewContainer,
  ViewContainer,
  ContentWrapper,
  ViewBtn,
  TabContainer,
  TabItem,
  Web3Title,
  Web3CardContainer,
  Web3Card,
  ContentContainer,
  BtnGrp,
  Btn,
  SDKCardContainer,
  SDKCard,
} from "./styled";
import Image from 'next/image';

import KeyChainImg from "@/assets/image/keychain.svg";
import PurchasePortImg from "@/assets/image/purchaseport.svg";
import GigaMintnImg from "@/assets/image/gigamint.svg";
import AssetBazaarImg from "@/assets/image/asset.svg";
import PlayMatrixImg from "@/assets/image/playmatrix.svg";
import SDKsImg from "@/assets/image/sdks.svg";
import DashboardImg from "@/assets/image/dashboard.svg";
import LaunchPadImg from "@/assets/image/launchpad.svg";
import GameForgeImg from "@/assets/image/gameforge.svg";

import Header from '@/layout/header';

const tabList = ['Web3 Game Services', 'SDKs & Configuration', 'Distribution']
const web3ServiceList = [
  {
    img: KeyChainImg,
    title: 'Keychain',
    content: 'A non-custodial wallet and authentication solution that streamlines user onboarding. With off-ramp solution for players to claim self-custody.',
  },
  {
    img: PurchasePortImg,
    title: 'PurchasePort',
    content: 'Streamlines player onboarding by allowing purchase of assets using major payment methods, catering to mainstream gamers while complying with KYC/CTF regulations.',
  },
  {
    img: GigaMintnImg,
    title: 'GigaMint',
    content: 'Streamlined NFT minting for game developers, supporting ARC3, ARC19, and ARC69 Algorand standards, with real-time Live Minting or batch creation.',
  },
  {
    img: AssetBazaarImg,
    title: 'AssetBazaar',
    content: 'A customizable fixed-price storefront for displaying and selling game assets, seamlessly integrated with PurchasePort, offering a familiar microtransaction experience for players.',
  },
  {
    img: PlayMatrixImg,
    title: 'PlayMatrix',
    content: 'An array of in-game dApps designed to securely manage player transactions such as crafting, trading, land management, and more, enhancing the gaming experience.',
  },

]
const sdkServiceList = [
  {
    img: SDKsImg,
    title: 'OpenAPI SDKs',
    content: `Gradian's OpenAPI SDKs facilitate seamless integration with APIs and smart contracts, allowing developers to swiftly create and deploy web3 projects within their preferred development environment.`,
  },
  {
    img: DashboardImg,
    title: 'Dashboard Central',
    content: `Gradian's OpenAPI SDKs facilitate seamless integration with APIs and smart contracts, allowing developers to swiftly create and deploy web3 projects within their preferred development environment.`,
  }

]
const distributionList = [
  {
    img: LaunchPadImg,
    title: 'LaunchPad',
    content: `Simplify NFT distribution with a one-click solution for publishing assets to our network of exchanges and NFT marketplaces.`,
  },
  {
    img: GameForgeImg,
    title: 'GameForge',
    content: `Access fee-based game development services, explore our portfolio, and benefit from expert assistance in web3 gamification for businesses lacking specialized developer expertise.`,
  }

]

const GameView = () => {
  const [ tab, setTab ] = useState(0);
  return (
    <GameDetailContainer>
      <Header isSelected={0}/>
      <GameViewContainer bg={'/image/empower.png'}>
        <ViewContainer>
          <ContentWrapper>
            <b>Gradian</b>
            <span>Web3 Game Services</span>
            Gradian intends to develop the following dApps, with more to follow. Assumes the transacted assets are commodities like artwork, with self-custody.
            <ViewBtn>Learn More</ViewBtn>
          </ContentWrapper>
        </ViewContainer>
      </GameViewContainer>
      <TabContainer>
        {
          tabList.map((item, key) => 
            <TabItem key={`servicetablist${key}`} onClick={() => setTab(key)} isSelected={tab === key && true}>{item}</TabItem>
          )
        }
      </TabContainer>
      <Web3Title>Web3 Game Services</Web3Title>
      <Web3CardContainer>
        {
          web3ServiceList.map((item, key) => 
            <Web3Card key={`web3service${key}`}>
              <Image src={item.img} alt='' width={85} height={85} />
              <ContentContainer>
                <span>{item.title}</span>
                {item.content}
              </ContentContainer>
              <BtnGrp>
                <Btn>Coming Soon</Btn>
                <Btn>Learn More</Btn>
              </BtnGrp>
          </Web3Card>
          )
        }
      </Web3CardContainer>
      <Web3Title>SDKs & Configuration</Web3Title>
      <SDKCardContainer>
        {
          sdkServiceList.map((item, key) => 
            <SDKCard key={`sdkservice${key}`}>
              <Image src={item.img} alt='' width={85} height={85} />
              <ContentContainer>
                <span>{item.title}</span>
                {item.content}
              </ContentContainer>
              <BtnGrp>
                <Btn>Coming Soon</Btn>
                <Btn>Learn More</Btn>
              </BtnGrp>
          </SDKCard>
          )
        }
      </SDKCardContainer>
      <Web3Title>Distribution</Web3Title>
      <SDKCardContainer>
        {
          distributionList.map((item, key) => 
            <SDKCard key={`distributionservice${key}`}>
              <Image src={item.img} alt='' width={85} height={85} />
              <ContentContainer>
                <span>{item.title}</span>
                {item.content}
              </ContentContainer>
              <BtnGrp>
                <Btn>Coming Soon</Btn>
                <Btn>Learn More</Btn>
              </BtnGrp>
          </SDKCard>
          )
        }
      </SDKCardContainer>
    </GameDetailContainer>
  )
}

export default GameView