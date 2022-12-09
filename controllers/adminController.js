
const Cab = require('../models/admindetail');
// --------------------------------------------------
module.exports.welcomeindex = (req, res, next) => {
    Cab.findAll().then(admin => {
        res.render('welcome', {
            data: admin,
            identity: req.identity.admin
        });
    })
}


// To get the login page
module.exports.index = (req, res, next) => {
    Cab.findAll().then(admin => {
        res.render('admin-index', {
            data: admin,
            identity: req.identity.admin
        });
    })
}

//To get the admin post Page
module.exports.create = (req, res, next) => {
    res.render('admin-create');
}
//To post details into the admin register page and after posting, it will be redirected to admin login  and type the required email and password.
module.exports.createPost = (req, res, next) => {

    Cab.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        dob: req.body.dob,
        mobile: req.body.mobile,
        email: req.body.email,
        Password: req.body.Password

    })
        .then(adminFromDb => {
            res.redirect("/alogin")
        })

}
//To get the update page 
module.exports.update = async (req, res, next) => {
    Cab.findByPk(req.params.id)
        .then(adminFromDB => {
            res.render('admin-update', {
                data: adminFromDB
            });
        });

}
module.exports.updatePost = async (req, res, next) => {

    await Cab.update(
        {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            dob: req.body.dob,
            mobile: req.body.mobile,
            email: req.body.email,
            Password: req.body.Password

        },
        {
            where: { id: req.params.id }
        }
    )
    res.redirect("/admindetail");

}

module.exports.delete = async (req, res, next) => {
    let id = req.params.id;
    let adminFromDb = await Cab.findByPk(id);
    if (adminFromDb != null) {
        await Cab.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/admindetail");
    }
}
