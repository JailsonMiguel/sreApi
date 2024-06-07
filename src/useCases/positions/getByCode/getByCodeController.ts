import { Request, Response } from 'express';
import { GetByCodeUseCase } from './getByCodeUseCase';

export class GetPositionByCodeController {
  private getPositionByCodeUseCase: GetByCodeUseCase;
  constructor(getPositionByCodeUseCase: GetByCodeUseCase) {
    this.getPositionByCodeUseCase = getPositionByCodeUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const code: string = req.params.code;
      const positionId = await this.getPositionByCodeUseCase.handle(code);
      if (positionId) {
        return res.status(200).json(positionId);
      } else {
        return res.status(404).json({ message: 'Código não foi encontrado' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Ocorreu um erro interno no servidor' });
    }
  };
}
