import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Next from '../util/Next'

const ListContainer = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CategoryContainer = styled.div`
  width: 100%;
  height: 30%;
  border-style: solid;
  border-radius: 5px;
  border-color: #DCDCDC;
  margin-top: 8%;
`

const CategoryStyled = styled.h3`
  color: black;
  font-weight: bold;
  text-align: center;
`
const UserInputStyled = styled.p`
  color: black;
  text-align: center;
`

const CheckoutList = ({summary}) => {
  let keys, values, entries;

    keys = Object.keys(summary[0])
    values = Object.values(summary[0])

    entries = values.map((element, i) => (
      <CategoryContainer>
        <CategoryStyled>{keys[i]}</CategoryStyled>
        <UserInputStyled>{element}</UserInputStyled>
      </CategoryContainer>
    ))

  return entries
}

export default class Checkout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      summary: [],
      form: 'submitted'
    }

    this.handleClick= this.handleClick.bind(this)
  }

  componentDidMount() {
    axios.get('/summary')
      .then((response) => this.setState({ summary: response.data}))
      .catch(err => console.log(err))
  }

  handleClick() {
    axios.post('/updateCookie', {form: this.state.form})
      .then(response => this.props.changePage('submitted'))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <ListContainer>
        {this.state.summary.length && <CheckoutList summary={this.state.summary}/>}
        <Next onClick={this.handleClick}>Done!</Next>
      </ListContainer>
    )
  }
}

