import { Request, Response } from 'express';
import { UpdateConsultantUseCase } from './updateConsultantUseCase';
import { IUpdateConsultantInterface } from '../../../interfaces/updates/IUpdateConsultantInterface';

export class UpdateConsultantController {
  constructor(private updateConsultantUseCase: UpdateConsultantUseCase) {}
  handle = async (req: Request, res: Response) => {
    try {
      const bodyData: IUpdateConsultantInterface = req.body;
      const { consultantId } = req.params;
      //@ts-ignore
      delete bodyData.id;

      const updatedConsultant = await this.updateConsultantUseCase.handle(
        bodyData,
        consultantId
      );
      if (updatedConsultant) {
        res.status(200).json({
          message: 'Assessoria alterada com sucesso'
        });
      } else {
        res.status(200).json({ message: 'Nenhuma linha afetada' });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
