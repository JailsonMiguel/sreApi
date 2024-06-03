import { Request, Response } from 'express';
import { GetServantByCpfUseCase } from './getServantByCpfUseCase';

export class GetServantByCpfController {
  private getServantByCpfUseCase: GetServantByCpfUseCase;
  constructor(getServantByCpfUseCase: GetServantByCpfUseCase) {
    this.getServantByCpfUseCase = getServantByCpfUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const cpf: string = req.params.cpf;
      const servantFound = await this.getServantByCpfUseCase.handle(cpf);
      return res.status(200).json({ servantFound: servantFound });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
