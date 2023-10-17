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

app.listen(port, () => {
  console.log('mi port' + port)
})
