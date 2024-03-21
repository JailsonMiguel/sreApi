import { Request, Response } from 'express';
import { GetAllInstitutesUseCase } from './getAllInstitutesUseCase';

export class GetAllInstitutesController {
  private getAllInstitutesUseCase: GetAllInstitutesUseCase;
  constructor(getAllInstitutesUseCase: GetAllInstitutesUseCase) {
    this.getAllInstitutesUseCase = getAllInstitutesUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const listInstitutes = await this.getAllInstitutesUseCase.handle();
      return res.status(200).json({ listInstitutes: listInstitutes });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
