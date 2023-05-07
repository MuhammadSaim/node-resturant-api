const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (username === undefined || username === "") {
    return res.status(400).json({
      error: true,
      message: "Please provide the username.",
    });
  }

  if (password === undefined || password === "") {
    return res.status(400).json({
      error: true,
      message: "Please provide the password.",
    });
  }

  const user = await UserModel.findOne({
    where: {
      USERCODE: username,
      USERPW: password,
    },
    exclude: ["id"],
    order: [["USERCODE", "ASC"]],
    attributes: ["USERCODE", "USERPW"],
  });

  if (user === null) {
    return res.status(400).json({
      error: true,
      message: "Sorry not able to find the user.",
    });
  }

  // Create token
  const token = jwt.sign(
    { user: user.USERCODE },
    process.env.JWT_TOKEN_SECRET,
    {
      expiresIn: "24h",
    }
  );

  return res.json({
    error: false,
    user: {
      username: user.USERCODE,
      token: token,
    },
  });
};

module.exports = {
  login,
};
