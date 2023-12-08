const express = require('express')
const productsRouter = require('./productsRouter')
const categoriesRouter = require('./categoriesRouter')
const ordersRouter = require('./ordersRouter')
const usersRouter = require('./usersRouter')

function routerApi(app) {

  const router = express.Router()
  app.use('/api/v1', router)

  router.use('/products', productsRouter)
  router.use('/categories', categoriesRouter)
  router.use('/orders', ordersRouter)
  router.use('/users', usersRouter)
}

module.exports = routerApi
