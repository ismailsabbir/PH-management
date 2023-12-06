import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';
import { AnyZodObject } from 'zod';
import { studentValidationS } from '../student/student.validation';
import validationRequest from '../../utils/validationRequest';
import { createFacultyValidationSchema } from '../Faculty/faculty.validation';

const router = express.Router();

router.post(
  '/create-student',
  validationRequest(studentValidationS.studentValidationSchema),
  UserControllers.createStudent,
);
router.post(
  '/create-faculty',
  validationRequest(createFacultyValidationSchema),
  UserControllers.createFaculty,
);
export const UserRoutes = router;
