const { v4: uuidv4 } = require("uuid");

module.exports = (req, res, next) => {
  /**
   *
   * Parse cookies in incoming request:
   *
   */

  let cookieString = req.get("Cookie") || "";

  parsedCookies = cookieString.split("; ").reduce((cookies, cookie) => {
    if (cookie.length) {
      let index = cookie.indexOf("=");
      let key = cookie.slice(0, index);
      let token = cookie.slice(index + 1);
      cookies[key] = token;
    }
    return cookies;
  }, {}); //{s_id: .....} s_id=........;value=.......;

  let formBoolean = req.body.form || false

  if (parsedCookies.s_id) {
    let parsed = JSON.parse(parsedCookies.s_id)
    let newCookie = JSON.stringify({session_id: parsed.session_id, formCompleted: !!formBoolean})
    req.session_id= newCookie

    //once the user has checkout, reset the cookie in the browser to the same session id but different form completed
    if (formBoolean) res.cookie("s_id", newCookie, {encode: String})
  } else {
    req.session_id = uuidv4();
    let jsonCookie = JSON.stringify({session_id: req.session_id, formCompleted: formBoolean})
    //without encode, browser cookie looks like  %7B%22session_id%22%3A%22628c9673....
    res.cookie("s_id", jsonCookie, {encode: String });
  }

  next();
};
