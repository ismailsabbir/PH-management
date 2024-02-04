import express from 'express';
import validationRequest from '../../utils/validationRequest';
import { CourseValidations } from './course.validation';
import { CourseControllers } from './course.controller';
import auth from '../../middlewares/auth';
// import validationRequest from './../../utils/validationRequest';
const router = express.Router();
router.post(
  '/create-course',
  auth('admin'),
  validationRequest(CourseValidations.createCourseValidationSchema),
  CourseControllers.createCourse,
);

router.get(
  '/:id',
  auth('student', 'faculty', 'admin'),
  CourseControllers.getSingleCourse,
);
router.delete('/:id', CourseControllers.deleteCourse);
router.get('/', CourseControllers.getAllCourses);

router.patch(
  '/:id',
  auth('admin'),
  validationRequest(CourseValidations.updateCourseValidationSchema),
  CourseControllers.updateCourse,
);
router.put(
  '/:courseId/assign-faculties',
  validationRequest(CourseValidations.facultiesWithCourseValidationSchema),
  CourseControllers.assignFacultiesWithCourse,
);
router.delete(
  '/:courseId/remove-faculties',
  auth('admin'),
  validationRequest(CourseValidations.facultiesWithCourseValidationSchema),
  CourseControllers.removeFacultiesFromCourse,
);

export const CourseRoutes = router;
