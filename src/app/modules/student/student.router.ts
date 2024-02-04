import express, { NextFunction, Request, Response } from 'express';
import { StudentControllers } from './student.controller';
import validationRequest from '../../utils/validationRequest';
import { updateStudentValidationSchema } from './student.validation';
const router = express.Router();
router.get('/', StudentControllers.getAllStudents);

router.get('/:id', StudentControllers.getSingleStudent);

router.patch(
  '/:id',
  validationRequest(updateStudentValidationSchema),
  StudentControllers.updateStudent,
);

router.delete('/:id', StudentControllers.deleteStudent);

export const StudentRoutes = router;
