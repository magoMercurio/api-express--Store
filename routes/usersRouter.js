const express = require('express')
const UserService = require('../services/userService')

const router = express.Router()
const service = new UserService()

router.get('/', (req, res) => {
  const users = service.find()
  res.json(users)
})

router.get('/:userId', (req, res) => {
  const { userId } = req.params
  const user = service.findOne(userId)
  res.json(user)
})

module.exports = router
