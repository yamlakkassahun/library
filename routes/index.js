const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    // res.send('yamlak kassahun');
    res.render('index');
});

module.exports = router;