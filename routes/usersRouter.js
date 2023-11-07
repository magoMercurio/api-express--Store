const express = require('express')
const UserService = require('../services/userService')

const router = express.Router()
const service = new UserService()

router.get('/', (req, res) => {
  const users = service.find()
  res.json(users)
})

//ruta para obtener un usuario por su id
router.get('/:userId', (req, res) => {
  const { userId } = req.params
  const user = service.findOne(userId)
  res.json(user)
})

// ruta para crear un usuario "POST"
router.post('/', (req, res) => {
  const body = req.body
  const newUser = service.create(body)
  res.status(201).json(newUser)
})

// ruta para actualizar un usuario "PATCH"
router.patch('/:userId', (req, res) => {
  const { userId } = req.params
  const body = req.body
  const user = service.update(userId, body)
  res.status(201).json(user)
})

// ruta para eliminar un usuario "DELETE"
router.delete('/:userId', (req, res) => {
  const { userId } = req.params
  const rta = service.delete(userId)
  res.json(rta)
})

module.exports = router
