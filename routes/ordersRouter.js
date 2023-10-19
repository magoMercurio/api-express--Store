const express = require('express')

const router = express.Router()

// ruta para obtener ordenes
router.get('/', (req, res) => {
  res.json ([
    {
      name: 'order 1',
      price: 1000,
    },
    {
      name: 'order 2',
      price: 2000,
    },
    {
      name: 'order 3',
      price: 3000,
    }
  ])
})

// ruta para obtener ordenes por id
router.get('/:orderId', (req, res) => {
  const { orderId } = req.params
  res.json({
    orderId,
    name: 'order 1',
    price: 1000,
  })
})

module.exports = router
