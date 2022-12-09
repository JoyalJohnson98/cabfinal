const BookingDetail = require('../models/bookingdetail')

module.exports.payment =  async(req, res, next) => {
    const result = await BookingDetail.findByPk(req.params.id)
    console.log(result);
    res.render('paynow',result);
}