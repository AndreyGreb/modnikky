import { Router } from 'express'


const CategoryController = require('../controllers/categoryController')

const router = Router()

router.post(
  '/create',
  CategoryController.create
)

router.get(
  '/getAll',
  CategoryController.getAll
)

module.exports = router
