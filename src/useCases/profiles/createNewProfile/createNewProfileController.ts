import { Request, Response } from 'express';
import { CreateNewProfileUseCase } from './createNewProfileUseCase';

export class CreateNewProfileController {
  private createNewProfileUseCase: CreateNewProfileUseCase;
  constructor(createNewProfileUseCase: CreateNewProfileUseCase) {
    this.createNewProfileUseCase = createNewProfileUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const { name, code, isActive } = req.body;
      await this.createNewProfileUseCase.handle({
        name,
        code,
        isActive
      });
      return res.status(201).json({
        message: 'Perfil criado com sucesso'
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
