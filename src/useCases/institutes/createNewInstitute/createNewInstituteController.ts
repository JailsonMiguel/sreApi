import { Request, Response } from 'express';
import { CreateNewInstituteUseCase } from './createNewInstituteUseCase';

export class CreateNewInstituteController {
  private createNewInstituteUseCase: CreateNewInstituteUseCase;
  constructor(createNewInstituteUseCase: CreateNewInstituteUseCase) {
    this.createNewInstituteUseCase = createNewInstituteUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const { id, name, address, ibgeCityCode, type, isActive } = req.body;
      await this.createNewInstituteUseCase.handle({
        id,
        name,
        address,
        ibgeCityCode,
        type,
        isActive
      });
      return res.status(201).json({
        message: 'Instituto criado com sucesso'
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
