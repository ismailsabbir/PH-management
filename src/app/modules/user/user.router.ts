import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';
import { AnyZodObject } from 'zod';
import { studentValidationS } from '../student/student.validation';
import validationRequest from '../../utils/validationRequest';
import { createFacultyValidationSchema } from '../Faculty/faculty.validation';
import { createAdminValidationSchema } from '../Admin/admin.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './user.constant';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/create-student',
  auth(USER_ROLE.admin),
  validationRequest(studentValidationS.studentValidationSchema),
  UserControllers.createStudent,
);
router.post(
  '/create-faculty',
  auth(USER_ROLE.admin),
  validationRequest(createFacultyValidationSchema),
  UserControllers.createFaculty,
);
router.post(
  '/create-admin',
  auth(USER_ROLE.admin),
  validationRequest(createAdminValidationSchema),
  UserControllers.createAdmin,
);
router.get('/me', auth('student', 'faculty', 'admin'), UserControllers.getMe);
router.post(
  '/change-status/:id',
  auth('admin'),
  validationRequest(UserValidation.changeStatusValidationSchema),
  UserControllers.changeStatus,
);
export const UserRoutes = router;
