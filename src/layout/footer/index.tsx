import React from 'react'
import Logo from "@/assets/image/logo.svg";

import { FaFacebook, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { 
    FooterContainer, 
    FooterTabContainer, 
    FooterBottomContainer, 
    TabsContainer, 
    TabContainer, 
    LogoContainer, 
    Text, 
    SocialContainer 
} from "./styled";
import Image from 'next/image';

const tabData = [
    {
        title: 'Solutions',
        content: [ 'Marketing', 'Analytics', 'Commerce', 'Insights' ]
    },
    {
        title: 'Support',
        content: [ 'Pricing', 'Documentation', 'Guides', 'API Status' ]
    },
    {
        title: 'Company',
        content: [ 'About', 'Blog', 'Jobs', 'Press', 'Partners' ]
    },
    {
        title: 'Legal',
        content: [ 'Claim', 'Privacy', 'Terms' ]
    },
]

const Footer = () => {
  return (
    <FooterContainer>
        <FooterTabContainer>
            <TabsContainer>
                {
                    tabData.map((item, key) =>
                        <TabContainer key={`footertab${key}`}>
                            <p>{item.title}</p>
                            {
                                item.content.map((content, key) => <span key={`footercontent${key}`}>{content}</span>)
                            }
                        </TabContainer>
                    )
                }
                
            </TabsContainer>
            <LogoContainer>
                <span>Gradian</span>
                <Image src={Logo} alt='' width={70} height={70}/>
            </LogoContainer>
        </FooterTabContainer>
        <FooterBottomContainer>
            <Text>© 2023 Gradian, Inc. All rights reserved</Text>
            <SocialContainer>
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaGithub />
            </SocialContainer>
        </FooterBottomContainer>
    </FooterContainer>
  )
}

export default Footer