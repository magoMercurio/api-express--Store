const express = require('express');
/* const { faker } = require('@faker-js/faker') */

const ProductServices = require('../services/productService');

const router = express.Router()
const service = new ProductServices()

// funcion para generar productos aleatorios
/* const randomProducts = (limit = 100) =>{
  const productos = Array.from({ length: limit }, () => ({
    productName: faker.commerce.productName(),
    price: parseInt(faker.commerce.price()),
    image: faker.image.url(),
  }))
  return productos
} */

// ruta para obtener productos
// el nombre de la ruta
router.get('/', async (req, res) => {
  const products = await service.find()
  res.json(products)
})

// ejemplo, rutas especificas antes de uno variable como el de /products/:id
router.get('/filter', (req, res) => {
  res.send('Yo soy un filter')
})

// ruta para obtener productos por id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id)
  res.json(product)
});

// ruta para crear productos "POST"
router.post('/', async (req, res) => {
  const body = req.body
  const newProduct = await service.create(body)
  res.status(201).json(newProduct)
})

// ruta para actualizar productos "PATCH"
router.patch('/:id', async (req, res) => {

  try {
    const { id } = req.params
    const body = req.body
    const product = await service.update(id, body)
    res.status(201).json(product)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
  
})

// ruta para eliminar productos "DELETE"
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const rta = await service.delete(id)
  res.json(rta)
})

module.exports = router
