import { Schema, model, Types } from 'mongoose'

const schema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User', required: true, uniquie: true },
})

module.exports = model('Basket', schema)