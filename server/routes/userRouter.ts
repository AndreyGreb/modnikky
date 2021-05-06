import { check } from 'express-validator'
import { Router } from 'express'

const UserController = require('../controllers/userController')

const router = Router()

router.post(
  '/registration',
  [
    check('email', 'Некорректный email!').isEmail(),
    check('password', 'Некорректный пароль!').isLength({ min: 6 }),
  ],
  UserController.registration
)

module.exports = router
