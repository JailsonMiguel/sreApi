import { ISelectTypologyRepository } from '../../../repositories/typologies/select/ISelectTypologyInterface';

export class GetAllTypologiesUseCase {
  private selectTypologyRepository: ISelectTypologyRepository;
  constructor(selectTypologyRepository: ISelectTypologyRepository) {
    this.selectTypologyRepository = selectTypologyRepository;
  }
  handle = async () => {
    const listTypologies =
      await this.selectTypologyRepository.getAllTypologies();
    console.log(listTypologies);
    return listTypologies;
  };
}
