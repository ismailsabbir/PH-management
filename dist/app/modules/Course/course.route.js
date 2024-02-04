"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validationRequest_1 = __importDefault(require("../../utils/validationRequest"));
const course_validation_1 = require("./course.validation");
const course_controller_1 = require("./course.controller");
const router = express_1.default.Router();
router.post('/create-course', (0, validationRequest_1.default)(course_validation_1.CourseValidations.createCourseValidationSchema), course_controller_1.CourseControllers.createCourse);
router.get('/:id', course_controller_1.CourseControllers.getSingleCourse);
router.delete('/:id', course_controller_1.CourseControllers.deleteCourse);
router.get('/', course_controller_1.CourseControllers.getAllCourses);
router.patch('/:id', (0, validationRequest_1.default)(course_validation_1.CourseValidations.updateCourseValidationSchema), course_controller_1.CourseControllers.updateCourse);
exports.CourseRoutes = router;
