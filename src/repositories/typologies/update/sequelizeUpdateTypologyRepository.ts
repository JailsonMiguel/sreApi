import { IUpdateTypologyInterface } from '../../../interfaces/updatesInterfaces/IUpdateTypologyInterface';
import { TypologyModel } from '../../../models/typologyModel';
import { IUpdateTypologyRepository } from './IUpdateTypologyInterfaceRepository';

export class SequelizeUpdateTypologyRepository
  implements IUpdateTypologyRepository
{
  async updateTypology(
    typologyData: IUpdateTypologyInterface,
    id: string | number
  ): Promise<boolean> {
    const updated = await TypologyModel.update(
      {
        ...typologyData
      },
      {
        where: {
          id
        }
      }
    );
    if (updated[0] > 0) {
      return true;
    } else {
      return false;
    }
  }
}
