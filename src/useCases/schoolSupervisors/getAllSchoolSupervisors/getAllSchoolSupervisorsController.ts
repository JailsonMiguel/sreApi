import { Request, Response } from 'express';
import { GetAllSchoolSupervisorsUseCase } from './getAllSchoolSupervisorsUseCase';

export class GetAllSchoolSupervisorsController {
  private getAllSchoolSupervisorsUseCase: GetAllSchoolSupervisorsUseCase;
  constructor(getAllSchoolSupervisorsUseCase: GetAllSchoolSupervisorsUseCase) {
    this.getAllSchoolSupervisorsUseCase = getAllSchoolSupervisorsUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const listSchoolSupervisors =
        await this.getAllSchoolSupervisorsUseCase.handle();
      return res
        .status(200)
        .json({ listSchoolSupervisors: listSchoolSupervisors });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
