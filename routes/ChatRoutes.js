const express = require('express');
const router = express.Router();



// router.post("/Home", Home);
router.get('/', (req, res) => {
    res.send('Server is up and running');
});

module.exports = router;