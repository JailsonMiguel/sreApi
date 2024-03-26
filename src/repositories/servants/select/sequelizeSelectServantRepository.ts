import { Model } from 'sequelize';
import { IServantProps } from '../../../interfaces/props/IServantProps';
import { PositionModel } from '../../../models/positionModel';
import { ServantModel } from '../../../models/servantModel';
import { UserModel } from '../../../models/userModel';
import { ISelectServantRepository } from './ISelectServantInterface';
import { RegionalModel } from '../../../models/regionalModel';
import { InstituteModel } from '../../../models/instituteModel';

export class SequelizeSelectServantRepository
  implements ISelectServantRepository
{
  async getAllActiveByPosition(positionId: number): Promise<IServantProps[]> {
    const allServants = await ServantModel.findAll({
      where: {
        positionId: positionId,
        isActive: true
      }
    });
    return allServants;
  }

  async getAllActiveByRegional(regionalId: number): Promise<IServantProps[]> {
    const allServants = await ServantModel.findAll({
      where: {
        regionalId: regionalId,
        isActive: true
      }
    });
    return allServants;
  }

  async getAllServantActive(): Promise<IServantProps[]> {
    const allServants = await ServantModel.findAll({
      where: {
        isActive: true
      }
    });
    return allServants;
  }

  async getAllActiveByPositionAndRegional(
    positionId: number,
    regionalId: number
  ): Promise<IServantProps[]> {
    const allServants = await ServantModel.findAll({
      where: {
        positionId: positionId,
        regionalId: regionalId,
        isActive: true
      }
    });
    return allServants;
  }

  async getAllServant(): Promise<IServantProps[]> {
    const allServants = await ServantModel.findAll({
      include: [
        {
          model: PositionModel,
          as: 'position'
        },
        {
          model: UserModel,
          as: 'user'
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
    return allServants;
  }

  async verifyIfAlredyByUserRegional(servant: IServantProps): Promise<boolean> {
    const existsServant = await ServantModel.findOne({
      where: {
        userId: servant.userId,
        regionalId: servant.regionalId
      }
    });
    if (existsServant) {
      return true;
    } else {
      return false;
    }
  }
}
