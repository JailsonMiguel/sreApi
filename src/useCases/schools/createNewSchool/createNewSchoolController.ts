import { Request, Response } from 'express';
import { CreateNewSchoolUseCase } from './createNewSchoolUseCase';

export class CreateNewSchoolController {
  private createNewSchoolUseCase: CreateNewSchoolUseCase;
  constructor(createNewSchoolUseCase: CreateNewSchoolUseCase) {
    this.createNewSchoolUseCase = createNewSchoolUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const { id, instituteId, regionalId, schoolInep, isActive } = req.body;
      await this.createNewSchoolUseCase.handle({
        id,
        instituteId,
        regionalId,
        schoolInep,
        isActive
      });
      return res.status(201).json({
        message: 'Escola criada com sucesso'
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
