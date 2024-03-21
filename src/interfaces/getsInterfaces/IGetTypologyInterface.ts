import { IInstituteProps } from '../props/IInstituteProps';
import { IPositionProps } from '../props/IPositionProps';
import { IRegionalProps } from '../props/IRegionalProps';
import { ITypologyProps } from '../props/ITypologyProps';

type IGetTypologyInterface = {
  tipology: ITypologyProps;
  position: IPositionProps;
  regional: IRegionalProps;
}[];
