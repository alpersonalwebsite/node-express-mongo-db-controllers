import { Router } from 'express'

import controllers from './controllers'

const router = Router()

// equals to /api/applications
router.route('/').get(controllers.getSomeOrAll).post(controllers.createOne)

router.route('/:id').get(controllers.getOne).put(controllers.updateOne).delete(controllers.deleteOne)

export default router
