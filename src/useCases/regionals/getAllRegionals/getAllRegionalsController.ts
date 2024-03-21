import { Request, Response } from 'express';
import { GetAllRegionalsUseCase } from './getAllRegionalsUseCase';

export class GetAllRegionalsController {
  private getAllRegionalsUseCase: GetAllRegionalsUseCase;
  constructor(getAllRegionalsUseCase: GetAllRegionalsUseCase) {
    this.getAllRegionalsUseCase = getAllRegionalsUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const listRegionals = await this.getAllRegionalsUseCase.handle();
      return res.status(200).json({ listRegionals: listRegionals });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
