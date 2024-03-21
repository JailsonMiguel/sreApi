import { IInstituteProps } from '../../../interfaces/props/IInstituteProps';
import { InstituteModel } from '../../../models/instituteModel';
import { IInsertInstituteRepository } from './IInsertInstituteRepository';

export class SequelizeInsertInstituteRepository
  implements IInsertInstituteRepository
{
  async create(institute: IInstituteProps): Promise<IInstituteProps> {
    const createdInstitute = await InstituteModel.create({
      ...institute,
      active: true
    });
    return createdInstitute;
  }
}
