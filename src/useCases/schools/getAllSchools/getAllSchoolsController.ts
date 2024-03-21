import { Request, Response } from 'express';
import { GetAllSchoolsUseCase } from './getAllSchoolsUseCase';

export class GetAllSchoolsController {
  private getAllSchoolsUseCase: GetAllSchoolsUseCase;
  constructor(getAllSchoolsUseCase: GetAllSchoolsUseCase) {
    this.getAllSchoolsUseCase = getAllSchoolsUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const listSchools = await this.getAllSchoolsUseCase.handle();
      return res.status(200).json({ listSchools: listSchools });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
