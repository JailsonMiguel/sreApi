import { ISuperintendentProps } from '../../../interfaces/props/ISuperintendentProps';
import { InstituteModel } from '../../../models/instituteModel';
import { RegionalModel } from '../../../models/regionalModel';
import { ServantModel } from '../../../models/servantModel';
import { SuperintendentModel } from '../../../models/superintendentModel';
import { UserModel } from '../../../models/userModel';
import { ISelectSuperintendentRepository } from './ISelectSuperintendentInterface';

export class SequelizeSelectSuperintendentRepository
  implements ISelectSuperintendentRepository
{
  async getAllSuperintendents(): Promise<ISuperintendentProps[]> {
    const allSuperintendents = await SuperintendentModel.findAll({
      include: [
        {
          model: ServantModel,
          as: 'servant',
          include: [
            {
              model: UserModel,
              as: 'user'
            }
          ]
        },
        {
          model: RegionalModel,
          as: 'regional',
          include: [
            {
              model: InstituteModel,
              as: 'institute'
            }
          ]
        }
      ],
      order: [
        ['isActive', 'DESC'],
        ['initialDate', 'ASC']
      ]
    });
    return allSuperintendents;
  }

  async getAllSuperintendentByRegional(
    regionalId: number
  ): Promise<ISuperintendentProps[]> {
    const allSuperintendents = await SuperintendentModel.findAll({
      where: {
        regionalId: regionalId
      },
      include: [
        {
          model: ServantModel,
          as: 'servant',
          include: [
            {
              model: UserModel,
              as: 'user'
            }
          ]
        },
        {
          model: RegionalModel,
          as: 'regional',
          include: [
            {
              model: InstituteModel,
              as: 'institute'
            }
          ]
        }
      ]
    });
    return allSuperintendents;
  }

  async verifyIfAlredyByRegional(
    superintendent: ISuperintendentProps
  ): Promise<boolean> {
    const existsSuperintendent = await SuperintendentModel.findOne({
      where: {
        regionalId: superintendent.regionalId
      }
    });
    if (existsSuperintendent) {
      return true;
    } else {
      return false;
    }
  }
}
