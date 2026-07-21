import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

import applicationRouter from './resources/applications/router'
import userRouter from './resources/users/router'
import { connect } from './utils/db'
import { simulate } from './utils/latency'

const PORT = process.env.PORT || 3333

const app = express()

app.use(helmet())

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.use(morgan('dev'))

app.use(cors())

app.use('/api/applications', applicationRouter)
app.use('/api/users', userRouter)

app.get('/latency', simulate)

app.get('*', (req, res) => {
  res.json({
    message: 'Node.js, Express, and MongoDB API!'
  })
})

export const start = async () => {
  // Kick off the DB connection but don't block booting on it, so the non-DB
  // routes (/latency, catch-all) stay usable even if MongoDB is unreachable.
  // Connection errors are reported by the 'error' handler set up in connect().
  connect().catch(() => {})

  app.listen(PORT, () => {
    console.log(`REST API on http://localhost:${PORT}`)
  })
}
