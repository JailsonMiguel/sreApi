import { ISelectRegionalRepository } from '../../../repositories/regionals/select/ISelectRegionalInterface';

export class GetAllRegionalsUseCase {
  private selectRegionalRepository: ISelectRegionalRepository;
  constructor(selectRegionalRepository: ISelectRegionalRepository) {
    this.selectRegionalRepository = selectRegionalRepository;
  }
  handle = async () => {
    const listRegionals = await this.selectRegionalRepository.getAllRegionals();
    console.log(listRegionals);
    return listRegionals;
  };
}
