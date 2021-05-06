import { Router } from 'express'

const UserController = require('../controllers/userController')

const router = Router()

router.post('/registration', UserController.registration)

module.exports = router
