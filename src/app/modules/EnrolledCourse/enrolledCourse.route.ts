import express from 'express';
import auth from '../../middlewares/auth';
import validationRequest from '../../utils/validationRequest';
import { EnrolledCourseValidations } from './enrolledCourse.validaton';
import { EnrolledCourseControllers } from './enrolledCourse.controller';
import { USER_ROLE } from '../user/user.constant';
const router = express.Router();
router.post(
  '/create_enrolled_course',
  auth(USER_ROLE.student),
  validationRequest(
    EnrolledCourseValidations.createEnrolledCourseValidationZodSchema,
  ),
  EnrolledCourseControllers.createEnrolledCourse,
);
router.patch(
  '/update-enrolled-course-marks',
  auth(USER_ROLE.admin, USER_ROLE.superAdmin, USER_ROLE.faculty),
  validationRequest(
    EnrolledCourseValidations.updateEnrolledCourseMarksValidationZodSchema,
  ),
  EnrolledCourseControllers.updateEnrolledCourseMarks,
);
export const EnrolledCourseRoutes = router;
