import express from 'express'
import mongoose from 'mongoose'
require('dotenv').config()

const PORT = process.env.PORT || 5000
const URI_DB= 'mongodb+srv://andrey:1q2w3e4r@cluster0.tqus9.mongodb.net/app?retryWrites=true&w=majority'

const app = express()

async function start() {
  try {
      await mongoose.connect(URI_DB, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: true
      })
    app.listen(PORT, () =>
      console.log(`Server has been started on port ${PORT}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
