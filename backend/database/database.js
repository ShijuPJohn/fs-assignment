const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db_file.sqlite'
});

module.exports = sequelize;