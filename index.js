const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('server en Express')
})

app.get('/nueva-ruta', (req, res) => {
  res.send('nueva ruta')
})

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'producto 1',
      price: 1000
    },
    {
      name: 'producto 2',
      price: 2000
    }
  ])
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'producto 2',
    price: 2000,
  });
});

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

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  })
})

app.get('/categories/')


app.listen(port, () => {
  console.log('mi port' + port)
})
