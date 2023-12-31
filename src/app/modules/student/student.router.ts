import express, { NextFunction, Request, Response } from 'express';
import { StudentControllers } from './student.controller';
import validationRequest from '../../utils/validationRequest';
import { updateStudentValidationSchema } from './student.validation';
const router = express.Router();

router.get('/:studentId', StudentControllers.getSingleStudent);
router.patch(
  '/:studentId',
  validationRequest(updateStudentValidationSchema),
  StudentControllers.updateStudent,
);
router.delete('/:studentId', StudentControllers.deleteStudent);

router.get('/', StudentControllers.getAllStudents);

export const StudentRoutes = router;
