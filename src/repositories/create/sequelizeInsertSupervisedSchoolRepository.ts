import { ISupervisedSchoolProps } from '../../interfaces/props/ISupervisedSchoolProps';
import { IInsertSupervisedSchoolRepository } from '../../interfaces/repositories/create/IInsertSupervisedSchoolRepository';
import { SupervisedSchoolModel } from '../../models/supervisedSchoolModel';

export class SequelizeInsertSupervisedSchoolRepository
  implements IInsertSupervisedSchoolRepository
{
  async createSupervisedSchool(
    newSupervisedSchool: ISupervisedSchoolProps
  ): Promise<ISupervisedSchoolProps> {
    const createdSupervisedSchool = await SupervisedSchoolModel.create({
      ...newSupervisedSchool,
      active: true
    });
    return createdSupervisedSchool;
  }
}
