const express = require('express');
const router = express.Router();
const index = require("../controllers/index")


router.get('/test', index.test);

module.exports = router;
