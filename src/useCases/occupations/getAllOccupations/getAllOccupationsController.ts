import { Request, Response } from 'express';
import { GetAllOccupationsUseCase } from './getAllOccupationsUseCase';

export class GetAllOccupationsController {
  private getAllOccupationsUseCase: GetAllOccupationsUseCase;
  constructor(getAllOccupationsUseCase: GetAllOccupationsUseCase) {
    this.getAllOccupationsUseCase = getAllOccupationsUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const listOccupations = await this.getAllOccupationsUseCase.handle();
      return res.status(200).json({ listOccupations: listOccupations });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
