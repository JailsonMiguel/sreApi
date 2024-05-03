import { Request, Response } from 'express';
import { GetActiveByRegionalAndPositionUseCase } from './getByRegionalAndPositionUseCase';

export class GetActiveByRegionalAndPositionController {
  private getActiveByRegionalAndPositionUseCase: GetActiveByRegionalAndPositionUseCase;
  constructor(
    getActiveByRegionalAndPositionUseCase: GetActiveByRegionalAndPositionUseCase
  ) {
    this.getActiveByRegionalAndPositionUseCase =
      getActiveByRegionalAndPositionUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const regionalId: number = Number(req.params.regionalId);
      const positionId: number = Number(req.params.positionId);
      if (isNaN(regionalId)) {
        return res.status(400).json({ message: 'Id da regional inválido' });
      }
      if (isNaN(positionId)) {
        return res.status(400).json({ message: 'Id da função inválido' });
      }
      const listTypologies =
        await this.getActiveByRegionalAndPositionUseCase.handle(
          regionalId,
          positionId
        );
      if (listTypologies) {
        return res.status(200).json(listTypologies);
      } else {
        return res.status(404).json({
          message: 'Não foi encontrado tipologia para esta regional e função'
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Ocorreu um erro interno no servidor' });
    }
  };
}
