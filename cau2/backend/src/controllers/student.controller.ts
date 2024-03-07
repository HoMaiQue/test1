import { Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { STUDENT_MESSAGE } from '~/constants/message'
import { Created, Ok } from '~/core/success.response'
import studentService from '~/services/student.service'

class PostController {
  createStudent = async (req: Request<ParamsDictionary, any, any>, res: Response) => {
    return new Created({
      message: STUDENT_MESSAGE.CREATE_STUDENT_SUCCESS,
      metaData: await studentService.createStudent(req.body)
    }).send(res)
  }
  getAllStudent = async (req: Request<ParamsDictionary, any, any>, res: Response) => {
    return new Ok({
      message: STUDENT_MESSAGE.GET_ALL_STUDENT_SUCCESS,
      metaData: await studentService.getAllStudent(req.query)
    }).send(res)
  }
  getStudentById = async (req: Request<ParamsDictionary, any, any>, res: Response) => {
    return new Ok({
      message: STUDENT_MESSAGE.GET_STUDENT_DETAIL_SUCCESS,
      metaData: await studentService.getStudentById(req.params.id)
    }).send(res)
  }
  deleteStudent = async (req: Request<ParamsDictionary, any, any>, res: Response) => {
    return new Ok({
      message: STUDENT_MESSAGE.DELETE_STUDENT_SUCCESS,
      metaData: await studentService.deleteStudent(req.params.id)
    }).send(res)
  }
  searchStudent = async (req: Request<ParamsDictionary, any, any>, res: Response) => {
    return new Ok({
      message: STUDENT_MESSAGE.SEARCH_STUDENT_SUCCESS,
      metaData: await studentService.deleteStudent(req.params.keySearch)
    }).send(res)
  }
  updateStudent = async (req: Request<ParamsDictionary, any, any>, res: Response) => {
    return new Ok({
      message: STUDENT_MESSAGE.UPDATE_STUDENT_SUCCESS,
      metaData: await studentService.updateStudent(req.params.id, req.body)
    }).send(res)
  }
}

export default new PostController()
