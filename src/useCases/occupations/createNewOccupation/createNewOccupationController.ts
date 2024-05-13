import { Request, Response } from 'express';
import { CreateNewOccupationUseCase } from './createNewOccupationUseCase';

export class CreateNewOccupationController {
  private createNewOccupationUseCase: CreateNewOccupationUseCase;
  constructor(createNewOccupationUseCase: CreateNewOccupationUseCase) {
    this.createNewOccupationUseCase = createNewOccupationUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const {
        positionId,
        instituteId,
        servantId,
        functionEmail,
        loadWorkload,
        offcialAct,
        initialDate,
        finalDate,
        isActive
      } = req.body;
      await this.createNewOccupationUseCase.handle({
        positionId,
        instituteId,
        servantId,
        functionEmail,
        loadWorkload,
        offcialAct,
        initialDate,
        finalDate,
        isActive
      });
      return res.status(201).json({
        message: 'Servidor vinculado à função com sucesso'
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
