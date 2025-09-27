const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    email: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    first_name: { type: DataTypes.STRING, allowNull: true },
    last_name: { type: DataTypes.STRING, allowNull: true },
}, {
    tableName: 'users',
    timestamps: true,
});

module.exports = User;
