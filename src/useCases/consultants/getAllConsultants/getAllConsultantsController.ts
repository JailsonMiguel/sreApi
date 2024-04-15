import { Request, Response } from 'express';
import { GetAllConsultantsUseCase } from './getAllConsultantsUseCase';

export class GetAllConsultantsController {
  private getAllConsultantsUseCase: GetAllConsultantsUseCase;
  constructor(getAllConsultantsUseCase: GetAllConsultantsUseCase) {
    this.getAllConsultantsUseCase = getAllConsultantsUseCase;
  }
  handle = async (req: Request, res: Response) => {
    try {
      const listConsultants = await this.getAllConsultantsUseCase.handle();
      return res.status(200).json({ listConsultants: listConsultants });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  };
}
