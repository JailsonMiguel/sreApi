import { IOccupationProps } from '../../../interfaces/props/IOccupationProps';

export interface ISelectOccupationRepository {
  verifyIfAlredyActiveByPositionAndInstituteAndServant(
    occupation: IOccupationProps
  ): Promise<boolean>;
  getAllOccupations(): Promise<IOccupationProps[]>;
  getAllActiveByInstitute(instituteId: number): Promise<IOccupationProps[]>;
  getAllOccupationByInstituteAndPosition(
    instituteId: number,
    positionId: number
  ): Promise<IOccupationProps[]>;
  getActiveByInstituteAndPosition(
    instituteId: number,
    positionId: number
  ): Promise<IOccupationProps>;
  getAllOccupationByPosition(positionId: number): Promise<IOccupationProps[]>;
}
