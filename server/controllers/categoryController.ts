const Category = require("../models/Category");

class CategoryController {
  async create(req: any, res: any) {
    try {
        
      const { category } = req.body;

      const categories = await Category.create({ category });

      return res.status(201).json({
        message: "create category",
        categories,
      });
    } catch (error) {
      res.json(error);
      console.log(error);
    }
  }

  async getAll(req: any, res: any) {
    try {
      const categories = await Category.find({});

      return res.status(201).json(categories);
    } catch (error) {
      res.json(error);
      console.log(error);
    }
  }
}

module.exports = new CategoryController();
