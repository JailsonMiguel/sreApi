import { IInstituteProps } from '../props/IInstituteProps';
import { IOccupationProps } from '../props/IOccupationProps';
import { IPositionProps } from '../props/IPositionProps';
import { IServantProps } from '../props/IServantProps';

type IGetTypologyInterface = {
  occupation: IOccupationProps;
  servant: IServantProps;
  position: IPositionProps;
  institute: IInstituteProps;
}[];
