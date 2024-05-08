import { IRegionalProps } from '../props/IRegionalProps';
import { IServantProps } from '../props/IServantProps';
import { ISuperintendentProps } from '../props/ISuperintendentProps';

type IGetSuperintendentInterface = {
  superintendent: ISuperintendentProps;
  regional: IRegionalProps;
  servant: IServantProps;
}[];
