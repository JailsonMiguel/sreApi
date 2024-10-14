import { IInstituteProps } from '../../interfaces/props/IInstituteProps';
import { IInsertInstituteRepository } from '../../interfaces/repositories/create/IInsertInstituteRepository';
import { InstituteModel } from '../../models/instituteModel';

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
