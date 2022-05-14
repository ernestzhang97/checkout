const db = require('../db')

module.exports = {

  postUserInfo: (req, res) => {
    let parsedSession = JSON.parse(req.session_id)
    
    let params = [req.body.address, req.body.city, req.body.state, req.body.zip, req.body.phone, parsedSession.session_id]

    db.queryAsync(
      `update users set address=?, city=?, state=?, zip=?, phone=? where session=?;`,
      params
    )
      .then(() => res.status(201).json('Posted information'))
      .catch(err => res.status(500).json('Did not post successfully'))
  },

  postPayment: (req, res) => {
    let parsedSession = JSON.parse(req.session_id)

    let params = [req.body.credit_card, req.body.expiry_date, req.body.cvv, req.body.billing_zip, parsedSession.session_id]

    db.queryAsync(
      `update users set credit_card=?, expiry_date=?, cvv=?, billing_zip=? where session=?;`,
      params
    )
      .then(() => res.status(201).json('Posted payment'))
      .catch(err => res.status(500).json('Did not post payment'))
  },

  grabSummary: (req, res) => {
    let parsedSession = JSON.parse(req.session_id)

    db.queryAsync(
      `select username, password, address,
      city, state, zip, phone, credit_card,
      expiry_date, cvv, billing_zip
      from users where session=?`,
      [parsedSession.session_id]
    )
      .then(response => res.status(200).json(response[0]))
      .catch(err => res.status(500).json('Something went wrong fetching your summary...'))
  }
}