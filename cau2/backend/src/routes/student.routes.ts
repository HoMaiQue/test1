import { Router } from 'express'
import studentController from '~/controllers/student.controller'

import asyncHandler from '~/helpers/asyncHandler'

const studentRouter = Router()
studentRouter.post('/', asyncHandler(studentController.createStudent))
studentRouter.get('/', asyncHandler(studentController.getAllStudent))
studentRouter.get('/:keySearch', asyncHandler(studentController.searchStudent))
studentRouter.get('/:id', asyncHandler(studentController.getStudentById))
studentRouter.delete('/:id', asyncHandler(studentController.deleteStudent))
studentRouter.put('/:id', asyncHandler(studentController.deleteStudent))



export default studentRouter
