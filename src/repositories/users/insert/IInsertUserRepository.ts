import { IUserProps } from "../../../interfaces/props/IUserProps";

export interface IInsertUserRepository {
  create(user: IUserProps): Promise<IUserProps>;
}
