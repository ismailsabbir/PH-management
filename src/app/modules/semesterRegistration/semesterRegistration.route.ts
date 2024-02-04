import express from 'express';
import validationRequest from '../../utils/validationRequest';
import { SemesterRegistrationValidations } from './semesterRegistration.validation';
import { SemesterRegistrationController } from './semesterRegistration.controller';
const router = express.Router();

router.post(
  '/create-semester-registration',
  validationRequest(
    SemesterRegistrationValidations.createSemesterRegistrationValidationSchema,
  ),
  SemesterRegistrationController.createSemesterRegistration,
);
router.get(
  '/:id',
  SemesterRegistrationController.getSingleSemesterRegistration,
);
router.get('/', SemesterRegistrationController.getAllSemesterRegistrations);
router.patch(
  '/:id',
  validationRequest(
    SemesterRegistrationValidations.upadateSemesterRegistrationValidationSchema,
  ),
  SemesterRegistrationController.updateSemesterRegistration,
);
export const semesterRegistrationRoutes = router;
