import { NextPage } from "next";
import React from "react";
import { HomePageWrapper } from "./home/styles";
import Header from "@/layout/header";
import {
  ContactView,
  GamingView,
  GradianView,
  IdeaView,
  IntroView,
  SubscribeView,
} from "@/views/home";

const HomePage: NextPage = () => {
  return (
    <HomePageWrapper>
      <Header />
      <IntroView />
      <GamingView />
      <IdeaView />
      <GradianView />
      <ContactView />
      <SubscribeView />
    </HomePageWrapper>
  );
};

export default HomePage;
