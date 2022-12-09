const express = require('express');
const parser = require('body-parser');

const homeRoute = require('./routes/home');

const paymentRoute = require('./routes/payment');
const paynowRoute = require('./routes/paynow');
const downloadRoute = require('./routes/download')
const paymentsuccessfulRoute = require('./routes/paymentsuccessful');

const signupRoute = require('./routes/signup');
const signinRoute = require('./routes/Usersignin');

const bookRoute = require('./routes/book');

const driverRoute = require('./routes/driver');
const driverlogin = require('./routes/driverlogin');

const CabDetail = require('./routes/CabDetail');

const AdminSignup = require('./routes/admin');
const AdminLogin = require('./routes/adminlogin');
const auth = require('./middlewares/authenticationMiddleware');
const cookieSession = require('cookie-session');
const { engine } = require('express-handlebars');
const path = require('path');



// Creating an express app.
const app = express();

// Configuring the express app to use handlebars template engine.
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Configuring body parser.
app.use("/", parser.urlencoded({extended: true}));

// Configuring static files middleware.
app.use("/static", express.static(path.join(__dirname, 'static')));

app.use(cookieSession({
    name: 'session',
    httpOnly: true,
    keys: ["asdghjhgsdahjsgdhjasd"],
    maxAge:  24 * 60 * 60 * 1000
}));

app.use(auth.auth);

app.use(homeRoute);

app.use(paymentRoute);
app.use(paynowRoute);
app.use(downloadRoute);

app.use(paymentsuccessfulRoute)

app.use(signupRoute);
app.use(signinRoute);

app.use(bookRoute);

app.use(driverRoute);
app.use(driverlogin);

app.use(CabDetail);

app.use(AdminSignup);
app.use(AdminLogin);

app.listen(80);