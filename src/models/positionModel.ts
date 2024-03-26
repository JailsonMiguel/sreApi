import db from '../database';
import sequelize, { Model } from 'sequelize';

export class PositionModel extends Model {
  declare id?: number;
  declare name: string;
  declare description: string;
  declare initialDate: Date;
  declare finalDate: Date;
  declare isActive: boolean;
}

PositionModel.init(
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
    description: {
      type: sequelize.STRING,
      allowNull: false
    },
    initialDate: {
      type: sequelize.DATE,
      allowNull: false
    },
    finalDate: {
      type: sequelize.DATE,
      allowNull: true
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
    tableName: 'positions'
  }
);
