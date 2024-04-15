import { IConsultantProps } from "../../../interfaces/props/IConsultantProps";
import { ConsultantModel } from "../../../models/consultantModel";
import { ISelectConsultantRepository } from "./ISelectConsultantInterface"

export class SequelizeSelectConsultantRepository
  implements ISelectConsultantRepository
{
  async getAllConsultants(): Promise<IConsultantProps[]> {
    const allConsultants = await ConsultantModel.findAll();
    return allConsultants;
  }

  async verifyIfAlredyByDescription(consultant: IConsultantProps): Promise<boolean> {
    const existsConsultant = await ConsultantModel.findOne({
      where: {
        description: consultant.description
      }
    });
    if (existsConsultant) {
      return true;
    } else {
      return false;
    }
  }
}
