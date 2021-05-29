import { Router } from 'express'

const userRouter = require('./userRouter')
const categoryRouter = require('./categoryRouter')

const router = Router()


router.use('/user', userRouter)
router.use('/category', categoryRouter)

module.exports = router