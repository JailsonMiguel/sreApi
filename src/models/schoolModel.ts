import db from '../database';
import sequelize, { Model } from 'sequelize';
import { InstituteModel } from './instituteModel';
import { RegionalModel } from './regionalModel';
import { ServantModel } from './servantModel';

export class SchoolModel extends Model {
  declare id?: number;
  declare instituteId: number;
  declare regionalId: number;
  declare schoolSupervisorId: number;
  declare inepCode: string;
  declare isActive: boolean;
}

SchoolModel.init(
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
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
    schoolSupervisorId: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'servants',
        key: 'id'
      }
    },
    inepCode: {
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

ServantModel.hasOne(SchoolModel, {
  as: 'school',
  foreignKey: 'schoolSupervisorId'
});

SchoolModel.belongsTo(ServantModel, {
  as: 'servant',
  foreignKey: 'schoolSupervisorId'
});
