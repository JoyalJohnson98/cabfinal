const express =require('express');
const cc = require('../controllers/paymentsuccessfulController');

const router = express.Router()


router.get('/paymentsuccessful', cc.payment);


module.exports = router;