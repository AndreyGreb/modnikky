import { Router } from 'express'

const {check} = require('express-validator')

const UserController = require('../controllers/userController')
const authMiddleWare = require('../middleWare/authMiddleWare')

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

router.get(
  '/auth',
  authMiddleWare,
  UserController.check
)

module.exports = router
