const userModel = require("./users.js");
const NODE_ENV = process.env.NODE_ENV;
const { Sequelize, DataTypes } = require("sequelize");
const DATABASE_URL = process.env.DATABASE_URL || "sqlite:memory:";

const sequelize = new Sequelize(process.env.DATABASE_URL);

const user = userModel(sequelize, DataTypes);

module.exports = {
    db: sequelize,
    user: user,
};
