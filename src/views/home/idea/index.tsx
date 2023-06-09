import React from "react";
import Image from "next/image";
import {
  DetailWrapper,
  DetailsItem,
  IdeaButton,
  IdeaContentWrapper,
  IdeaViewWrapper,
  ImageWrapper,
} from "./styles";
import ideaImg from "../../../assets/image/idea.png";
import { ideaData } from "../data";

export const IdeaView: React.FC = () => {
  return (
    <IdeaViewWrapper>
      <h3>Have a Web3 Game idea? Let us build it.</h3>
      <IdeaContentWrapper>
        <ImageWrapper>
          <Image src={ideaImg.src} layout="fill" alt="" objectFit="contain" />
        </ImageWrapper>
        <DetailWrapper>
          {ideaData.map((item, key) => (
            <DetailsItem key={key}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </DetailsItem>
          ))}
        </DetailWrapper>
      </IdeaContentWrapper>
      <IdeaButton>Learn More</IdeaButton>
    </IdeaViewWrapper>
  );
};
