import {Model, DataType, Sequelize, DataTypes} from 'sequelize';
import {database} from '../database';

export class Providers extends Model {

    public id!: number;
    public email!: string;
    public phone!: number;
    public name!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}

Providers.init({
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
    email: {
        type: DataTypes.STRING,
        allowNull: false

    },
    phone: {
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
    tableName: 'providers',
    sequelize: database // esto es la parte mas importante,conecta a la base de datos
    


});
