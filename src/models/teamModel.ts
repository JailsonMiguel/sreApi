import db from '../database';
import sequelize, { Model } from 'sequelize';
import { ConsultantModel } from './consultantModel';

export class TeamModel extends Model {
  declare id?: number;
  declare consultantId: number;
  declare description: string;
  declare isActive: boolean;
}

TeamModel.init(
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    consultantId: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'consultants',
        key: 'id'
      }
    },
    description: {
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
    tableName: 'teams'
  }
);

ConsultantModel.hasOne(TeamModel, {
  as: 'team',
  foreignKey: 'consultantId'
});
TeamModel.belongsTo(ConsultantModel, {
  as: 'consultant',
  foreignKey: 'consultantId'
});
