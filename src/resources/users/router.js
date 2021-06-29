import { Router } from 'express'

import controllers from './controllers'

const router = Router()

// equals to /api/users
router.route('/').get(controllers.getSomeOrAll)

router.route('/:id').get(controllers.getOne)

export default router
