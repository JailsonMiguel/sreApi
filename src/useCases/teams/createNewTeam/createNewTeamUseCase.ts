import { ITeamProps } from '../../../interfaces/props/ITeamProps';
import { IInsertTeamRepository } from '../../../interfaces/repositories/create/IInsertTeamRepository';
import { ISelectTeamRepository } from '../../../interfaces/repositories/select/ISelectTeamInterface';
import { sreError } from '../../../shared/errors/errors';

export class CreateNewTeamUseCase {
  private insertTeamRepository: IInsertTeamRepository;
  private selectTeamRepository: ISelectTeamRepository;
  constructor(
    insertTeamRepository: IInsertTeamRepository,
    selectTeamRepository: ISelectTeamRepository
  ) {
    this.insertTeamRepository = insertTeamRepository;
    this.selectTeamRepository = selectTeamRepository;
  }
  async handle(teamProps: ITeamProps) {
    const teamAlredyExists =
      await this.selectTeamRepository.verifyIfAlredyByDescription(teamProps);
    if (teamAlredyExists) {
      throw new sreError('Equipe já cadastrada', 'Equipe já cadastrada');
    } else {
      const createdTeam = await this.insertTeamRepository.createTeam(teamProps);
      return createdTeam;
    }
  }
}
