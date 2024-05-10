import db from '../database';
import sequelize, { Model } from 'sequelize';
import { TeamModel } from './teamModel';

export class PositionModel extends Model {
  declare id?: number;
  declare teamId: number;
  declare subarea: string;
  declare parameter: string;
  declare code: string;
  declare name: string;
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
    teamId: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'teams',
        key: 'id'
      }
    },
    subarea: {
      type: sequelize.STRING,
      allowNull: true
    },
    parameter: {
      type: sequelize.STRING,
      allowNull: true
    },
    code: {
      type: sequelize.STRING,
      unique: true,
      allowNull: false
    },
    name: {
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
    tableName: 'positions'
  }
);

TeamModel.hasOne(PositionModel, {
  as: 'position',
  foreignKey: 'teamId'
});

PositionModel.belongsTo(TeamModel, {
  as: 'team',
  foreignKey: 'teamId'
});
