const db = require('../db')

module.exports = {
  login: (req, res) => {
      let {username, password} = req.query

    db.queryAsync(`select username, password from users where username = ? and password = ? `, [username, password])
      .then(response => res.status(200).json(response[0]))
      .catch(err => res.status(500).send(err))
  },

  signup: (req, res) => {
    let parsedSession = JSON.parse(req.session_id)
    
    let params = [req.body.username, req.body.password, parsedSession.session_id]

    db.queryAsync('insert into users(username, password, session) values(?, ?, ?)', params)
      .then(response => res.status(201).send('Signup successful!'))
      .catch(err => res.status(500).send('Signup unsucessful...'))
  }
}