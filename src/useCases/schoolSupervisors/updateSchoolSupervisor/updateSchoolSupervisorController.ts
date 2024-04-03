import { Request, Response } from 'express';
import { UpdateSchoolSupervisorUseCase } from './updateSchoolSupervisorUseCase';
import { IUpdateSchoolSupervisorInterface } from '../../../interfaces/updatesInterfaces/IUpdateSchoolSupervisorInterface';

export class UpdateSchoolSupervisorController {
  constructor(
    private updateSchoolSupervisorUseCase: UpdateSchoolSupervisorUseCase
  ) {}
  handle = async (req: Request, res: Response) => {
    try {
      const bodyData: IUpdateSchoolSupervisorInterface = req.body;
      const { schoolSupervisorId } = req.params;
      //@ts-ignore
      delete bodyData.id;

      const updatedSchoolSupervisor =
        await this.updateSchoolSupervisorUseCase.handle(
          bodyData,
          schoolSupervisorId
        );
      if (updatedSchoolSupervisor) {
        res.status(200).json({
          message: 'Alteração realizada com sucesso'
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
