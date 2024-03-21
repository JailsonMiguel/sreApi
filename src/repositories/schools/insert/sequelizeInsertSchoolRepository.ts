import { ISchoolProps } from '../../../interfaces/props/ISchoolProps';
import { SchoolModel } from '../../../models/schoolModel';
import { IInsertSchoolRepository } from './IInsertSchoolRepository';

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
