import * as Sequelize from "sequelize";
import * as data from "./config/config.json";

const username = data.development.username;
const password = data.development.password;
const db = data.development.database;

export const database = new Sequelize.Sequelize(db, username, password, {
    dialect: "mysql",
    port: 3306
})