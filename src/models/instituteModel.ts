import db from '../database';
import sequelize, { Model } from 'sequelize';

export class InstituteModel extends Model {
  declare id?: number;
  declare name: string;
  declare address: string;
  declare ibgeCityCode: number;
  declare type: number;
  declare isActive: boolean;
}

InstituteModel.init(
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: sequelize.STRING,
      allowNull: false
    },
    address: {
      type: sequelize.STRING,
      allowNull: true,
    },
    ibgeCityCode: {
      type: sequelize.BIGINT,
      allowNull: true,
    },
    type: {
      type: sequelize.INTEGER,
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
    tableName: 'institutes'
  }
);
