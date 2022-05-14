import React from 'react'
import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const InputStyle = styled.input`
  display: inline-block;
  width: 100%;
  margin-top: 5%;
  padding: 10px;
  border-radius: 10px;
`

export const InputButton = styled.input`
  display: inline-block;
  color: white;
  background-color: #228B22;
  width: 70%;
  margin: 10%;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: #006400;
  }
`

export const LabelStyle = styled.label`
  display: block;
  text-align:center;
  font-size: 1em;
  margin-top: 5%;
  font-weight: bold;
`
