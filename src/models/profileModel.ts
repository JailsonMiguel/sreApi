import db from '../database';
import sequelize, { Model } from 'sequelize';

export class ProfileModel extends Model {
  declare id?: number;
  declare name: string;
  declare code: string;
  declare isActive: boolean;
}

ProfileModel.init(
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
    code: {
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
    tableName: 'profiles'
  }
);
