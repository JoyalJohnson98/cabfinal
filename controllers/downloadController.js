const bookingdetail = require("../models/bookingdetail")
module.exports.payment = async(req, res, next) => {
    const result = await bookingdetail.findByPk(req.params.id);
    res.render('download',result);
}