import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import LogoIcon from "@/assets/image/logo.svg";
import { FaBars } from "react-icons/fa";

import { HeaderContainer, LogoContainer, TabsContainer, StartBtn, TabItem } from "./styled";

const headerTab = [
  {
    title: 'Web3 Game Services',
    direct: '/services'
  },
  {
    title: 'Pricing',
    direct: '/pricing'
  },
  {
    title: 'Our Games',
    direct: '/games'
  },
  {
    title: 'About',
    direct: '/about'
  },
  {
    title: 'Blog',
    direct: '/blog'
  }
]

interface iProps {
  isSelected?: number
}

const Header = (props: iProps) => {
  const router = useRouter();

  return (
    <HeaderContainer>
      <LogoContainer onClick={() => router.push('/')}>
        <Image src={LogoIcon} alt='LogoIcon' width={70} height={70} draggable={false} />
        <span>Gradian</span>
      </LogoContainer>
      <TabsContainer>
        {
          headerTab.map((item, key) => <TabItem key={`headerTabs${key}`} isSelected={props.isSelected === key && true} onClick={() => router.push(item.direct)}>{item.title}</TabItem>)
        }
      </TabsContainer>
      <StartBtn>Start Building</StartBtn>
      <FaBars color='#fff' size={'35px'} className='mobile-tab'/>
    </HeaderContainer>
  )
}

export default Header