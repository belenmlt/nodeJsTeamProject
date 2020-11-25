import {Model, DataType, Sequelize, DataTypes} from 'sequelize';
import {database} from '../database';
import { Providers } from './providers.models';

export class Products extends Model {

    public id!: number;
    public name!: string;
    public descrition!: string;
    public providersId!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date; 

}

Products.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false

    },
    description: {
        type: DataTypes.STRING,
        allowNull: false

    },
    providersId: {
        type: DataTypes.INTEGER,
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
    tableName: 'products',
    sequelize: database // esto es la parte mas importante,conecta a la base de datos
    


});

Products.belongsTo(Providers, {foreignKey: "providersId"});
Providers.hasMany(Products);