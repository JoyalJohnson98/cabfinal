const {Sequelize} = require('sequelize');

const sequelize = new Sequelize("cabfinal","root","joyaljohnson",{
 host:"localhost",
 dialect:"mysql"
 
});

module.exports=sequelize ;