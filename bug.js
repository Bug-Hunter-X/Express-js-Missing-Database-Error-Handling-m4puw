const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid user IDs
  db.getUser(userId, (err, user) => {
    if (err) {
      // Error handling is missing here
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(user);
    }
  });
});
