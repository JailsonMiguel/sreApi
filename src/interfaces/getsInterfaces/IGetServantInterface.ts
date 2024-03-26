import { IPositionProps } from '../props/IPositionProps';
import { IRegionalProps } from '../props/IRegionalProps';
import { IServantProps } from '../props/IServantProps';
import { IUserProps } from '../props/IUserProps';

type IGetServantInterface = {
  servant: IServantProps;
  position: IPositionProps;
  user: IUserProps;
  regional: IRegionalProps;
}[];
