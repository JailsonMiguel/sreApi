import { ISupervisedSchoolProps } from '../../../interfaces/props/ISupervisedSchoolProps';
import { SupervisedSchoolModel } from '../../../models/supervisedSchoolModel';
import { IInsertSupervisedSchoolRepository } from './IInsertSupervisedSchoolRepository';

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
