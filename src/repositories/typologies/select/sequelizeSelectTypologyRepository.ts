import { ITypologyProps } from '../../../interfaces/props/ITypologyProps';
import { TypologyModel } from '../../../models/tipologyModel';
import { ISelectTypologyRepository } from './ISelectTypologyInterface';

export class SequelizeSelectTypologyRepository
  implements ISelectTypologyRepository
{
  async getAllActiveByRegional(regionalId: number) {
    const allTypologies = await TypologyModel.findAll({
      where: {
        regionalId: regionalId,
        isActive: true
      }
    });
    return allTypologies;
  }

  async getAllTypologies(): Promise<ITypologyProps[]> {
    const allTypologies = await TypologyModel.findAll();
    return allTypologies;
  }

  async verifyIfAlredyActiveByPositionAndRegional(
    typology: ITypologyProps
  ): Promise<boolean> {
    const existsTypology = await TypologyModel.findOne({
      where: {
        regionalId: typology.regionalId,
        positionId: typology.positionId,
        isActive: true
      }
    });
    if (existsTypology) {
      return true;
    } else {
      return false;
    }
  }
}
