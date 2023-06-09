import React from "react";
import {
  ContactDescWrapper,
  ContactFormGroup,
  ContactFormWrapper,
  ContactInput,
  ContactSelect,
  ContactTextArea,
  ContactViewWrapper,
  SubmitButton,
} from "./styles";

export const ContactView: React.FC = () => {
  return (
    <ContactViewWrapper>
      <ContactDescWrapper>
        <h1>
          Did You Find Your <span>Dream Game?</span>
        </h1>
        <p>
          Thank you for getting in touch! if you find your dream game connect
          with us
        </p>
      </ContactDescWrapper>
      <ContactFormWrapper>
        <ContactFormGroup>
          <ContactInput placeholder="Your Name" />
          <ContactInput placeholder="Your Email" />
        </ContactFormGroup>
        <ContactFormGroup>
          <ContactInput placeholder="Phone Number" />
          <ContactSelect>
            <option>asdfasdf</option>
            <option>asdfasdf</option>
          </ContactSelect>
        </ContactFormGroup>
        <ContactTextArea placeholder="Message" />
        <SubmitButton>Submit</SubmitButton>
      </ContactFormWrapper>
    </ContactViewWrapper>
  );
};
