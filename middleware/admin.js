const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.cookies.jwt; // Assuming you're using cookies for token storage

  if (!token) {
    return res.redirect("/admin")
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).redirect("/admin")
  }
};

module.exports = verifyToken;