import { Request, Response } from 'express';
import { GetByRegionalAndPositionUseCase } from './getByRegionalAndPositionUseCase';

export class GetAllTypologiesByRegionalAndPositionController {
  private getAllTypologiesByRegionalAndPositionUseCase: GetByRegionalAndPositionUseCase;
  constructor(
    getAllTypologiesByRegionalAndPositionUseCase: GetByRegionalAndPositionUseCase
  ) {
    this.getAllTypologiesByRegionalAndPositionUseCase =
      getAllTypologiesByRegionalAndPositionUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const instituteId: number = Number(req.params.instituteId);
      const positionId: number = Number(req.params.positionId);
      // const { consultantId } = req.params;
      if (isNaN(instituteId)) {
        return res.status(400).json({ message: 'Id da regional inválido' });
      }
      if (isNaN(positionId)) {
        return res.status(400).json({ message: 'Id da função inválido' });
      }
      const listTypologies =
        await this.getAllTypologiesByRegionalAndPositionUseCase.handle(
          instituteId,
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
