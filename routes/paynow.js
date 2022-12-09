const express =require('express');
const cc = require('../controllers/paynowController');

const router = express.Router()


router.get('/paynow/:id', cc.payment);


module.exports = router;