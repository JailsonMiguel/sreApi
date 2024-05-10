import db from '../database';
import sequelize, { Model } from 'sequelize';

export class ServantModel extends Model {
  declare cpf?: string;
  declare name: string;
  declare email: string;
  declare dateBirth: Date;
  declare functionalNumber: number;
  declare isActive: boolean;
}

ServantModel.init(
  {
    cpf: {
      type: sequelize.STRING,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: sequelize.STRING,
      allowNull: false
    },
    email: {
      type: sequelize.STRING,
      allowNull: false
    },
    dateBirth: {
      type: sequelize.DATE,
      allowNull: false
    },
    functionalNumber: {
      type: sequelize.INTEGER,
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
