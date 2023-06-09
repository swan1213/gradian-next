import React from "react";
import { GamingCardGridWrapper, GridWrapper } from "./styles";
import { GamingCard } from "../GamingCard";

type GamingCardGridProps = {
  title: string;
  cards: Array<CardProps>;
};

export type CardProps = {
  image: string;
  title: string;
  desc: string;
};

export const GamingCardGrid: React.FC<GamingCardGridProps> = ({
  title,
  cards,
}) => {
  return (
    <GamingCardGridWrapper>
      <h3>{title}</h3>
      <GridWrapper>
        {cards.map((item, key) => (
          <GamingCard key={key} {...item} />
        ))}
      </GridWrapper>
    </GamingCardGridWrapper>
  );
};
