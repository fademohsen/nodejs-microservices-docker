const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = User;
