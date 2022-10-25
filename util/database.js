const  Sequelize  = require('sequelize')
const sequelize = new Sequelize('ex','root', 'Siddiqui@615',{
    dialect : 'mysql',
    host:'localhost'
});

module.exports = sequelize;