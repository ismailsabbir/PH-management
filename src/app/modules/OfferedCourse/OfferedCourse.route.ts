import express from 'express';
import validationRequest from '../../utils/validationRequest';
import { OfferedCourseValidations } from './OfferedCourse.validation';
import { OfferedCourseControllers } from './OfferedCourse.controller';
const router = express.Router();
router.post(
  '/create-offered-course',
  validationRequest(
    OfferedCourseValidations.createOfferedCourseValidationSchema,
  ),
  OfferedCourseControllers.createOfferedCourse,
);
router.patch(
  '/:id',
  validationRequest(
    OfferedCourseValidations.updateOfferedCourseValidationSchema,
  ),
  OfferedCourseControllers.updateOfferedCourse,
);
router.get('/', OfferedCourseControllers.getAllOfferedCourses);

router.get('/:id', OfferedCourseControllers.getSingleOfferedCourses);
router.delete('/:id', OfferedCourseControllers.deleteOfferedCourseFromDB);
export const offeredCourseRoutes = router;
