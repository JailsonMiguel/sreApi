import db from '../database';
import sequelize, { Model } from 'sequelize';
import { InstituteModel } from './instituteModel';
import { PositionModel } from './positionModel';
import { ServantModel } from './servantModel';

export class OccupationModel extends Model {
  declare id?: number;
  declare positionId: number;
  declare instituteId: number;
  declare servantId: number;
  declare functionEmail: string;
  declare loadWorkload: number;
  declare offcialAct: string;
  declare initialDate: Date;
  declare finalDate: Date;
  declare isActive: boolean;
}

OccupationModel.init(
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    positionId: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'positions',
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
    servantId: {
      type: sequelize.STRING,
      allowNull: false,
      references: {
        model: 'servants',
        key: 'cpf'
      }
    },
    functionEmail: {
      type: sequelize.STRING,
      allowNull: true
    },
    loadWorkload: {
      type: sequelize.INTEGER,
      allowNull: false
    },
    offcialAct: {
      type: sequelize.STRING,
      allowNull: true
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
    tableName: 'occupations'
  }
);

InstituteModel.hasOne(OccupationModel, {
  as: 'occupation',
  foreignKey: 'instituteId'
});

OccupationModel.belongsTo(InstituteModel, {
  as: 'institute',
  foreignKey: 'instituteId'
});

PositionModel.hasOne(OccupationModel, {
  as: 'occupation',
  foreignKey: 'positionId'
});

OccupationModel.belongsTo(PositionModel, {
  as: 'position',
  foreignKey: 'positionId'
});
ServantModel.hasOne(OccupationModel, {
  as: 'occupation',
  foreignKey: 'servantId'
});

OccupationModel.belongsTo(ServantModel, {
  as: 'servant',
  foreignKey: 'servantId'
});
