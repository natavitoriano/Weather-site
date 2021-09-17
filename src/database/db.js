const { Sequelize } = require('sequelize');

//database, user, pass
const sequelize = new Sequelize('meteorology', 'postgres', '12345678',{
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;