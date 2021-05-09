import { Schema, model } from 'mongoose'

const schema = new Schema({
  email: { type: String, required: true, uniquie: true },
  password: { type: String, required: true },
})

module.exports = model('User', schema)
