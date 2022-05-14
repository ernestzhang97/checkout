import React, {Component} from 'react'
import axios from 'axios'

import Next from '../util/Next'
import {
  FormContainer,
  FormStyle,
  InputStyle,
  InputButton,
  LabelStyle
} from '../util/FormStyling.js'

export default class Shipping extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInfo: {address: '', city: '', state: '', zip: '', phone: ''},
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleClick() {
    axios.post('/userInfo', this.state.userInfo)
      .then(response => this.props.changePage('payment'))
      .catch(err => console.log(err) )
  }

  handleChange(e) {
    this.setState({
      userInfo: {...this.state.userInfo, [e.target.name]: e.target.value }
    })
  }

  render() {
    return (
      <FormContainer>
        <FormStyle>
          <LabelStyle>Address</LabelStyle>
            <InputStyle
              type="text"
              name="address"
              value={this.state.userInfo.address}
              onChange={this.handleChange}
              placeholder="Address Line 1"
            />
            <InputStyle
              type="text"
              name="address"
              value={this.state.userInfo.address}
              onChange={this.handleChange}
              placeholder="Address Line 2"
            />
          <LabelStyle>City</LabelStyle>
            <InputStyle
              type="text"
              name="city"
              value={this.state.userInfo.city}
              onChange={this.handleChange}
              required
            />
          <LabelStyle>State</LabelStyle>
            <InputStyle
              type="text"
              name="state"
              value={this.state.userInfo.state}
              onChange={this.handleChange}
              required
            />
          <LabelStyle>Zip</LabelStyle>
            <InputStyle
              type="text"
              name="zip"
              value={this.state.userInfo.zip}
              onChange={this.handleChange}
              required
            />
          <LabelStyle>Phone Number</LabelStyle>
            <InputStyle
              type="text"
              name="phone"
              value={this.state.userInfo.phone}
              onChange={this.handleChange}
              placeholder="(000)000-0000"
              required
            />
        </FormStyle>
        <Next type="button" onClick={this.handleClick}>Payment</Next>
      </FormContainer>
    )
  }
}