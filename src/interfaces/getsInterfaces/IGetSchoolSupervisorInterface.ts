import { IInstituteProps } from '../props/IInstituteProps';
import { IRegionalProps } from '../props/IRegionalProps';
import { ISchoolProps } from '../props/ISchoolProps';
import { ISchoolSupervisorProps } from '../props/ISchoolSupervisorProps';
import { IServantProps } from '../props/IServantProps';

type IGetSchoolSupervisorInterface = {
  school: ISchoolSupervisorProps;
  institute: IInstituteProps;
  schoolSupervisor: IServantProps;
}[];
