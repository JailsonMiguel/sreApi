import { IProfileProps } from '../interfaces/props/IProfileProps';

export class Profile {
  private profileProps: IProfileProps;
  constructor(profileProps: IProfileProps) {
    this.profileProps = profileProps;
  }
  get profile() {
    return this.profileProps;
  }
}
