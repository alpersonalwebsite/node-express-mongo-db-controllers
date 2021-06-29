import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UsersSchema = new Schema(
  {
    firstname: String,
    lastname: String,
    age: Number,
    gender: String,
    username: String,
    company: String,
    email: String,
    phone: String,
    address: String
  },
  { collection: 'users' }
)

export const Users = mongoose.model('Users', UsersSchema)
