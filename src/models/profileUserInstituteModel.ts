import db from '../database';
import sequelize, { Model } from 'sequelize';
import { InstituteModel } from './instituteModel';
import { UserModel } from './userModel';
import { ProfileModel } from './profileModel';

export class ProfileUserInstituteModel extends Model {
  declare id?: number;
  declare profileId: number;
  declare instituteId: number;
  declare userId: number;
  declare initialDate: Date;
  declare finalDate: Date;
  declare isActive: boolean;
}

ProfileUserInstituteModel.init(
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    profileId: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'profiles',
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
    userId: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
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
    tableName: 'profilesUsersInstitutes'
  }
);

InstituteModel.hasOne(ProfileUserInstituteModel, {
  as: 'profileUserInstitute',
  foreignKey: 'instituteId'
});

ProfileUserInstituteModel.belongsTo(InstituteModel, {
  as: 'institute',
  foreignKey: 'instituteId'
});

UserModel.hasOne(ProfileUserInstituteModel, {
  as: 'profileUserInstitute',
  foreignKey: 'userId'
});

ProfileUserInstituteModel.belongsTo(UserModel, {
  as: 'user',
  foreignKey: 'userId'
});

ProfileModel.hasOne(ProfileUserInstituteModel, {
  as: 'profileUserInstitute',
  foreignKey: 'profileId'
});

ProfileUserInstituteModel.belongsTo(ProfileModel, {
  as: 'profile',
  foreignKey: 'profileId'
});
