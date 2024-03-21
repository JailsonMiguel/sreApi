import db from '../database';
import sequelize, { Model } from 'sequelize';
import { PositionModel } from './positionModel';
import { RegionalModel } from './regionalModel';

export class TypologyModel extends Model {
  declare id?: number;
  declare positionId: number;
  declare regionalId: number;
  declare authorized: number;
  declare legalSupport: string;
  declare isActive: boolean;
}

TypologyModel.init(
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
    regionalId: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'institutes',
        key: 'id'
      }
    },
    authorized: {
      type: sequelize.INTEGER,
      allowNull: false
    },
    legalSupport: {
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
    tableName: 'typologies'
  }
);

RegionalModel.hasOne(TypologyModel, {
  as: 'typology',
  foreignKey: 'regionalId'
});

TypologyModel.belongsTo(RegionalModel, {
  as: 'regional',
  foreignKey: 'regionalId'
});

PositionModel.hasOne(TypologyModel, {
  as: 'typology',
  foreignKey: 'positionId'
});

TypologyModel.belongsTo(PositionModel, {
  as: 'position',
  foreignKey: 'positionId'
});
