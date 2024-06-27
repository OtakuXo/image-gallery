const User = require("../modules/user");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) throw Error("password or email is missing.");

  const user = await User.findOne({ email });
  if (!user) throw Error("user dosnt exixts.");
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) throw Error("invalid cradentials");
  const token = user.createJWT();
  res.status(200).json({
    name: user.name,
    token: token,
  });
};

module.exports = { register, login };
