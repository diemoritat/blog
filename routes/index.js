const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController')

// Do work here
router.get('/', (req, res) => {
  res.send('Hey! It works!');
});

router.get('/posts', catchErrors(postController.getPosts));

module.exports = router;
