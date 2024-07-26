// routes/sessions.js
const express = require('express');
const { authenticateToken } = require('../middleware/auth');
const { Session } = require('../models');
const router = express.Router();

// Get current session details
router.get('/', authenticateToken, async (req, res) => {
  try {
    const session = await Session.findAll({
      where: { userId: req.user.id },
    });
    res.json(session);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Log out (delete session)
router.delete('/:id', authenticateToken, async (req, res) => {
    try {
      const session = await Session.findOne({ where: { id: req.params.id, userId: req.user.id } });
      if (!session) {
        return res.status(404).json({ message: 'Session not found' });
      }
      await session.destroy();
      res.json({ message: 'Logged out successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
module.exports = router;
