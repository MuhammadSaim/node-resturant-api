const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token ||
    req.query.token ||
    req.params.token ||
    req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({
      error: true,
      message: "A token is required for authentication",
    });
  }
  try {
    const decoded = jwt.verify(token, config.JWT_TOKEN_SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(401).json({
      error: true,
      message: "Invalid Token",
    });
  }
  return next();
};

module.exports = verifyToken;
