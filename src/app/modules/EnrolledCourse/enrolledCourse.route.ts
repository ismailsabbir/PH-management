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
router.patch(
  '/update-enrolled-course-marks',
  auth('faculty', 'admin'),
  validationRequest(
    EnrolledCourseValidations.updateEnrolledCourseMarksValidationZodSchema,
  ),
  EnrolledCourseControllers.updateEnrolledCourseMarks,
);
export const EnrolledCourseRoutes = router;
