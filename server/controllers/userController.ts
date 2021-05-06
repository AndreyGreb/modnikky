const User = require('../models/User')

class UserController {
    async registration (req:any, res:any) {
        try {
          const { email, password } = req.body
      
          const isUsed = await User.findOne({ email })
      
          if (isUsed) {
            return res.status(300).json({ message: 'Данный email уже занят!' })
          }
      
          const user = new User({
            email,
            password,
          })
      
          await user.save()
      
          res.status(201).json({ message: 'Пользователь зарегистрирован!' })
        } catch (error) {
          console.log(error)
        }
      }
}

module.exports = new UserController()