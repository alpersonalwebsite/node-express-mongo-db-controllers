import { toNumber } from '../utils/helpers'

export const getOne = (model) => async (req, res) => {
  try {
    const doc = await model.findOne({ _id: req.params.id }).lean().exec()

    if (!doc) {
      return res.status(404).end()
    }

    res.status(200).json({ data: doc })
  } catch (err) {
    console.error(err)
    res.status(400).end()
  }
}

export const getSomeOrAll = (model) => async (req, res) => {
  try {
    const docs = await model
      .find()
      .limit(toNumber(req.query.limit || 40))
      .skip(toNumber(req.query.offset))
      .lean()
      .exec()

    res.status(200).json({ data: docs })
  } catch (err) {
    console.error(err)
    res.status(400).end()
  }
}

export const createOne = (model) => async (req, res) => {
  try {
    const newDoc = await model.create({ ...req.body })

    res.status(200).json({ data: newDoc })
  } catch (err) {
    console.error(err)
    res.status(400).end()
  }
}

export const updateOne = (model) => async (req, res) => {
  try {
    const updatedDoc = await model.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).lean().exec()

    if (!updatedDoc) {
      return res.status(400).end()
    }

    res.status(200).json({ data: updatedDoc })
  } catch (err) {
    console.error(err)
    res.status(400).end()
  }
}

export const deleteOne = (model) => async (req, res) => {
  try {
    const removedDoc = await model.findOneAndRemove({ _id: req.params.id })

    console.log(removedDoc)

    if (!removedDoc) {
      return res.status(404).end()
    }
    res.status(200).json({ data: removedDoc })
  } catch (err) {
    console.error(err)
    res.status(400).end()
  }
}

export const genericControllers = (model) => ({
  getOne: getOne(model),
  getSomeOrAll: getSomeOrAll(model),
  createOne: createOne(model),
  updateOne: updateOne(model),
  deleteOne: deleteOne(model)
})
