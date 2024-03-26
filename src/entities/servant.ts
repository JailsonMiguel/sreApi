import { IServantProps } from '../interfaces/props/IServantProps';

export class Servant {
  private servantProps: IServantProps;
  constructor(servantProps: IServantProps) {
    this.servantProps = servantProps;
  }
  get servant() {
    return this.servantProps;
  }
}
