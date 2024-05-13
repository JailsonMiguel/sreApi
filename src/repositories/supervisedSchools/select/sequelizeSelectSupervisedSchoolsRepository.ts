import { ISupervisedSchoolProps } from '../../../interfaces/props/ISupervisedSchoolProps';
import { InstituteModel } from '../../../models/instituteModel';
import { OccupationModel } from '../../../models/occupationModel';
import { PositionModel } from '../../../models/positionModel';
import { ServantModel } from '../../../models/servantModel';
import { SupervisedSchoolModel } from '../../../models/supervisedSchoolModel';
import { ISelectSupervisedSchoolRepository } from './ISelectSupervisedSchoolsInterface';

export class SequelizeSelectSupervisedSchoolRepository
  implements ISelectSupervisedSchoolRepository
{
  async getAllSupervisedSchoolByInstitute(
    instituteId: number
  ): Promise<ISupervisedSchoolProps[]> {
    const allSupervisedSchool = await SupervisedSchoolModel.findAll({
      where: {
        instituteId: instituteId
      },
      include: [
        {
          model: OccupationModel,
          as: 'occupation',
          include: [
            {
              model: PositionModel,
              as: 'position'
            },
            {
              model: ServantModel,
              as: 'servant'
            }
          ]
        },
        {
          model: InstituteModel,
          as: 'institute'
        }
      ],
      order: [
        ['isActive', 'DESC'],
        ['id', 'DESC']
      ]
    });
    return allSupervisedSchool;
  }

  async getAllOccupationActive(): Promise<ISupervisedSchoolProps[]> {
    const allSupervisedSchool = await SupervisedSchoolModel.findAll({
      where: {
        isActive: true
      },
      include: [
        {
          model: OccupationModel,
          as: 'occupation',
          include: [
            {
              model: PositionModel,
              as: 'position'
            },
            {
              model: ServantModel,
              as: 'servant'
            }
          ]
        },
        {
          model: InstituteModel,
          as: 'institute'
        }
      ],
      order: [
        ['isActive', 'DESC'],
        ['id', 'DESC']
      ]
    });
    return allSupervisedSchool;
  }

  async getAllActiveByOccupationId(
    occupationId: number
  ): Promise<ISupervisedSchoolProps[]> {
    const allSupervisedSchool = await SupervisedSchoolModel.findAll({
      where: {
        occupationId: occupationId,
        isActive: true
      },
      include: [
        {
          model: OccupationModel,
          as: 'occupation',
          include: [
            {
              model: PositionModel,
              as: 'position'
            },
            {
              model: ServantModel,
              as: 'servant'
            }
          ]
        },
        {
          model: InstituteModel,
          as: 'institute'
        }
      ],
      order: [
        ['isActive', 'DESC'],
        ['id', 'DESC']
      ]
    });
    return allSupervisedSchool;
  }

  async getAllSupervisedSchools(): Promise<ISupervisedSchoolProps[]> {
    const allSupervisedSchool = await SupervisedSchoolModel.findAll({
      include: [
        {
          model: OccupationModel,
          as: 'occupation',
          include: [
            {
              model: PositionModel,
              as: 'position'
            },
            {
              model: ServantModel,
              as: 'servant'
            }
          ]
        },
        {
          model: InstituteModel,
          as: 'institute'
        }
      ],
      order: [
        ['isActive', 'DESC'],
        ['id', 'DESC']
      ]
    });
    return allSupervisedSchool;
  }

  async verifyIfAlredyActiveByInstituteAndOccupation(
    supervisedSchool: ISupervisedSchoolProps
  ): Promise<boolean> {
    const existsSupervisedSchool = await SupervisedSchoolModel.findOne({
      where: {
        instituteId: supervisedSchool.instituteId,
        occupationId: supervisedSchool.occupationId,
        isActive: true
      }
    });
    if (existsSupervisedSchool) {
      return true;
    } else {
      return false;
    }
  }

  async checkNumberOfSchools(occupationId: number): Promise<number | null> {
    const checkSchools = await SupervisedSchoolModel.findAll({
      where: {
        occupationId: occupationId,
        isActive: true
      }
    });
    return checkSchools.length;
  }
}
