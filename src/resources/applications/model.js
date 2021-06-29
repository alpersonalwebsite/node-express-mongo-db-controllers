import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ApplicationsSchema = new Schema(
  {
    name: String,
    bundle_id: String,
    version: String
  },
  { collection: 'applications' }
)

export const Applications = mongoose.model('Applications', ApplicationsSchema)
