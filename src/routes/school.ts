import { Router } from 'express';
import { createNewSchoolController } from '../useCases/schools/createNewSchool';
import { getAllSchoolsController } from '../useCases/schools/getAllSchools';
import { updateSchoolController } from '../useCases/schools/updateSchool';

const schoolRouter = Router();
schoolRouter.post('/school', createNewSchoolController.handle);
schoolRouter.get('/school', getAllSchoolsController.handle);
schoolRouter.put('/school/:schoolId', updateSchoolController.handle);

export { schoolRouter };
