const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const router = require('./routes/index')


const PORT = process.env.PORT || 5000
const URI_DB= 'mongodb+srv://andrey:1q2w3e4r@app.5ucmo.mongodb.net/app?retryWrites=true&w=majority'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/modnikky', router)

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
