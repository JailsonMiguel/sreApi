import { Request, Response } from 'express';
import { GetAllProfilesUsersInstitutesUseCase } from './getAllProfilesUsersInstitutesUseCase';

export class GetAllProfilesUsersInstitutesController {
  private getAllProfilesUsersInstitutesUseCase: GetAllProfilesUsersInstitutesUseCase;
  constructor(
    getAllProfilesUsersInstitutesUseCase: GetAllProfilesUsersInstitutesUseCase
  ) {
    this.getAllProfilesUsersInstitutesUseCase =
      getAllProfilesUsersInstitutesUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const listProfilesUsersInstitutes =
        await this.getAllProfilesUsersInstitutesUseCase.handle();
      return res
        .status(200)
        .json({ listProfilesUsersInstitutes: listProfilesUsersInstitutes });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
