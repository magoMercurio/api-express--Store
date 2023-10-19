const productsRouter = require('./productsRouter')
const categoriesRouter = require('./categoriesRouter')
const ordersRouter = require('./ordersRouter')
const usersRouter = require('./usersRouter')

function routerApi(app) {
  app.use('/api/products', productsRouter)
  app.use('/api/categories', categoriesRouter)
  app.use('/api/orders', ordersRouter)
  app.use('/api/users', usersRouter)
}

module.exports = routerApi
