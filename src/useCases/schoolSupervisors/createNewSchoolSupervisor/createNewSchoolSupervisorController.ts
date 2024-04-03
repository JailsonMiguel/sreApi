import { Request, Response } from 'express';
import { CreateNewSchoolSupervisorUseCase } from './createNewSchoolSupervisorUseCase';

export class CreateNewSchoolSupervisorController {
  private createNewSchoolSupervisorUseCase: CreateNewSchoolSupervisorUseCase;
  constructor(
    createNewSchoolSupervisorUseCase: CreateNewSchoolSupervisorUseCase
  ) {
    this.createNewSchoolSupervisorUseCase = createNewSchoolSupervisorUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const {
        schoolId,
        schoolSupervisorId,
        initialDate,
        finalDate,
        isActive
      } = req.body;
      await this.createNewSchoolSupervisorUseCase.handle({
        schoolId,
        schoolSupervisorId,
        initialDate,
        finalDate,
        isActive
      });
      return res.status(201).json({
        message: 'Supervisor vinculado a escola com sucesso'
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
