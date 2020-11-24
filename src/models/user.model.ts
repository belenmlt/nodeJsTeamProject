import { Model, Sequelize, DataTypes } from "sequelize";
import { database } from "../database";

export class Users extends Model {
    public id!: number;
    // ! después de la propiedad de una clase, evitamos inicializarlas dándole un valor y crear el constructor.
    public name!: string;
    public familyName!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Users.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    familyName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
},{
    tableName: 'users',
    sequelize: database // si no la conectamos a neustro mysql da error everywhere.

})