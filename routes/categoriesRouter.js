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

// ruta para crear categorias
router.post('/', (req, res) => {
  const body = req.body
  const newCategory = service.create(body)
  res.status(201).json(newCategory)
})

// ruta para actualizar categorias
router.patch('/:categoryId', (req, res) => {
  const { categoryId } = req.params
  const body = req.body
  const category = service.update(categoryId, body)
  res.status(201).json(category)
})

// ruta para eliminar categorias
router.delete('/:categoryId', (req, res) => {
  const { categoryId } = req.params
  const rta = service.delete(categoryId)
  res.json(rta)
})

module.exports = router
