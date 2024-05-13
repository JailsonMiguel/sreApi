import { Request, Response } from 'express';
import { GetAllSupervisedSchoolsUseCase } from './getAllSupervisorSchoolsUse';

export class GetAllSupervisedSchoolsController {
  private getAllSupervisedSchoolsUseCase: GetAllSupervisedSchoolsUseCase;
  constructor(getAllSupervisedSchoolsUseCase: GetAllSupervisedSchoolsUseCase) {
    this.getAllSupervisedSchoolsUseCase = getAllSupervisedSchoolsUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const listSupervisedSchools =
        await this.getAllSupervisedSchoolsUseCase.handle();
      return res
        .status(200)
        .json({ listSupervisedSchools: listSupervisedSchools });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
