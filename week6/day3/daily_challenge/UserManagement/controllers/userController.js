const bcrypt = require('bcrypt');
const { sequelize } = require('../config/database');
const User = require('../models/user.js');
const HashPwd = require('../models/hashpwd.js');

// GET all users
const getUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
};

// GET user by ID
const getUser = async (req, res) => {
    const id = req.params.id;
    const user = await User.findByPk(id);
    res.json(user || { message: 'User not found' });
};

// REGISTER user
const registerUser = async (req, res) => {
    const { email, username, password, first_name, last_name } = req.body;
    try {
        await sequelize.transaction(async (t) => {
            const user = await User.create({ email, username, first_name, last_name }, { transaction: t });
            const hashed = await bcrypt.hash(password, 10);
            await HashPwd.create({ username, password: hashed }, { transaction: t });
        });
        res.json({ message: 'User registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Registration failed' });
    }
};

// LOGIN user
const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await HashPwd.findOne({ where: { username } });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Invalid password' });

    res.json({ message: 'Login successful' });
};

// UPDATE user
const updateUser = async (req, res) => {
    const id = req.params.id;
    const { email, username, first_name, last_name, password } = req.body;

    try {
        await sequelize.transaction(async (t) => {
            await User.update({ email, username, first_name, last_name }, { where: { id }, transaction: t });

            if (password) {
                const hashed = await bcrypt.hash(password, 10);
                await HashPwd.update({ password: hashed }, { where: { username }, transaction: t });
            }
        });
        res.json({ message: 'User updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Update failed' });
    }
};

module.exports = { getUsers, getUser, registerUser, loginUser, updateUser };
