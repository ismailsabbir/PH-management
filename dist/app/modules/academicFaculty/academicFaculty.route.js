"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicFacultyRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validationRequest_1 = __importDefault(require("../../utils/validationRequest"));
const academicFaculty_validation_1 = require("./academicFaculty.validation");
const academicFaculty_controller_1 = require("./academicFaculty.controller");
const router = express_1.default.Router();
router.post('/create-academic-faculty', (0, validationRequest_1.default)(academicFaculty_validation_1.AcademicFacultyValidation.createAcademicFacultyValidationSchema), academicFaculty_controller_1.AcademicFacultyControllers.createAcademicFaculty);
router.get('/:facultyId', academicFaculty_controller_1.AcademicFacultyControllers.getSingleAcademicFaculty);
router.patch('/:facultyId', (0, validationRequest_1.default)(academicFaculty_validation_1.AcademicFacultyValidation.updateAcademicFacultyValidationSchema), academicFaculty_controller_1.AcademicFacultyControllers.updateAcademicFaculty);
router.get('/', academicFaculty_controller_1.AcademicFacultyControllers.getAllAcademicFaculties);
exports.AcademicFacultyRoutes = router;
