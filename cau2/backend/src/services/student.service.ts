import { Types } from 'mongoose'
import { NotFoundError } from '~/core/error.response'
import studentSchema, { StudentDocument } from '~/model/schemas/student.schema'
import { removeUndefinedObject } from '~/utils'

class StudentService {
  async createStudent(payload: StudentDocument) {
    const student = await studentSchema.create(payload)
    return student
  }
  async getAllStudent({ limit = 40, sort = 'ctime', page = 1 }: { limit?: number; sort?: string; page?: number }) {
    const skip = (page - 1) * limit
    const sortBy: any = sort === 'ctime' ? { _id: -1 } : { _id: 1 }
    const studentList = await studentSchema.find({}).sort(sortBy).skip(skip).limit(limit).lean()
    return studentList
  }
  async getStudentById(id: string) {
    return studentSchema.findById(id).lean()
  }

  async deleteStudent(id: string) {
    return await studentSchema.deleteOne({ _id: new Types.ObjectId(id) })
  }

  async updateStudent(id: string, payload: any) {
    const student = await studentSchema.findOne({ _id: new Types.ObjectId(id) })
    if (!student) {
      throw new NotFoundError('Student not found')
    }
    const newPayload = removeUndefinedObject({
      ...payload
    })
    return await studentSchema.findByIdAndUpdate(id, newPayload, { new: true })
  }

  async searchStudent(keySearch: string) {
    const regexSearch = new RegExp(keySearch)

    const result = await studentSchema
      .find(
        {
          $text: { $search: regexSearch.toString() }
        },
        { score: { $meta: 'textScore' } }
      )
      .sort({ score: { $meta: 'textScore' } })
      .lean()
    return result
  }
}

export default new StudentService()
