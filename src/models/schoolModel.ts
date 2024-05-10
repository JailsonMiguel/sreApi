import db from '../database';
import sequelize, { Model } from 'sequelize';
import { InstituteModel } from './instituteModel';
import { RegionalModel } from './regionalModel';

export class SchoolModel extends Model {
  declare id?: number;
  declare instituteId: number;
  declare regionalId: number;
  declare schoolInep: string;
  declare isActive: boolean;
}

SchoolModel.init(
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
    regionalId: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'regionals',
        key: 'id'
      }
    },
    schoolInep: {
      type: sequelize.STRING,
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
    tableName: 'schools'
  }
);

InstituteModel.hasOne(SchoolModel, {
  as: 'school',
  foreignKey: 'instituteId'
});

SchoolModel.belongsTo(InstituteModel, {
  as: 'institute',
  foreignKey: 'instituteId'
});

RegionalModel.hasOne(SchoolModel, {
  as: 'school',
  foreignKey: 'regionalId'
});

SchoolModel.belongsTo(RegionalModel, {
  as: 'regional',
  foreignKey: 'regionalId'
});
