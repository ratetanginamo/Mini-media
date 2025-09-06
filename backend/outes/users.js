const express = require('express');
const User = require('../models/user');

const router = express.Router();

// Get user profile
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user profile
router.put('/:id', async (req, res) => {
  try {
    const { username, bio } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { username, bio }, { new: true });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Follow user
router.post('/:id/follow', async (req, res) => {
  try {
    const { userId } = req.body;
    const userToFollow = await User.findById(req.params.id);
    const currentUser  = await User.findById(userId);

    if (!userToFollow.followers.includes(userId)) {
      userToFollow.followers.push(userId);
      currentUser .following.push(req.params.id);
    } else {
      userToFollow.followers = userToFollow.followers.filter(id => id.toString() !== userId);
      currentUser .following = currentUser .following.filter(id => id.toString() !== req.params.id);
    }

    await userToFollow.save();
    await currentUser .save();
    res.json({ message: 'Follow toggled' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
