import { Request, Response } from 'express';
import { GetAllProfilesUseCase } from './getAllProfilesUseCase';

export class GetAllProfilesController {
  private getAllProfilesUseCase: GetAllProfilesUseCase;
  constructor(getAllProfilesUseCase: GetAllProfilesUseCase) {
    this.getAllProfilesUseCase = getAllProfilesUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const listProfiles = await this.getAllProfilesUseCase.handle();
      return res.status(200).json({ listProfiles: listProfiles });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
