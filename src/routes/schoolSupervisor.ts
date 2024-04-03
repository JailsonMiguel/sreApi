import { Router } from 'express';
import { getAllSchoolSupervisorsController } from '../useCases/schoolSupervisors/getAllSchoolSupervisors';
import { updateSchoolSupervisorController } from '../useCases/schoolSupervisors/updateSchoolSupervisor';
import { createNewSchoolSupervisorController } from '../useCases/schoolSupervisors/createNewSchoolSupervisor';

const schoolSupervisorRouter = Router();
schoolSupervisorRouter.post(
  '/school-supervisor',
  createNewSchoolSupervisorController.handle
);
schoolSupervisorRouter.get(
  '/school-supervisor',
  getAllSchoolSupervisorsController.handle
);
schoolSupervisorRouter.put(
  '/school-supervisor/:schoolSupervisorId',
  updateSchoolSupervisorController.handle
);

export { schoolSupervisorRouter };
