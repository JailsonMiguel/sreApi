import { Request, Response } from 'express';
import { UpdateUserUseCase } from './updateUserUseCase';
import { IUpdateUserInterface } from '../../../interfaces/updatesInterfaces/IUpdateUserInterface';

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}
  handle = async (req: Request, res: Response) => {
    try {
      const bodyData: IUpdateUserInterface = req.body;
      const { userId } = req.params;
      //@ts-ignore
      delete bodyData.id;

      const updatedUser = await this.updateUserUseCase.handle(bodyData, userId);
      if (updatedUser) {
        res.status(200).json({
          message: 'Usuário alterado com sucesso'
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
