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
router.get('/', (req, res) => {
  const products = service.find()
  res.json(products)
})

// ejemplo, rutas especificas antes de uno variable como el de /products/:id
router.get('/filter', (req, res) => {
  res.send('Yo soy un filter')
})

// ruta para obtener productos por id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id)
  res.json(product)
});

// ruta para crear productos "POST"
router.post('/', (req, res) => {
  const body = req.body
  res.status(201).json({
    message: 'product created',
    data: body
  })
})

// ruta para actualizar productos "PATCH"
router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  res.status(201).json({
    message: 'product update',
    data: body,
    id,
  })
})

// ruta para eliminar productos "DELETE"
router.delete('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    message: 'product deleted',
    id,
  })
})

module.exports = router
