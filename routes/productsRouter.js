const express = require('express');
const { faker } = require('@faker-js/faker')

const router = express.Router()

// funcion para generar productos aleatorios
const randomProducts = (limit = 100) =>{
  const productos = Array.from({ length: limit }, () => ({
    productName: faker.commerce.productName(),
    price: parseInt(faker.commerce.price()),
    image: faker.image.url(),
  }))
  return productos
}

// ruta para obtener productos
// el nombre de la ruta
router.get('/', (req, res) => {
  const { size } = req.query
  const products = randomProducts(size)
  res.json(products)
})

// ejemplo, rutas especificas antes de uno variable como el de /products/:id
router.get('/filter', (req, res) => {
  res.send('Yo soy un filter')
})

// ruta para obtener productos por id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'producto 2',
    price: 2000,
  });
});

module.exports = router