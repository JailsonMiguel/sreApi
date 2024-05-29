import { Request, Response } from 'express';
import { GetAllSupertintendentsUseCase } from './getAllSuperintendentsUseCase';

export class GetAllSuperintendentsController {
  private getAllSuperintendentsUseCase: GetAllSupertintendentsUseCase;
  constructor(getAllSuperintendentsUseCase: GetAllSupertintendentsUseCase) {
    this.getAllSuperintendentsUseCase = getAllSuperintendentsUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const positionId: number = Number(req.params.positionId);
      if (isNaN(positionId)) {
        return res.status(400).json({ message: 'Id inválido' });
      }
      const listOccupations =
        await this.getAllSuperintendentsUseCase.handle(positionId);
      if (listOccupations) {
        return res.status(200).json(listOccupations);
      } else {
        return res
          .status(404)
          .json({ message: 'Não foi encontrado vínculos!' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  };
}
