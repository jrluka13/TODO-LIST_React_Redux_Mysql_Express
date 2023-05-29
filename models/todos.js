const Sequelize = require('sequelize');
const sequelize = require('../utils/mysqlConnection');

const todos = sequelize.define('todos', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    title: {
        type: Sequelize.STRING
    },
    isCompleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    dateCreate: {
        type: 'TIMESTAMP'
    },
    dateDelete: {
        type: 'TIMESTAMP'
    },
})

module.exports = todos;