import db from '../database';
import sequelize, { Model } from 'sequelize';

export class UserModel extends Model {
  declare id?: number;
  declare name: string;
  declare cpf: string;
  declare dateBirth: Date;
  declare email: string;
  declare isActive: boolean;
}

UserModel.init(
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: sequelize.STRING,
      allowNull: false
    },
    cpf: {
      type: sequelize.STRING,
      allowNull: false,
      unique: true
    },
    dateBirth: {
      type: sequelize.DATE,
      allowNull: false
    },
    email: {
      type: sequelize.STRING,
      allowNull: false
    },
    isActive: {
      type: sequelize.BOOLEAN,
      defaultValue: true,
      allowNull: false
    },
    createdAt: {
      type: sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: sequelize.DATE,
      allowNull: false
    }
  },
  {
    sequelize: db,
    tableName: 'users'
  }
);
