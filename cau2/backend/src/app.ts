import compression from 'compression'
import dotenv from 'dotenv'
import express, { NextFunction, Request, Response } from 'express'
import { default as helmet } from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import instanceMongoDB from '~/dbs/init.mongodb'
import router from './routes'

dotenv.config()
const app = express()

// init middleware
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())

app.use(express.json({ limit: '50mb' }))
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(cors())
// init db
instanceMongoDB
// client

//init router
app.use('/', router)

// handle errors
app.use((reg, res, next) => {
  const error: any = new Error('Not Found')
  error.status = 404
  next(error)
})

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = error.status || 500
  return res.status(statusCode).json({
    stack: error.stack,
    message: error.message || 'Internal Server Error',
    ...error
  })
})
export default app
