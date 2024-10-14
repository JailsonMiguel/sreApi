import { IInstituteProps } from '../props/IInstituteProps';
import { IRegionalProps } from '../props/IRegionalProps';
import { ISchoolProps } from '../props/ISchoolProps';

type IGetSchoolInterface = {
  school: ISchoolProps;
  regional: IRegionalProps;
  institute: IInstituteProps;
}[];
