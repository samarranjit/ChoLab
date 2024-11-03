const User = require("../models/User");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Register a new admin (use this only to create the first admin)
exports.registerAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.create({ username, password, role: "admin" });
    res.status(201).json({ message: "Admin registered", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login an admin
exports.loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (user && (await user.matchPassword(password))) {
      const token = generateToken(user._id);
      res.json({ token, message: "Logged in successfully" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
