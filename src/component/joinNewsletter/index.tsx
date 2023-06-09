import React from 'react'
import { 
  JoinContainer,
  JoinContentContainer,
  JoinBtnContainer,
  JoinBtn
 } from "./styled";

const JoinNewsLetter = () => {
  return (
    <JoinContainer>
        <JoinContentContainer>
          <span>Join the Gradian Newsletter</span>
          Be the first to receive Immutable updates, announcements and more.
        </JoinContentContainer>
        <JoinBtnContainer>
          <input type='text' placeholder='Your email address' />
          <JoinBtn>Subscribe</JoinBtn>
        </JoinBtnContainer>
      </JoinContainer>
  )
}

export default JoinNewsLetter