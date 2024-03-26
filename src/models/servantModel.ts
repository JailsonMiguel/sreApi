import db from '../database';
import sequelize, { Model } from 'sequelize';
import { UserModel } from './userModel';
import { RegionalModel } from './regionalModel';
import { PositionModel } from './positionModel';

export class ServantModel extends Model {
  declare id?: number;
  declare positionId: number;
  declare userId: number;
  declare regionalId: number;
  declare functionalEmail: string;
  declare loadWorkload: string;
  declare officialAct: string;
  declare initialDate: Date;
  declare finalDate: Date;
  declare isActive: boolean;
}

ServantModel.init(
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
    userId: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
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
    functionalEmail: {
      type: sequelize.STRING,
      allowNull: true
    },
    loadWorkload: {
      type: sequelize.STRING,
      allowNull: false
    },
    officialAct: {
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
    tableName: 'servants'
  }
);

RegionalModel.hasOne(ServantModel, {
  as: 'servant',
  foreignKey: 'regionalId'
});

ServantModel.belongsTo(RegionalModel, {
  as: 'regional',
  foreignKey: 'regionalId'
});

UserModel.hasOne(ServantModel, {
  as: 'servant',
  foreignKey: 'userId'
});

ServantModel.belongsTo(UserModel, {
  as: 'user',
  foreignKey: 'userId'
});

PositionModel.hasOne(ServantModel, {
  as: 'servant',
  foreignKey: 'positionId'
});

ServantModel.belongsTo(PositionModel, {
  as: 'position',
  foreignKey: 'positionId'
});
