import { ISchoolSupervisorProps } from "../../../interfaces/props/ISchoolSupervisorProps";
import { SchoolSupervisorModel } from "../../../models/schoolSupervisorModel";
import { IInsertSchoolSupervisorRepository } from "./IInsertSchoolSupervisorRepository";

export class SequelizeInsertSchoolSupervisorRepository
  implements IInsertSchoolSupervisorRepository
{
  async createSchoolSupervisor(newSchoolSupervisor: ISchoolSupervisorProps): Promise<ISchoolSupervisorProps> {
    const createdSchoolSupervisor = await SchoolSupervisorModel.create({
      ...newSchoolSupervisor,
      active: true
    });
    return createdSchoolSupervisor;
  }
}
