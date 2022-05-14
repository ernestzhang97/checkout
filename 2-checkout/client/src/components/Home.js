import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import {
  FormContainer,
  FormStyle,
  InputStyle,
  InputButton,
  LabelStyle
} from '../util/FormStyling.js'

//ignore, these are just css
const SignupButton = styled.button`
  display: inline-block;
  color: white;
  background-color: #228B22;
  width: 45%;
  margin: 10%;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: #006400;
  }
`

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {username: '' , password: ''},
      completed: false
    }

    this.authSubmit = this.authSubmit.bind(this)
    this.handleUser = this.handleUser.bind(this)
  }

  componentDidMount() {
    //remove the s_id= from the cookie in the browser; s=id{.....}
    let checkCompleted = JSON.parse(document.cookie.substr(5, document.cookie.length - 1))
    if (checkCompleted.formCompleted) {
     this.setState({completed: true})
    }
  }

  authSubmit(e) {
    e.preventDefault();
    if (!this.state.completed) {
      if (this.props.page =='login') {
        axios.get(`/login?username=${this.state.user.username}&&password=${this.state.user.password}`)
          .then((response) => {
            response.data.length ? this.props.changePage('shipping') : this.props.changePage('signup')
          })
          .catch(err => alert('Invalid Login'))
      } else if (this.props.page == 'signup') {
        axios.post('/signup', this.state.user)
          .then(() => this.props.changePage('shipping'))
          .catch(err => alert('Invalid Signup'))
      }
    } else {
      alert('Session already completed')
    }
  }

  handleUser(e) {
    this.setState({
      user: {...this.state.user, [e.target.name]: e.target.value }
    })
  }

  render() {
    return (
      <>
        <FormContainer>
          <FormStyle onSubmit={this.authSubmit}>
            <LabelStyle>Username</LabelStyle>
              <InputStyle
                type="text"
                name="username"
                value={this.state.user.username}
                onChange={this.handleUser}
                required
              />
            <LabelStyle>Password</LabelStyle>
              <InputStyle
                type="password"
                name="password"
                value={this.state.user.password}
                onChange={this.handleUser}
                required
              />
              <InputButton
                type="submit"
                value={this.props.page =='login' ? 'Login' : 'Signup'}
              />
          </FormStyle>
        <h4>Don't have an account? Click the signup button!</h4>
        <SignupButton onClick={() => this.props.changePage('signup')}>{this.props.page =='login' ? 'Signup!' : 'Login'}</SignupButton>
        </FormContainer>
      </>
    )
  }
}