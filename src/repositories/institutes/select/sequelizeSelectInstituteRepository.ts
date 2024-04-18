import { IInstituteProps } from '../../../interfaces/props/IInstituteProps';
import { InstituteModel } from '../../../models/instituteModel';
import { ISelectInstituteRepository } from './ISelectInstituteInterface';

export class SequelizeSelectInstituteRepository
  implements ISelectInstituteRepository
{
  async getAllInstitutes(): Promise<IInstituteProps[]> {
    const allInstitutes = await InstituteModel.findAll({
      order: [
        ['isActive','DESC'],
        ['name','ASC']
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
