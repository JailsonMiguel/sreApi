import { Request, Response } from 'express';
import { GetOccupationActiveByRegionalUseCase } from './getOccuptionActiveByRegionalUseCase';

export class GetOccupationActiveByRegionalController {
  private getOccupationActiveByRegionalUseCase: GetOccupationActiveByRegionalUseCase;
  constructor(
    getOccupationActiveByRegionalUseCase: GetOccupationActiveByRegionalUseCase
  ) {
    this.getOccupationActiveByRegionalUseCase =
      getOccupationActiveByRegionalUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const instituteId: number = Number(req.params.instituteId);
      const positionId: number = Number(req.params.positionId);
      if (isNaN(positionId)) {
        return res.status(400).json({ message: 'Id inválido' });
      }
      if (isNaN(instituteId)) {
        return res.status(400).json({ message: 'Id instituto enválido' });
      }
      const listOccupations =
        await this.getOccupationActiveByRegionalUseCase.handle(
          instituteId,
          positionId
        );
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
