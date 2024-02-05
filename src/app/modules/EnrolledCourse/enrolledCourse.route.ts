import express from 'express';
import auth from '../../middlewares/auth';
import validationRequest from '../../utils/validationRequest';
import { EnrolledCourseValidations } from './enrolledCourse.validaton';
import { EnrolledCourseControllers } from './enrolledCourse.controller';
const router = express.Router();
router.post(
  '/create_enrolled_course',
  auth('student'),
  validationRequest(
    EnrolledCourseValidations.createEnrolledCourseValidationZodSchema,
  ),
  EnrolledCourseControllers.createEnrolledCourse,
);
export const EnrolledCourseRoutes = router;
