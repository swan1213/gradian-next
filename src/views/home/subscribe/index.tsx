import React from "react";
import {
  PartnersWrapper,
  SubscribeButton,
  SubscribeFormWrapper,
  SubscribeInputWrapper,
  SubscribeViewWrapper,
} from "./styles";

export const SubscribeView: React.FC = () => {
  return (
    <SubscribeViewWrapper>
      <PartnersWrapper>
        {[...new Array(6)].map((item, key) => (
          <div key={item}>
            <img src={`/image/subscribe/${key + 1}.png`} alt="" />
          </div>
        ))}
      </PartnersWrapper>
      <SubscribeFormWrapper>
        <h2>Subscribe for Updates</h2>
        <p>
          Subscribe to stay updated with new services, features and game
          releases.
        </p>
        <SubscribeInputWrapper>
          <input type="text" placeholder="Your email address" />
          <SubscribeButton>Subscribe</SubscribeButton>
        </SubscribeInputWrapper>
      </SubscribeFormWrapper>
    </SubscribeViewWrapper>
  );
};
