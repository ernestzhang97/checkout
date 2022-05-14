import React from 'react'
import styled from 'styled-components'

export const NextButton = styled.button`
  background-color: #ADD8E6;
  text-align: center;
  color: #F8F8FF;
  font-size: 16px;
  margin-top: 10%;
  width: 6em;
  height: 2em;
  cursor: pointer;
  border-radius: 10px;

  :hover {
    background-color: #B0C4DE
  }
`
export default function Next({children, theme, ...props}) {
  return (
    <NextButton theme={theme} {...props}>
      {children}
    </NextButton>
  )
}