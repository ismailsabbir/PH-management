import express from 'express';
import { AcademicDepartmentControllers } from './academicDepartment.controller';
import { AcademicDepartmentValidation } from './academicDepartment.validation';
import validationRequest from '../../utils/validationRequest';

const router = express.Router();

router.post(
  '/create-academic-department',
  // validationRequest(
  //   AcademicDepartmentValidation.createAcademicDepartmentValidationSchema,
  // ),
  AcademicDepartmentControllers.createAcademicDepartmemt,
);

router.get(
  '/:departmentId',
  AcademicDepartmentControllers.getSingleAcademicDepartment,
);

router.patch(
  '/:departmentId',
  validationRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentControllers.updateAcademicDeartment,
);

router.get('/', AcademicDepartmentControllers.getAllAcademicDepartments);

export const AcademicDepartmentRoutes = router;
