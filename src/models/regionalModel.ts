import db from '../database';
import sequelize, { Model } from 'sequelize';
import { InstituteModel } from './instituteModel';

export class RegionalModel extends Model {
  declare id?: number;
  declare instituteId: number;
  declare isActive: boolean;
}

RegionalModel.init(
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    instituteId: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'institutes',
        key: 'id'
      }
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
    tableName: 'regionals'
  }
);

InstituteModel.hasOne(RegionalModel, {
  as: 'regional',
  foreignKey: 'instituteId'
});

RegionalModel.belongsTo(InstituteModel, {
  as: 'institute',
  foreignKey: 'instituteId'
});
