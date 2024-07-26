// middleware/auth.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models');

function generateToken(user) {
  return jwt.sign({ id: user.id, role: user.role }, process.env.SECRET_KEY, { expiresIn: '1h' });
}

async function authenticateToken(req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Forbidden' });
    req.user = await User.findByPk(decoded.id);
    next();
  });
}

module.exports = { generateToken, authenticateToken };
