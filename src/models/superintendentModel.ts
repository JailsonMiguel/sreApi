import db from '../database';
import sequelize, { Model } from 'sequelize';
import { RegionalModel } from './regionalModel';
import { ServantModel } from './servantModel';

export class SuperintendentModel extends Model {
  declare id?: number;
  declare regionalId: number;
  declare servantId: number;
  declare initialDate: Date;
  declare finalDate: Date;
  declare isActive: boolean;
}

SuperintendentModel.init(
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    regionalId: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'regionals',
        key: 'id'
      }
    },
    servantId: {
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
    tableName: 'superintendents'
  }
);

RegionalModel.hasOne(SuperintendentModel, {
  as: 'superintendent',
  foreignKey: 'regionalId'
});

SuperintendentModel.belongsTo(RegionalModel, {
  as: 'regional',
  foreignKey: 'regionalId'
});

ServantModel.hasOne(SuperintendentModel, {
  as: 'superintendent',
  foreignKey: 'servantId'
});

SuperintendentModel.belongsTo(ServantModel, {
  as: 'servant',
  foreignKey: 'servantId'
});
