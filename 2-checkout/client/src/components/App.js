import { Component } from 'react'
import styled from 'styled-components'

import Home from './Home'
import Shipping from './Shipping'
import Payment from './Payment'
import Checkout from './Checkout'
import Submitted from './Submitted'

const GlobalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledTitle = styled.h1`
  color: purple;
  text-align: center;
`

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 'login'
    }

    this.changePage = this.changePage.bind(this)
    this.renderPage = this.renderPage.bind(this)
  }

  changePage(pageValue) {
    this.setState({
      page: pageValue
    })
  }

  renderPage(value) {
    switch(value) {
      case 'shipping':
        return <Shipping changePage={this.changePage}/>
      case 'payment':
        return <Payment changePage={this.changePage}/>
      case 'checkout':
        return <Checkout changePage={this.changePage}/>
      case 'submitted':
        return <Submitted changePage={this.changePage}/>
      default:
        return this.state.page == 'login' ?
          <Home page={'login'} changePage={this.changePage} />
          :
          <Home page={this.state.page}changePage={this.changePage}/>
    }
  }

  render() {
    return (
      <GlobalContainer>
        <StyledTitle>{ "Ernest's Shitty Checkout Thing =)"}</StyledTitle>
        {this.renderPage(this.state.page)}
      </GlobalContainer>
    )
  }
}
