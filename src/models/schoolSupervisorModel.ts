import db from '../database';
import sequelize, { Model } from 'sequelize';
import { ServantModel } from './servantModel';
import { SchoolModel } from './schoolModel';

export class SchoolSupervisorModel extends Model {
  declare id?: number;
  declare schoolId: number;
  declare schoolSupervisorId: number;
  declare initialDate: Date;
  declare finalDate: Date;
  declare isActive: boolean;
}

SchoolSupervisorModel.init(
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    schoolId: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'schools',
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
    tableName: 'schoolSupervisors'
  }
);

SchoolModel.hasOne(SchoolSupervisorModel, {
  as: 'schoolSupervisor',
  foreignKey: 'schoolId'
});

SchoolSupervisorModel.belongsTo(SchoolModel, {
  as: 'school',
  foreignKey: 'schoolId'
});

ServantModel.hasOne(SchoolSupervisorModel, {
  as: 'schoolSupervisor',
  foreignKey: 'schoolSupervisorId'
});

SchoolSupervisorModel.belongsTo(ServantModel, {
  as: 'servant',
  foreignKey: 'schoolSupervisorId'
});
