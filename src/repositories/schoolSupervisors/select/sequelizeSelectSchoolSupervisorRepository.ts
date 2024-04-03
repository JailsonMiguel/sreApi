import { Regional } from '../../../entities/regional';
import { ISchoolSupervisorProps } from '../../../interfaces/props/ISchoolSupervisorProps';
import { InstituteModel } from '../../../models/instituteModel';
import { RegionalModel } from '../../../models/regionalModel';
import { SchoolSupervisorModel } from '../../../models/schoolSupervisorModel';
import { ServantModel } from '../../../models/servantModel';
import { UserModel } from '../../../models/userModel';
import { ISelectSchoolSupervisorRepository } from './ISelectSchoolSupervisorInterface';

export class SequelizeSelectSchoolSupervisorRepository
  implements ISelectSchoolSupervisorRepository
{
  async getAllSchoolSupervisors(): Promise<ISchoolSupervisorProps[]> {
    const allSchoolSupervisors = await SchoolSupervisorModel.findAll({
      include: [
        {
          model: ServantModel,
          as: 'servant',
          include: [
            {
              model: UserModel,
              as: 'user'
            }
          ]
        },
        {
          model: InstituteModel,
          as: 'institute'
        },
        {
          model: RegionalModel,
          as: 'regional',
          include: [
            {
              model: InstituteModel,
              as: 'institute'
            }
          ]
        }
      ]
    });
    return allSchoolSupervisors;
  }

  async getAllSchoolSupervisorByRegional(
    regionalId: ISchoolSupervisorProps
  ): Promise<ISchoolSupervisorProps[]> {
    const allSchoolSupervisors = await SchoolSupervisorModel.findAll({
      include: [
        {
          model: ServantModel,
          as: 'servant',
          include: [
            {
              model: UserModel,
              as: 'user'
            }
          ]
        },
        {
          model: InstituteModel,
          as: 'institute'
        },
        {
          model: RegionalModel,
          as: 'regional',
          include: [
            {
              model: InstituteModel,
              as: 'institute'
            }
          ]
        }
      ]
    });
    return allSchoolSupervisors;
  }

  async verifyIfAlredyBySchool(
    schoolSupervisor: ISchoolSupervisorProps
  ): Promise<boolean> {
    const existsSchoolSupervisor = await SchoolSupervisorModel.findOne({
      where: {
        schoolId: schoolSupervisor.schoolId
      }
    });
    if (existsSchoolSupervisor) {
      return true;
    } else {
      return false;
    }
  }
}
