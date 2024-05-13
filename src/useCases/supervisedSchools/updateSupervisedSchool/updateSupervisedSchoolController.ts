import { Request, Response } from 'express';
import { UpdateSupervisedSchoolUseCase } from './updateSupervisedSchoolUseCase';
import { IUpdateSupervisedSchoolInterface } from '../../../interfaces/updatesInterfaces/IUpdateSupervisedSchoolInterface';

export class UpdateSupervisedSchoolController {
  constructor(
    private updateSupervisedSchoolUseCase: UpdateSupervisedSchoolUseCase
  ) {}
  handle = async (req: Request, res: Response) => {
    try {
      const bodyData: IUpdateSupervisedSchoolInterface = req.body;
      const { supervisedSchoolId } = req.params;
      //@ts-ignore
      delete bodyData.id;

      const updatedSupervisedSchool =
        await this.updateSupervisedSchoolUseCase.handle(
          bodyData,
          supervisedSchoolId
        );
      if (updatedSupervisedSchool) {
        res.status(200).json({
          message: 'Escola vinculada ao servidor com sucesso'
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
