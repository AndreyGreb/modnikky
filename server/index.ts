import express from 'express'
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))