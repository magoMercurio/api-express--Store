const express = require('express')
const CategoryServices = require('../services/categoryService')

const router = express.Router()
const service = new CategoryServices()

// ruta para obtener categorias
router.get('/',(req,res)=>{
  const categories = service.find()
  res.json(categories)
})

// ruta para obtener categorias por id
router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  const category = service.findOne(categoryId)
  res.json({
    category,
    productId
  })
})

module.exports = router
