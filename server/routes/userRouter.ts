import { Router } from 'express'

const {check} = require('express-validator')

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

router.post(
  '/login',
  [
    check('email', 'Некорректный email!').isEmail(),
    check('password', 'Некорректный пароль!').exists(),
  ],
  UserController.login
)

module.exports = router
