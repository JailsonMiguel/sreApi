import { ITypologyProps } from '../interfaces/props/ITypologyProps';

export class Typology {
  private typologyProps: ITypologyProps;
  constructor(typologyProps: ITypologyProps) {
    this.typologyProps = typologyProps;
  }
  get typology() {
    return this.typologyProps;
  }
}
