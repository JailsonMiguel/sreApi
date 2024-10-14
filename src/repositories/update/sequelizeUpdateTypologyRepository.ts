import { IUpdateTypologyRepository } from '../../interfaces/repositories/update/IUpdateTypologyInterfaceRepository';
import { IUpdateTypologyInterface } from '../../interfaces/updates/IUpdateTypologyInterface';
import { TypologyModel } from '../../models/typologyModel';

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
