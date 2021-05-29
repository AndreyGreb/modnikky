import { Schema, model } from 'mongoose'

const schema = new Schema({
  category: { type: String, required: true, uniquie: true },
})

module.exports = model('Category', schema)
