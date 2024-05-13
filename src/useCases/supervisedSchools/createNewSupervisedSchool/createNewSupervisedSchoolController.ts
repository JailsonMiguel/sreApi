import { Request, Response } from 'express';
import { CreateNewSupervisedSchoolUseCase } from './createNewSupervisedSchoolUseCase';

export class CreateNewSupervisedSchoolController {
  private createNewSupervisedSchoolUseCase: CreateNewSupervisedSchoolUseCase;
  constructor(
    createNewSupervisedSchoolUseCase: CreateNewSupervisedSchoolUseCase
  ) {
    this.createNewSupervisedSchoolUseCase = createNewSupervisedSchoolUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const { occupationId, instituteId, initialDate, finalDate, isActive } =
        req.body;
      await this.createNewSupervisedSchoolUseCase.handle({
        occupationId,
        instituteId,
        initialDate,
        finalDate,
        isActive
      });
      return res.status(201).json({
        message: 'Supervisor vinculado à escola com sucesso'
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
