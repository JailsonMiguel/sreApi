import { ISchoolProps } from '../../interfaces/props/ISchoolProps';
import { IInsertSchoolRepository } from '../../interfaces/repositories/create/IInsertSchoolRepository';
import { SchoolModel } from '../../models/schoolModel';

export class SequelizeInsertSchoolRepository
  implements IInsertSchoolRepository
{
  async createSchool(newSchool: ISchoolProps): Promise<ISchoolProps> {
    const createdSchool = await SchoolModel.create({
      ...newSchool,
      active: true
    });
    return createdSchool;
  }
}
