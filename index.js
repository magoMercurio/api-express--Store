const express = require('express');
const { faker } = require('@faker-js/faker')

const app = express();
const port = 3001;

// ruta raiz
app.get('/', (req, res) => {
    res.send('server en Express')
})

//ejemplo, borrar al final
app.get('/nueva-ruta', (req, res) => {
  res.send('nueva ruta')
})




// ruta para obtener categorias
app.get('/categories',(req,res)=>{
  const {categoryId}= req.params
  res.json([
    {
      categoryId,
      category: 'Food',
      products: []
    },
    {
      categoryId,
      category: 'Games',
      products: []
    },
    {
      categoryId,
      category: 'clothes',
      products: []
    },
  ])
})

// ruta para obtener categorias por id
app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  })
})

// ruta para obtener ordenes
app.get('/orders', (req, res) => {
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
app.get('/orders/:orderId', (req, res) => {
  const { orderId } = req.params
  res.json({
    orderId,
    name: 'order 1',
    price: 1000,
  })
})

app.get('/users', (req, res) => {
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

app.get('/users/:userId', (req, res) => {
  const { userId } = req.params
  res.json({
    userId,
    name: 'user 1',
    age: 20,
  })
})


app.listen(port, () => {
  console.log('mi port' + port)
})
