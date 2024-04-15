import { IConsultantProps } from '../interfaces/props/IConsultantProps';

export class Consultant {
  private consultantProps: IConsultantProps;
  constructor(consultantProps: IConsultantProps) {
    this.consultantProps = consultantProps;
  }
  get consultant() {
    return this.consultantProps;
  }
}
