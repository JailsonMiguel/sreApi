import { IUpdateServantInterface } from "../../../interfaces/updatesInterfaces/IUpdateServantInterface";
import { ServantModel } from "../../../models/servantModel";
import { IUpdateServantRepository } from "./IUpdateServantInterfaceRepository";

export class SequelizeUpdateServantRepository
  implements IUpdateServantRepository
{
  async updateServant(
    servantData: IUpdateServantInterface,
    id: string | number
  ): Promise<boolean> {
    const updated = await ServantModel.update(
      {
        ...servantData 
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
