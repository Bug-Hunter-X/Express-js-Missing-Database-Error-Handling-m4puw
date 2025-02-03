const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  try {
    db.getUser(userId, (err, user) => {
      if (err) {
        console.error('Error fetching user:', err);
        res.status(500).send('Failed to fetch user');
      } else if (user) {
        res.json(user);
      } else {
        res.status(404).send('User not found');
      }
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).send('Internal Server Error');
  }
});
