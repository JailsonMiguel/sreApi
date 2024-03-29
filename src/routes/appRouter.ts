import { Router } from 'express';
import { userRouter } from './user';
import { profileRouter } from './profile';
import { instituteRouter } from './institute';
import { positionRouter } from './position';
import { schoolRouter } from './school';
import { typologyRouter } from './typologies';
import { profileUserInstituteRouter } from './profileUserInstitute';
import { servantRouter } from './servant';
import { regionalRouter } from './regional';

const appRouter = Router();

appRouter.use(userRouter);
appRouter.use(profileRouter);
appRouter.use(instituteRouter);
appRouter.use(positionRouter);
appRouter.use(regionalRouter);
appRouter.use(schoolRouter);
appRouter.use(typologyRouter);
appRouter.use(profileUserInstituteRouter);
appRouter.use(servantRouter);

export { appRouter };
