import { Request, Response } from 'express';
import { CreateNewUserUseCase } from './createNewUserUseCase';

export class CreateNewUserController {
  private createNewUserUseCase: CreateNewUserUseCase;
  constructor(createNewUserUseCase: CreateNewUserUseCase) {
    this.createNewUserUseCase = createNewUserUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const { name, cpf, dateBirth, email, isActive } = req.body;
      await this.createNewUserUseCase.handle({
        name,
        cpf,
        dateBirth,
        email,
        isActive
      });
      return res.status(201).json({
        message: 'Usuário criado com sucesso'
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
