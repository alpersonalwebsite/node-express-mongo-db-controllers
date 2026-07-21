import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

import applicationRouter from './resources/applications/router'
import userRouter from './resources/users/router'
import { connect } from './utils/db'
import { simulate } from './utils/latency'

const PORT = 3333

const app = express()

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
  try {
    await connect()
    app.listen(PORT, () => {
      console.log(`REST API on http://localhost:${PORT}`)
    })
  } catch (e) {
    console.error(e)
  }
}
