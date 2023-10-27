const express = require('express');
const routerApi =require('./routes');


const app = express();

// puerto
const port = 3001;

app.use(express.json());

// ruta raiz
app.get('/', (req, res) => {
    res.send('server en Express')
})

//ejemplo, borrar al final
app.get('/nueva-ruta', (req, res) => {
  res.send('nueva ruta')
})

routerApi(app);


// escuchar peticiones
app.listen(port, () => {
  console.log('mi port' + port)
})
