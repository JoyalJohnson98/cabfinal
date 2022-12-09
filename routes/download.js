const express =require('express');
const cc = require('../controllers/downloadController');

const router = express.Router()


router.get('/download/:id', cc.payment);


module.exports = router;