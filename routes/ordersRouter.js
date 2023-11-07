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

// ruta para crear ordenes
router.post('/', (req, res) => {
  const body = req.body
  const newOrder = service.create(body)
  res.status(201).json(newOrder)
})

// ruta para actualizar ordenes
router.patch('/:orderId', (req, res) => {
  const { orderId } = req.params
  const body = req.body
  const order = service.update(orderId, body)
  res.status(201).json(order)
})

// ruta para eliminar ordenes
router.delete('/:orderId', (req, res) => {
  const { orderId } = req.params
  const rta = service.delete(orderId)
  res.json(rta)
})

module.exports = router
