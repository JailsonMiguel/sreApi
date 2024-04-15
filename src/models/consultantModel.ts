import db from '../database';
import sequelize, { Model } from 'sequelize';

export class ConsultantModel extends Model {
  declare id?: number;
  declare description: string;
  declare isActive: boolean;
}

ConsultantModel.init(
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    description: {
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
    tableName: 'consultants'
  }
);
