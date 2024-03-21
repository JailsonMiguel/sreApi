import { IRegionalProps } from '../interfaces/props/IRegionalProps';

export class Regional {
  private regionalProps: IRegionalProps;
  constructor(regionalProps: IRegionalProps) {
    this.regionalProps = regionalProps;
  }
  get regional() {
    return this.regionalProps;
  }
}
