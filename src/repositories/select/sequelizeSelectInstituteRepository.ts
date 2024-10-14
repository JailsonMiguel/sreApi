import { IInstituteProps } from '../../interfaces/props/IInstituteProps';
import { ISelectInstituteRepository } from '../../interfaces/repositories/select/ISelectInstituteInterface';
import { InstituteModel } from '../../models/instituteModel';

export class SequelizeSelectInstituteRepository
  implements ISelectInstituteRepository
{
  async getAllInstitutes(): Promise<IInstituteProps[]> {
    const allInstitutes = await InstituteModel.findAll({
      order: [
        ['isActive', 'DESC'],
        ['name', 'ASC']
      ]
    });
    return allInstitutes;
  }

  async verifyIfAlredyByName(institute: IInstituteProps): Promise<boolean> {
    const existsInstitute = await InstituteModel.findOne({
      where: {
        name: institute.name
      }
    });
    if (existsInstitute) {
      return true;
    } else {
      return false;
    }
  }
}
