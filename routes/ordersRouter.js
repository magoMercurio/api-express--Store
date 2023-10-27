const express = require('express')
const OrderServices = require('../services/orderService')

const router = express.Router()
const service = new OrderServices()

// ruta para obtener ordenes
router.get('/', (req, res) => {
  const orders = service.find()
  res.json (orders)
})

// ruta para obtener ordenes por id
router.get('/:orderId', (req, res) => {
  const { orderId } = req.params
  const order = service.findOne(orderId)
  res.json(order)
})

module.exports = router
