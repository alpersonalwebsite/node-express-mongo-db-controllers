import { Router } from 'express'

import { getUsers } from './controllers'

const router = Router()

// equals to /api/user
router.get('/', getUsers)

export default router
