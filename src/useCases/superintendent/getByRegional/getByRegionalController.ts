import { Request, Response } from 'express';
import { GetByRegionalIdUseCase } from './getByRegionalUseCase';

export class GetAllSuperintendentsByRegionalIdController {
  private getAllSuperintendentsByRegionalIdUseCase: GetByRegionalIdUseCase;
  constructor(
    getAllSuperintendentsByRegionalIdUseCase: GetByRegionalIdUseCase
  ) {
    this.getAllSuperintendentsByRegionalIdUseCase =
      getAllSuperintendentsByRegionalIdUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const regionalId: number = Number(req.params.regionalId);
      if (isNaN(regionalId)) {
        return res.status(400).json({ message: 'Id inválido' });
      }
      const listSuperintendents =
        await this.getAllSuperintendentsByRegionalIdUseCase.handle(regionalId);
      if (listSuperintendents) {
        return res.status(200).json(listSuperintendents);
      } else {
        return res
          .status(404)
          .json({
            message: 'Não foi encontrado superintendente para esta regional'
          });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Ocorreu um erro interno no servidor' });
    }
  };
}
