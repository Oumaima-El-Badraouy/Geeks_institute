const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('userManagement', 'postgres', '0000', {
    host: 'localhost',
    dialect: 'postgres',
});
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("✅ Connected to PostgreSQL successfully");
    } catch (error) {
        console.error("❌ Unable to connect:", error);
    }
};

module.exports = { sequelize, connectDB };
