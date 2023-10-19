const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  const { limit, offset } = req.query

  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send('no hay parametros')
  }
})

router.get('/:userId', (req, res) => {
  const { userId } = req.params
  res.json({
    userId,
    name: 'user 1',
    age: 20,
  })
})

module.exports = router
