import express from 'express'
import studentRouter from './student.routes'

const router = express.Router()

router.use('/v1/student', studentRouter)

export default router
