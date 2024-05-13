import { IInstituteProps } from '../props/IInstituteProps';
import { IOccupationProps } from '../props/IOccupationProps';
import { ISupervisedSchoolProps } from '../props/ISupervisedSchoolProps';

type IGetSupervisedSchoolInterface = {
  supervised: ISupervisedSchoolProps;
  occupation: IOccupationProps;
  institute: IInstituteProps;
}[];
