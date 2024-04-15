import { Request, Response } from 'express';
import { GetAllTeamsUseCase } from './getAllTeamsUseCase';

export class GetAllTeamsController {
  private getAllTeamsUseCase: GetAllTeamsUseCase;
  constructor(getAllTeamsUseCase: GetAllTeamsUseCase) {
    this.getAllTeamsUseCase = getAllTeamsUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const listTeams = await this.getAllTeamsUseCase.handle();
      return res.status(200).json({ listTeams: listTeams });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
