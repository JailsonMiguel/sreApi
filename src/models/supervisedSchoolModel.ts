import db from '../database';
import sequelize, { Model } from 'sequelize';
import { InstituteModel } from './instituteModel';
import { OccupationModel } from './occupationModel';

export class SupervisedSchoolModel extends Model {
  declare id?: number;
  declare occupationId: number;
  declare instituteId: number;
  declare initialDate: Date;
  declare finalDate: Date;
  declare isActive: boolean;
}

SupervisedSchoolModel.init(
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    occupationId: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'occupations',
        key: 'id'
      }
    },
    instituteId: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'institutes',
        key: 'id'
      }
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
    tableName: 'supervisedSchools'
  }
);

InstituteModel.hasOne(SupervisedSchoolModel, {
  as: 'supervisedSchool',
  foreignKey: 'instituteId'
});

SupervisedSchoolModel.belongsTo(InstituteModel, {
  as: 'institute',
  foreignKey: 'instituteId'
});

OccupationModel.hasOne(SupervisedSchoolModel, {
  as: 'supervisedSchool',
  foreignKey: 'occupationId'
});

SupervisedSchoolModel.belongsTo(OccupationModel, {
  as: 'occupation',
  foreignKey: 'occupationId'
});
