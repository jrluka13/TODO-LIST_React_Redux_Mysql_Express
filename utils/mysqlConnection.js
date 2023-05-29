const Sequelize = require('sequelize');
const {host, database, password, user, dialect} = require('../keys/keys')

const sequelize = new Sequelize(database, user, password, {
    dialect,
    host,
    define: {
        timestamps: false
    }
});

module.exports = sequelize;