import { Schema, model, Document, ObjectId, Types } from 'mongoose'

const DOCUMENT_NAME = 'Student'
const COLLECTION_NAME = 'students'

export interface StudentDocument extends Document {
  full_name: string
  gender: boolean
  score: number
  admission_date: string
}
// Declare the Schema of the Mongo model
const studentSchema = new Schema<StudentDocument>(
  {
    full_name: {
      type: String,
      required: true
    },
    gender: { type: Boolean, required: true },
    score: { type: Number, required: true },
    admission_date: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME
  }
)
studentSchema.index({ full_name: 'text' })

//Export the model
export default model<StudentDocument>(DOCUMENT_NAME, studentSchema)
