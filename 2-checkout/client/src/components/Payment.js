import { Component } from 'react'
import axios from 'axios'

import Next from '../util/Next'
import {
  FormContainer,
  FormStyle,
  InputStyle,
  InputButton,
  LabelStyle
} from '../util/FormStyling.js'

export default class Payment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      payment: {credit_card: '', expiry_date: '', cvv: '', billing_zip: ''}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    this.setState({
      payment: {...this.state.payment, [e.target.name]: e.target.value}
    })
  }

  handleClick() {
    axios.post('/payment', this.state.payment)
      .then(response => this.props.changePage('checkout'))
      .catch(err => alert('Invalid payment'))
  }

  render() {
    return (
      <FormContainer>
        <FormStyle>
          <LabelStyle>Credit Card</LabelStyle>
            <InputStyle
              type="text"
              name="credit_card"
              value={this.state.payment.credit_card}
              onChange={this.handleChange}
              require
            />
          <LabelStyle>Expiry Date</LabelStyle>
           <InputStyle
              type="text"
              name="expiry_date"
              value={this.state.payment.expiry_date}
              placeholder="00/00"
              onChange={this.handleChange}
              require
            />
          <LabelStyle>CVV</LabelStyle>
            <InputStyle
              type="password"
              name="cvv"
              value={this.state.payment.cvv}
              placeholder="000"
              onChange={this.handleChange}
              require
            />
          <LabelStyle>Billing Zip</LabelStyle>
            <InputStyle
              type="text"
              name="billing_zip"
              value={this.state.payment.billing_zip}
              onChange={this.handleChange}
              require
            />
        </FormStyle>
        <Next type="button" onClick={this.handleClick}>Checkout</Next>
      </FormContainer>
    )
  }
}
