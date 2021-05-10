const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User')
const Basket = require('../models/Basket')

const generateJWT = (id: string, email: string) => {
  return jwt.sign({ id, email }, process.env.SECRET_KEY, { expiresIn: '24h' })
}

class UserController {
  async registration(req: any, res: any) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при регистрации!',
        })
      }

      const { email, password } = req.body

      const isUsed = await User.findOne({ email })

      if (isUsed) {
        return res
          .status(300)
          .json({ message: 'Пользователь с таким email уже существует!' })
      }

      const hashPassword = await bcrypt.hash(password, 5)

      const user = await User.create({ email, password: hashPassword })

      const basket = await Basket.create({ userId: user.id })

      const token = generateJWT(user.id, user.email)
      return res
        .status(201)
        .json({
          message: 'Пользователь успешно зарегистрирован!',
          token: token,
        })
    } catch (error) {
      res.json(error)
      console.log(error)
    }
  }

  async login(req: any, res: any) {

    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при  авторизации!',
        })
      }

      const { email, password } = req.body

      const user = await User.findOne({ email })

      if (!user) {
        return res.status(400).json({ message: 'Такого email нет в базе!' })
      }

      const isMatched = bcrypt.compareSync(password, user.password)

      if (!isMatched) {
        return res.status(400).json({ message: 'Пароли не совпадают!' })
      }

      const token = generateJWT(user.id, user.email)

      return res
        .status(201)
        .json({ message: 'Пользователь успешно авторизован!', token: token })
    } catch (error) {
      res.json(error)
      console.log(error)
    }
  }

  async check(req: any, res: any) {

    try {
      const token = generateJWT(req.user.id, req.user.email)
      return res
        .status(201)
        .json({token})
    } catch (error) {
      res.json(error)
      console.log(error)
    }
  }
}

module.exports = new UserController()
