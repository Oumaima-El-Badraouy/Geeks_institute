const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database.js');

const Book = sequelize.define('book', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    publishedYear: {
        type: DataTypes.DATE,  
        allowNull: false,
    },
}, {
    tableName: 'books', 
});

module.exports = Book;
