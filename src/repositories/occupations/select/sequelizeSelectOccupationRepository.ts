import { where } from 'sequelize';
import { IOccupationProps } from '../../../interfaces/props/IOccupationProps';
import { InstituteModel } from '../../../models/instituteModel';
import { OccupationModel } from '../../../models/occupationModel';
import { PositionModel } from '../../../models/positionModel';
import { ServantModel } from '../../../models/servantModel';
import { ISelectOccupationRepository } from './ISelectOccupationInterface';

export class SequelizeSelectOccupationRepository
  implements ISelectOccupationRepository
{
  async getAllActiveByInstitute(instituteId: number) {
    const allOccupation = await OccupationModel.findAll({
      where: {
        instituteId: instituteId,
        isActive: true
      },
      order: [
        ['isActive', 'DESC'],
        ['id', 'DESC']
      ]
    });
    return allOccupation;
  }

  async getAllOccupations(): Promise<IOccupationProps[]> {
    const allOccupation = await OccupationModel.findAll({
      include: [
        {
          model: PositionModel,
          as: 'position'
        },
        {
          model: InstituteModel,
          as: 'institute'
        },
        {
          model: ServantModel,
          as: 'servant'
        }
      ],
      order: [
        ['isActive', 'DESC'],
        ['id', 'DESC']
      ]
    });
    return allOccupation;
  }

  async verifyIfAlredyActiveByPositionAndInstituteAndServant(
    occupation: IOccupationProps
  ): Promise<boolean> {
    const existsOccupation = await OccupationModel.findOne({
      where: {
        instituteId: occupation.instituteId,
        positionId: occupation.positionId,
        isActive: true
      }
    });
    if (existsOccupation) {
      return true;
    } else {
      return false;
    }
  }
  async getAllOccupationByInstituteAndPosition(
    instituteId: number,
    positionId: number
  ): Promise<IOccupationProps[]> {
    const getAllOccupation = await OccupationModel.findAll({
      where: {
        instituteId: instituteId,
        positionId: positionId
      },
      order: [
        ['isActive', 'DESC'],
        ['id', 'DESC']
      ]
    });
    return getAllOccupation;
  }
  async getActiveByInstituteAndPosition(
    instituteId: number,
    positionId: number
  ): Promise<IOccupationProps> {
    const getAllOccupation = await OccupationModel.findOne({
      where: {
        instituteId: instituteId,
        positionId: positionId,
        isActive: true
      },
      order: [
        ['isActive', 'DESC'],
        ['id', 'DESC']
      ]
    });
    return getAllOccupation;
  }
  async getAllOccupationByPosition(
    positionId: number
  ): Promise<IOccupationProps[]> {
    const getAllOccupations = await OccupationModel.findAll({
      where: {
        positionId: positionId
      },
      include: [
        {
          model: PositionModel,
          as: 'position'
        },
        {
          model: InstituteModel,
          as: 'institute'
        },
        {
          model: ServantModel,
          as: 'servant'
        }
      ],
      order: [
        ['isActive', 'DESC'],
        ['id', 'DESC']
      ]
    });
    return getAllOccupations;
  }
}
