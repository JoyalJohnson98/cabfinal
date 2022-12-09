const {Sequelize} = require('sequelize');

const sequelize = new Sequelize("cabworld","root","joyaljohnson",{
 host:"localhost",
 dialect:"mysql"
 
});

module.exports=sequelize ;