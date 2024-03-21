import { IUserProps } from '../interfaces/props/IUserProps';

export class User {
  private userProps: IUserProps;
  constructor(userProps: IUserProps) {
    this.userProps = userProps;
  }
  get user() {
    return this.userProps;
  }
}
