import React from "react";
import { GamingCardWrapper } from "./styles";
import type { CardProps } from "../GamingCardGrid";
import Image from "next/image";

export const GamingCard: React.FC<CardProps> = ({ title, image, desc }) => {
  return (
    <GamingCardWrapper>
      <Image src={image} width={85} height={85} alt="" />
      <h4>{title}</h4>
      <p>{desc}</p>
    </GamingCardWrapper>
  );
};
