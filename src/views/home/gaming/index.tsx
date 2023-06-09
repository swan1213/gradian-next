import React from "react";
import { GamingViewWrapper } from "./styles";
import { GamingCardGrid } from "@/component/GamingCardGrid";
import { gamingCardData } from "../data";

export const GamingView: React.FC = () => {
  return (
    <GamingViewWrapper>
      {gamingCardData.map((item, key) => (
        <GamingCardGrid key={key} {...item} />
      ))}
    </GamingViewWrapper>
  );
};
