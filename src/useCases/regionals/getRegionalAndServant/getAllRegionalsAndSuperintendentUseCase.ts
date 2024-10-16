import { ISelectRegionalRepository } from '../../../interfaces/repositories/select/ISelectRegionalInterface';

export class GetAllRegionalsAndSuperintendentsUseCase {
  private selectRegionalRepository: ISelectRegionalRepository;
  constructor(selectRegionalRepository: ISelectRegionalRepository) {
    this.selectRegionalRepository = selectRegionalRepository;
  }
  handle = async () => {
    const listRegionals =
      await this.selectRegionalRepository.getAllRegionalsAndSuperintendents();
    return listRegionals;
  };
}
