import { Request, Response } from 'express';
import { GetAllRegionalsAndSuperintendentsUseCase } from './getAllRegionalsAndSuperintendentUseCase';

export class GetAllRegionalAndSuperintendentsController {
  private getAllRegionalAndSuperintendentsUseCase: GetAllRegionalsAndSuperintendentsUseCase;
  constructor(
    getAllRegionalAndSuperintendentsUseCase: GetAllRegionalsAndSuperintendentsUseCase
  ) {
    this.getAllRegionalAndSuperintendentsUseCase =
      getAllRegionalAndSuperintendentsUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const listRegionals =
        await this.getAllRegionalAndSuperintendentsUseCase.handle();
      return res.status(200).json({ listRegionals: listRegionals });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
