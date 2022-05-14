import React from 'react'
import styled from 'styled-components'
import ThankYou from '../assets/ThankYou.jpeg'
import { NextButton } from '../util/Next'

const ThankYouContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ThankYouImage = styled.img`
  content: url(${ThankYou});
  object-fit: cover;
`

const PhraseStyled = styled.p`
  font-size: 5em;
  color: black;
  text-align: center;
`

const BetterNextButton = styled(NextButton)`
  width: 10em;
  height: 5em;
`

export default function Submitted({ changePage }) {
  return(
    <ThankYouContainer>
      <ThankYouImage/>
      <PhraseStyled>Thank you for shopping!</PhraseStyled>
      <BetterNextButton onClick={() => changePage('login')}>Click Here to Go Back To Login!</BetterNextButton>
    </ThankYouContainer>
  )
}