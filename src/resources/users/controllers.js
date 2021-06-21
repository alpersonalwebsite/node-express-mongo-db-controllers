import { toNumber } from '../../utils/helpers'
import { Users } from './model'

export const getUsers = async (req, res) => {
  try {
    const docs = await Users.find().limit(toNumber(req.query.limit)).skip(toNumber(req.query.offset)).exec()
    res.status(200).json({ data: docs })
  } catch (err) {
    console.error(err)
    res.status(400).end()
  }
}
