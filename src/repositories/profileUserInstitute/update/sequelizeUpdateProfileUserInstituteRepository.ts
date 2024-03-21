import { IUpdateProfileUserInstituteInterface } from "../../../interfaces/updatesInterfaces/IUpdateProfileUserInstituteInterface";
import { ProfileUserInstituteModel } from "../../../models/profileUserInstituteModel";
import { IUpdateProfileUserInstituteRepository } from "./IUpdateProfileUserInstituteInterfaceRepository";

export class SequelizeUpdateProfileUserInstituteRepository
  implements IUpdateProfileUserInstituteRepository
{
  async updateProfileUserInstitute(
    profileUserInstituteData: IUpdateProfileUserInstituteInterface,
    id: string | number
  ): Promise<boolean> {
    const updated = await ProfileUserInstituteModel.update(
      {
        ...profileUserInstituteData
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
