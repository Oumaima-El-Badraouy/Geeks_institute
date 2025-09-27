const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const HashPwd = sequelize.define('hashpwd', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
}, {
    tableName: 'hashpwds',
    timestamps: true,
});

module.exports = HashPwd;
